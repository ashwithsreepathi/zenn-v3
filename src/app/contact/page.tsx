"use client";

import FadeIn from "@/components/FadeIn";
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
              <a href="mailto:hello@zennstudios.com" className="glass-card p-10 rounded-2xl flex flex-col items-center justify-center text-center group h-full">
                <AtSign className="w-10 h-10 text-brand-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-zinc-400 group-hover:text-white transition-colors">hello@zennstudios.com</p>
              </a>
            </FadeIn>
            <FadeIn delay={0.1}>
              <a href="tel:+18005550199" className="glass-card p-10 rounded-2xl flex flex-col items-center justify-center text-center group h-full">
                <Phone className="w-10 h-10 text-brand-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p className="text-zinc-400 group-hover:text-white transition-colors">1 (800) 555-0199</p>
              </a>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="glass-card p-10 rounded-2xl flex flex-col items-center justify-center text-center h-full">
                <ExternalLink className="w-10 h-10 text-brand-primary mb-6" />
                <h3 className="text-xl font-bold mb-4">Socials</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors">Instagram</a>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors">LinkedIn</a>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors">Vimeo</a>
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
                  <button onClick={() => setIsSuccess(false)} className="mt-8 text-brand-primary hover:text-white text-sm font-semibold transition-colors">
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-zinc-400 mb-2">Name</label>
                      <input 
                        {...register("name")}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary/50 transition-colors"
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-2">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
                      <input 
                        {...register("email")}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary/50 transition-colors"
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email.message}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Subject</label>
                    <input 
                      {...register("subject")}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary/50 transition-colors"
                      placeholder="General Inquiry"
                    />
                    {errors.subject && <p className="text-red-500 text-xs mt-2">{errors.subject.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
                    <textarea 
                      {...register("message")}
                      rows={5}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary/50 transition-colors resize-none"
                      placeholder="How can we help?"
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-2">{errors.message.message}</p>}
                  </div>
                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-brand-primary hover:bg-brand-primary/80 text-white rounded-xl px-6 py-4 font-bold flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
              <h2 className="text-3xl font-bold mb-10 tracking-tighter">Visit the Studio</h2>
              
              <div className="space-y-8">
                <div>
                  <div className="flex items-start text-zinc-400">
                    <MapPin className="w-5 h-5 text-brand-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold mb-1">Physical Address</p>
                      <p>123 Innovation Drive<br />Vancouver, BC V6B 1A1</p>
                    </div>
                  </div>
                </div>
                
                <div className="pl-8 border-l border-zinc-800">
                  <p className="text-white font-semibold mb-1">Office Hours</p>
                  <p className="text-zinc-500 text-sm">Mon–Fri, 9:00 AM – 6:00 PM</p>
                </div>
                
                <div className="pl-8 border-l border-zinc-800">
                  <p className="text-white font-semibold mb-1">Parking</p>
                  <p className="text-zinc-500 text-sm">Designated visitor parking is accessible behind the building via the alleyway. Proceed to level P1.</p>
                </div>
              </div>
            </FadeIn>
          </div>
          
          {/* Map (Placeholder) */}
          <div className="w-full lg:w-2/3 h-[400px] lg:h-full relative overflow-hidden group cursor-crosshair">
            <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none"></div>
            <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Vancouver,BC&zoom=13&size=1000x800&maptype=roadmap&style=feature:all|element:labels.text.fill|color:0x9ca3af&style=feature:all|element:labels.text.stroke|color:0x000000&style=feature:landscape|element:geometry|color:0x000000&style=feature:poi|element:geometry|color:0x282828&style=feature:road.highway|element:geometry.fill|color:0x000000&style=feature:road.highway|element:geometry.stroke|color:0x1f2937&style=feature:road.arterial|element:geometry|color:0x000000&style=feature:road.local|element:geometry|color:0x000000&style=feature:transit|element:geometry|color:0x282828&style=feature:water|element:geometry|color:0x111111')] bg-cover bg-center transition-transform duration-[20s] ease-linear group-hover:scale-105"></div>
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
