"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<"default" | "hover" | "view">("default");
  const [cursorText, setCursorText] = useState("");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Springs for coordinates keep motion extremely fluid and smooth
  const springConfig = { damping: 30, stiffness: 400, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    let hasMoved = false;

    const moveCursor = (e: MouseEvent) => {
      if (!hasMoved) {
        // Jump the springs directly to the mouse coordinates to prevent fly-in sweeps
        cursorXSpring.set(e.clientX);
        cursorYSpring.set(e.clientY);
        hasMoved = true;
      }
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const interactive = target.closest("a, button, [role='button'], input, textarea, select, .hover-target");
      const viewable = target.closest("[data-cursor='view']");

      if (viewable) {
        setCursorType("view");
        setCursorText(viewable.getAttribute("data-cursor-text") || "VIEW");
      } else if (interactive) {
        setCursorType("hover");
      } else {
        setCursorType("default");
      }
    };

    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (typeof window !== "undefined" && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center text-center select-none"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: cursorType === "view" ? 80 : cursorType === "hover" ? 50 : 24,
          height: cursorType === "view" ? 80 : cursorType === "hover" ? 50 : 24,
          backgroundColor: cursorType === "view" ? "rgba(255, 255, 255, 0.96)" : "rgba(123, 44, 191, 0)",
          borderColor: cursorType === "view" ? "rgba(255, 255, 255, 1)" : cursorType === "hover" ? "#9d4edd" : "rgba(157, 78, 221, 0.6)",
          borderWidth: cursorType === "view" ? 0 : 1.5,
        }}
        transition={{ type: "spring", stiffness: 450, damping: 25 }}
      >
        {cursorType === "view" && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-black font-semibold text-[10px] tracking-widest text-center"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[10000]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: cursorType === "view" ? 0 : cursorType === "hover" ? 0.5 : 1,
          backgroundColor: cursorType === "hover" ? "#9d4edd" : "#ffffff",
        }}
      />
    </>
  );
}
