"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian phone number"),
  location: z.enum(["pudukkottai", "trichy", "other"]),
  service: z.enum(["kitchen", "residential", "commercial", "construction", "other"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const locationOptions = [
  { id: "pudukkottai", label: "Pudukkottai" },
  { id: "trichy", label: "Trichy" },
  { id: "other", label: "Other Area" },
] as const;

const serviceOptions = [
  { id: "kitchen", label: "Modular Kitchen" },
  { id: "residential", label: "Residential Interiors" },
  { id: "commercial", label: "Commercial Design" },
  { id: "construction", label: "Construction / Promoters" },
  { id: "other", label: "Other" },
] as const;

export default function Contact() {
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", location: "pudukkottai", service: "kitchen", message: "" },
  });

  useEffect(() => { register("location"); register("service"); }, [register]);
  const selectedLocation = watch("location");
  const selectedService = watch("service");

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "d7315b4f-dde3-40ed-b94d-ed4418cca62c",
          name: data.name,
          email: data.email,
          phone: data.phone,
          location: data.location,
          service: data.service,
          message: data.message,
          from_name: "Texas Interiors & Promoters - Website",
          subject: `New Lead: ${data.name} (${data.service.toUpperCase()})`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitSuccess(true);
        reset({ name: "", email: "", phone: "", location: "pudukkottai", service: "kitchen", message: "" });
      } else {
        alert("Enquiry transmission error: " + (result.message || "Please check access key config."));
      }
    } catch (error) {
      console.error(error);
      alert("Network error: Could not reach form submission service. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative bg-[#080808]">
      {/* Section label strip */}
      <div className="flex items-center justify-between px-8 md:px-16 xl:px-24 py-5 border-y border-white/5">
        <span className="text-[9px] font-mono uppercase tracking-[0.45em] text-white/30">07 / Contact</span>
        <span className="text-[9px] font-mono uppercase tracking-[0.45em] text-white/30">Book a Consultation</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh]">

        {/* LEFT — Raw contact info, no icons */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-between px-8 md:px-16 xl:px-24 py-16 md:py-24 border-b lg:border-b-0 lg:border-r border-white/5"
        >
          <div className="flex flex-col gap-12">
            {/* Heading */}
            <h2
              className="font-serif text-white leading-none"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)", fontWeight: 200 }}
            >
              Let's{" "}
              <span className="italic font-black text-primary-light">Build</span>
              <br />
              Together
            </h2>

            {/* Giant phone number */}
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/25">Direct Line</span>
              <a
                href="tel:+919750976408"
                className="font-serif text-white hover:text-primary-light transition-colors duration-300 leading-none"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700, letterSpacing: "-0.03em" }}
              >
                +91 97509 76408
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/25">Email</span>
              <a
                href="mailto:isquarejeeva@gmail.com"
                className="text-white/60 hover:text-white transition-colors duration-300 text-lg md:text-xl font-light"
              >
                isquarejeeva@gmail.com
              </a>
            </div>

            {/* Addresses */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-white/5 pt-8">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/25"> Branch</span>
                <p className="text-white/40 text-sm font-light leading-relaxed">
                 Trichy - 3
                </p>
              </div>
            </div>

            {/* Director */}
            <div className="flex flex-col gap-1 border-t border-white/5 pt-8">
              <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/25">Director</span>
              <span className="text-white/60 text-sm font-light">Jeevanantham BE, MDIAD</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — Stark minimal form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-center px-8 md:px-16 xl:px-24 py-16 md:py-24"
        >
          <AnimatePresence mode="wait">
            {isSubmitSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-start gap-6"
              >
                <CheckCircle2 size={40} className="text-primary-light" />
                <h3 className="font-serif text-3xl text-white font-semibold">Request Received</h3>
                <p className="text-white/40 text-sm font-light leading-relaxed max-w-sm">
                  Thank you for reaching out. Our design team will contact you within 24 hours to schedule your consultation.
                </p>
                <button
                  onClick={() => setIsSubmitSuccess(false)}
                  className="text-[11px] uppercase tracking-[0.25em] text-white/40 hover:text-white transition-colors duration-300 border-b border-white/10 hover:border-white/40 pb-0.5"
                >
                  Submit Another Enquiry
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-10"
              >
                <div className="flex flex-col gap-1">
                  <h3 className="font-serif text-white text-2xl md:text-3xl font-semibold">Book Appointment</h3>
                  <p className="text-white/30 text-xs font-light mt-1">Fill in the details and we'll be in touch.</p>
                </div>

                {/* Name */}
                <div className="flex flex-col gap-2 relative">
                  <label className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/30">Full Name *</label>
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b border-white/10 focus:border-primary/50 focus:outline-none py-3 text-sm text-white placeholder:text-white/15 transition-colors duration-300"
                  />
                  {errors.name && <span className="text-[10px] text-red-400">{errors.name.message}</span>}
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/30">Email *</label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="name@example.com"
                      className="w-full bg-transparent border-b border-white/10 focus:border-primary/50 focus:outline-none py-3 text-sm text-white placeholder:text-white/15 transition-colors duration-300"
                    />
                    {errors.email && <span className="text-[10px] text-red-400">{errors.email.message}</span>}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/30">Phone *</label>
                    <input
                      {...register("phone")}
                      type="tel"
                      placeholder="97509 76408"
                      className="w-full bg-transparent border-b border-white/10 focus:border-primary/50 focus:outline-none py-3 text-sm text-white placeholder:text-white/15 transition-colors duration-300"
                    />
                    {errors.phone && <span className="text-[10px] text-red-400">{errors.phone.message}</span>}
                  </div>
                </div>

                {/* Location chips */}
                <div className="flex flex-col gap-3">
                  <label className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/30">Location *</label>
                  <div className="flex flex-wrap gap-2">
                    {locationOptions.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setValue("location", opt.id)}
                        className={`text-[10px] uppercase tracking-widest px-4 py-2 border transition-all duration-200 ${
                          selectedLocation === opt.id
                            ? "border-primary/60 bg-primary/10 text-primary-light"
                            : "border-white/10 text-white/30 hover:border-white/20 hover:text-white/50"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Service chips */}
                <div className="flex flex-col gap-3">
                  <label className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/30">Service Interested In *</label>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setValue("service", opt.id)}
                        className={`text-[10px] uppercase tracking-widest px-4 py-2 border transition-all duration-200 ${
                          selectedService === opt.id
                            ? "border-primary/60 bg-primary/10 text-primary-light"
                            : "border-white/10 text-white/30 hover:border-white/20 hover:text-white/50"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/30">Message *</label>
                  <textarea
                    {...register("message")}
                    rows={3}
                    placeholder="Briefly describe your project..."
                    className="w-full bg-transparent border-b border-white/10 focus:border-primary/50 focus:outline-none py-3 text-sm text-white placeholder:text-white/15 transition-colors duration-300 resize-none"
                  />
                  {errors.message && <span className="text-[10px] text-red-400">{errors.message.message}</span>}
                </div>

                {/* Full-width submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full flex items-center justify-between px-8 py-5 bg-primary hover:bg-primary-light text-white text-[11px] uppercase tracking-[0.25em] font-semibold transition-all duration-300 disabled:opacity-50 overflow-hidden"
                >
                  <span className="relative z-10">{isSubmitting ? "Sending..." : "Send Request"}</span>
                  <ArrowUpRight size={16} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
