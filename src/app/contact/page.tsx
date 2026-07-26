"use client";

import FadeIn from "@/components/FadeIn";
import GoogleMap from "@/components/GoogleMap";
import { AtSign, CheckCircle, ExternalLink, MapPin, Phone, Send } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(5, "Subject is required."),
  message: z.string().min(10, "Message must be at least 10 characters.")
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form Submitted:", data);
    setIsSuccess(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Section 1: Hero (Simple & Direct) */}
      <section className="pt-40 pb-20 bg-zinc-950 border-b border-zinc-900 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn direction="up">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Let’s Connect.</h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-lg md:text-xl text-zinc-400">
              Have a general question or want to drop by the studio?<br className="hidden md:block" />
              Reach out to our team below.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Section 2: Contact Methods (Quick Access) */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeIn>
              <a href="mailto:ash@zennstudios.com" className="glass-card p-10 rounded-2xl flex flex-col items-center justify-center text-center group h-full">
                <AtSign className="w-10 h-10 text-brand-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-zinc-400 group-hover:text-white transition-colors">ash@zennstudios.com</p>
              </a>
            </FadeIn>
            <FadeIn delay={0.1}>
              <a href="tel:+15483893697" className="glass-card p-10 rounded-2xl flex flex-col items-center justify-center text-center group h-full">
                <Phone className="w-10 h-10 text-brand-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p className="text-zinc-400 group-hover:text-white transition-colors">+1 (548) 389-3697</p>
              </a>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="glass-card p-10 rounded-2xl flex flex-col items-center justify-center text-center h-full">
                <ExternalLink className="w-10 h-10 text-brand-primary mb-6" />
                <h3 className="text-xl font-bold mb-4">Socials</h3>
                <div className="flex gap-4">
                  <a href="https://instagram.com/zenn_stuudios_" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">Instagram</a>
                  <a href="https://ca.linkedin.com/company/zenn-studios" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">LinkedIn</a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section 3: The General Reach-Out (Simple Form) */}
      <section className="py-20 bg-zinc-950 border-y border-zinc-900">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <div className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden">
              <h2 className="text-3xl font-bold mb-8">Send a Message</h2>
              
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-brand-primary mb-6" />
                  <h3 className="text-2xl font-bold mb-2">Message Received</h3>
                  <p className="text-zinc-400">We'll get back to you within 24-48 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">Your Name</label>
                    <input
                      {...register("name")}
                      type="text"
                      placeholder="Jane Doe"
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary"
                    />
                    {errors.name && <p className="text-brand-primary text-xs mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">Your Email</label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="jane@example.com"
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary"
                    />
                    {errors.email && <p className="text-brand-primary text-xs mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">Subject</label>
                    <input
                      {...register("subject")}
                      type="text"
                      placeholder="General Inquiry / Hello"
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary"
                    />
                    {errors.subject && <p className="text-brand-primary text-xs mt-1">{errors.subject.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">Message</label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      placeholder="How can we help you?"
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary resize-none"
                    />
                    {errors.message && <p className="text-brand-primary text-xs mt-1">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-primary hover:bg-brand-primary/80 text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center"
                  >
                    {isSubmitting ? "Sending..." : (
                      <>Send Message <Send className="w-4 h-4 ml-2" /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 4: The Location (The Anchor) */}
      <section className="bg-black relative">
        <div className="flex flex-col lg:flex-row h-auto lg:h-[600px] w-full">
          {/* Sidebar */}
          <div className="w-full lg:w-1/3 bg-zinc-950 p-12 lg:p-20 flex flex-col justify-center border-r border-zinc-900 relative z-10">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-10 tracking-tighter">Location & Hours</h2>
              
              <div className="space-y-8">
                <div>
                  <div className="flex items-start text-zinc-400">
                    <MapPin className="w-5 h-5 text-brand-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold mb-1">Base & Studio</p>
                      <p>Brantford, ON &bull; GTA<br /><span className="text-xs text-zinc-500 font-mono">(Home Office & Local Client Visits)</span></p>
                    </div>
                  </div>
                </div>
                
                <div className="pl-8 border-l border-zinc-800">
                  <p className="text-white font-semibold mb-1">Operating Hours</p>
                  <p className="text-zinc-400 text-sm font-mono">10:00 AM – 6:00 PM EST</p>
                </div>
                
                <div className="pl-8 border-l border-zinc-800">
                  <p className="text-white font-semibold mb-1">Contact Email</p>
                  <p className="text-zinc-400 text-sm font-mono">ash@zennstudios.com</p>
                </div>
              </div>
            </FadeIn>
          </div>
          
          {/* Live Google Map */}
          <div className="w-full lg:w-2/3 h-[400px] lg:h-full">
            <GoogleMap className="w-full h-full rounded-none border-0" />
          </div>
        </div>
      </section>

      {/* Section 5: High-Priority CTA */}
      <section className="py-24 relative overflow-hidden bg-brand-primary">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(0,0,0,0.3),_transparent)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tighter">Ready to start a specific project?</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              To give us the details we need for an accurate quote and architectural timeline, please use our detailed project planner.
            </p>
            <Link href="/enquiry" className="bg-black text-white hover:bg-zinc-900 px-10 py-5 rounded-full text-lg font-bold transition-all shadow-xl">
              Go to Project Planner
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
