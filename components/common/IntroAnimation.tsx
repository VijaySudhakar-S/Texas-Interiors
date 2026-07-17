"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface IntroAnimationProps {
  onComplete: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentFrameRef = useRef<number>(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const totalFrames = 121;

  // Store the latest onComplete in a ref so it doesn't trigger effect restarts
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    // 1. Generate URLs & Preload Images
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    const handleImageLoad = () => {
      loadedCount++;
      const currentProgress = Math.round((loadedCount / totalFrames) * 100);
      setProgress(currentProgress);

      if (loadedCount === totalFrames) {
        imagesRef.current = loadedImages;
        setIsLoaded(true);
      }
    };

    const handleImageError = () => {
      // Still count failed images so we don't block the site from loading
      loadedCount++;
      const currentProgress = Math.round((loadedCount / totalFrames) * 100);
      setProgress(currentProgress);

      if (loadedCount === totalFrames) {
        imagesRef.current = loadedImages;
        setIsLoaded(true);
      }
    };

    for (let i = 1; i <= totalFrames; i++) {
      const img = new window.Image();
      const frameNum = String(i).padStart(3, "0");
      img.src = `/images/Intro/ezgif-frame-${frameNum}.avif`;
      img.onload = handleImageLoad;
      img.onerror = handleImageError;
      loadedImages.push(img);
    }

    return () => {
      // Cleanup any active animation
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, []);

  // 2. Setup Canvas and start animation when loaded
  useEffect(() => {
    if (!isLoaded || imagesRef.current.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Contain drawing calculation helper with custom scale factor
    const drawFrame = (index: number) => {
      const img = imagesRef.current[index];
      if (!img) return;

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      const imgWidth = img.naturalWidth || img.width;
      const imgHeight = img.naturalHeight || img.height;

      if (imgWidth === 0 || imgHeight === 0) return;

      const canvasRatio = canvasWidth / canvasHeight;
      const imgRatio = imgWidth / imgHeight;

      let drawWidth = canvasWidth;
      let drawHeight = canvasHeight;

      // Contain fit
      if (canvasRatio > imgRatio) {
        drawHeight = canvasHeight;
        drawWidth = canvasHeight * imgRatio;
      } else {
        drawWidth = canvasWidth;
        drawHeight = drawWidth / imgRatio;
      }

      // Scale factor to give it visual breathing room
      const isMobile = window.innerWidth <= 768;
      const scale = isMobile ? 0.90 : 0.50; // 70% width on mobile, 50% width on desktop
      drawWidth *= scale;
      drawHeight *= scale;

      const drawX = (canvasWidth - drawWidth) / 2;
      const drawY = (canvasHeight - drawHeight) / 2;

      // Draw pure black background
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      // Draw the frame
      ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
    };

    // Resize handler
    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      drawFrame(currentFrameRef.current);
    };

    // Initial resize setup
    handleResize();
    window.addEventListener("resize", handleResize);

    // Initial first frame draw
    drawFrame(0);

    // Fade out sequence
    const triggerFadeOut = () => {
      setIsFadingOut(true);
      setTimeout(() => {
        onCompleteRef.current();
      }, 900); // matches transition opacity duration in CSS
    };

    // GSAP frame counter playback
    const animObj = { frame: 0 };
    animationRef.current = gsap.to(animObj, {
      frame: totalFrames - 1,
      duration: 4.0, // smooth speed for 121 frames
      ease: "power1.out", // smooth deceleration at end
      onUpdate: () => {
        const index = Math.round(animObj.frame);
        currentFrameRef.current = index;
        drawFrame(index);
      },
      onComplete: () => {
        triggerFadeOut();
      },
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [isLoaded]);

  const handleSkip = () => {
    if (animationRef.current) {
      animationRef.current.kill();
    }
    setIsFadingOut(true);
    setTimeout(() => {
      onCompleteRef.current();
    }, 900);
  };

  return (
    <div
      ref={containerRef}
      className={`intro-overlay ${isFadingOut ? "fade-out" : ""}`}
    >
      {/* Black backdrop while preloading */}
      {!isLoaded && <div className="intro-loader" />}

      {/* Canvas for smooth rendering */}
      {isLoaded && <canvas ref={canvasRef} className="intro-canvas" />}

      {/* Skip Button */}
      <button onClick={handleSkip} className="intro-skip-btn" aria-label="Skip introduction animation">
        <span className="btn-text">Skip Intro</span>
        <span className="btn-arrow">&rarr;</span>
      </button>
    </div>
  );
}
