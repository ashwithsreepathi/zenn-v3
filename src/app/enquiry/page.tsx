"use client";

import FadeIn from "@/components/FadeIn";
import { zodResolver } from "@hookform/resolvers/zod";
import { Camera, CheckCircle, Code2, PenTool, Share2, ShieldCheck, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";

const plannerSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  companyName: z.string().min(2, "Company name is required"),
  email: z.string().email("Please enter a valid email address"),
  capability: z.enum(["software", "branding", "media", "social"], {
    required_error: "Please select a core capability.",
  }),
  budget: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Please select a timeline"),
  vision: z.string().min(20, "Please provide a bit more detail (at least 20 characters)"),
  reference: z.string().optional()
});

type PlannerValues = z.infer<typeof plannerSchema>;

export default function Enquiry() {
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { register, handleSubmit, watch, setValue, formState: { errors, isSubmitting } } = useForm<PlannerValues>({
    resolver: zodResolver(plannerSchema),
    defaultValues: {
      budget: "",
      timeline: "",
    }
  });

  const selectedCapability = watch("capability");

  const onSubmit = async (data: PlannerValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Planner Data:", data);
    setIsSuccess(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const capabilities = [
    { id: "software", label: "Website & Software", icon: Code2 },
    { id: "branding", label: "Branding & Media", icon: PenTool },
    { id: "media", label: "Photography & Video", icon: Camera },
    { id: "social", label: "Social Management", icon: Share2 },
  ] as const;

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center py-32 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-12 md:p-20 rounded-3xl max-w-3xl w-full"
        >
          <CheckCircle className="w-20 h-20 text-brand-primary mx-auto mb-8" />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Vision Received.</h1>
          <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
            Thank you for trusting Zenn Studios. Our architects will review your details and an executive will be in touch within 24–48 hours to schedule your Discovery Call.
          </p>
          <button 
            onClick={() => setIsSuccess(false)}
             className="text-brand-primary hover:text-white font-semibold transition-colors border-b border-brand-primary/30 hover:border-white pb-1"
          >
            Submit another project
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Section 1: Hero (The Invitation) */}
      <section className="pt-40 pb-20 relative overflow-hidden text-center border-b border-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(182,51,46,0.1),_transparent_50%)]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <FadeIn direction="up">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Let’s Build the Unforgettable.</h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
              Provide us with the details of your vision, and our team will architect a tailored solution for your business.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Form Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* The Multi-Step Enquiry Form (Smooth Scroll Logic) */}
            <div className="w-full lg:w-2/3">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-16">
                
                {/* Step 1: The Basics */}
                <FadeIn>
                  <div className="glass-card p-8 md:p-12 rounded-3xl">
                    <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-zinc-800 flex items-center">
                      <span className="w-8 h-8 rounded-full bg-zinc-800 text-sm flex items-center justify-center mr-4 text-brand-primary font-mono">01</span>
                      The Basics
                    </h2>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-zinc-400 mb-2">Full Name</label>
                          <input {...register("fullName")} className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary/50 transition-colors" placeholder="Jane Doe" />
                          {errors.fullName && <p className="text-red-500 text-xs mt-2">{errors.fullName.message}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-zinc-400 mb-2">Company Name</label>
                          <input {...register("companyName")} className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary/50 transition-colors" placeholder="Acme Corp" />
                          {errors.companyName && <p className="text-red-500 text-xs mt-2">{errors.companyName.message}</p>}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-2">Email Address</label>
                        <input {...register("email")} type="email" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary/50 transition-colors" placeholder="jane@acmecorp.com" />
                        {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email.message}</p>}
                      </div>
                    </div>
                  </div>
                </FadeIn>

                {/* Step 2: Capability Selection */}
                <FadeIn>
                  <div className="glass-card p-8 md:p-12 rounded-3xl">
                    <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-zinc-800 flex items-center">
                      <span className="w-8 h-8 rounded-full bg-zinc-800 text-sm flex items-center justify-center mr-4 text-brand-primary font-mono">02</span>
                      Core Focus
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {capabilities.map((cap) => (
                        <div 
                          key={cap.id}
                          onClick={() => setValue("capability", cap.id, { shouldValidate: true })}
                          className={`p-6 rounded-2xl border cursor-pointer transition-all flex flex-col items-center text-center ${selectedCapability === cap.id ? 'bg-brand-primary/10 border-brand-primary' : 'bg-zinc-900 border-zinc-800 hover:border-zinc-600'}`}
                        >
                          <cap.icon className={`w-8 h-8 mb-4 ${selectedCapability === cap.id ? 'text-brand-primary' : 'text-zinc-500'}`} />
                          <span className={`font-semibold ${selectedCapability === cap.id ? 'text-white' : 'text-zinc-400'}`}>{cap.label}</span>
                        </div>
                      ))}
                    </div>
                    {errors.capability && <p className="text-red-500 text-xs mt-4 text-center">{errors.capability.message}</p>}
                  </div>
                </FadeIn>

                {/* Step 3: Project Scope */}
                <FadeIn>
                  <div className="glass-card p-8 md:p-12 rounded-3xl">
                    <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-zinc-800 flex items-center">
                      <span className="w-8 h-8 rounded-full bg-zinc-800 text-sm flex items-center justify-center mr-4 text-brand-primary font-mono">03</span>
                      Project Scope
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-2">Estimated Budget</label>
                        <select {...register("budget")} className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary/50 transition-colors appearance-none">
                          <option value="" disabled>Select a range...</option>
                          <option value="5k-10k">$5k - $10k</option>
                          <option value="10k-25k">$10k - $25k</option>
                          <option value="25k-50k">$25k - $50k</option>
                          <option value="50k+">$50k+</option>
                        </select>
                        {errors.budget && <p className="text-red-500 text-xs mt-2">{errors.budget.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-2">Desired Timeline</label>
                        <select {...register("timeline")} className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary/50 transition-colors appearance-none">
                          <option value="" disabled>Select timeline...</option>
                          <option value="urgent">Urgent (ASAP)</option>
                          <option value="1-3">1 - 3 Months</option>
                          <option value="3-6">3 - 6 Months</option>
                          <option value="flexible">Flexible / Planning Phase</option>
                        </select>
                        {errors.timeline && <p className="text-red-500 text-xs mt-2">{errors.timeline.message}</p>}
                      </div>
                    </div>
                  </div>
                </FadeIn>

                {/* Step 4 & 5: The Vision & Reference */}
                <FadeIn>
                  <div className="glass-card p-8 md:p-12 rounded-3xl">
                    <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-zinc-800 flex items-center">
                      <span className="w-8 h-8 rounded-full bg-zinc-800 text-sm flex items-center justify-center mr-4 text-brand-primary font-mono">04</span>
                      The Vision
                    </h2>
                    <div className="space-y-8">
                      <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-2">Tell us about your goals and specific challenges.</label>
                        <textarea {...register("vision")} rows={6} className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary/50 transition-colors resize-none" placeholder="We are looking to..." />
                        {errors.vision && <p className="text-red-500 text-xs mt-2">{errors.vision.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-2">How did you hear about Zenn Studios? (Optional)</label>
                        <input {...register("reference")} className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary/50 transition-colors" placeholder="Google, Referral, Social Media..." />
                      </div>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn>
                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-brand-primary hover:bg-brand-primary/80 text-white text-xl font-bold py-6 rounded-2xl transition-all shadow-[0_0_30px_rgba(182,51,46,0.2)] hover:shadow-[0_0_50px_rgba(182,51,46,0.4)] disabled:opacity-50"
                  >
                    {isSubmitting ? "Architecting Submission..." : "Submit Project Blueprint"}
                  </button>
                </FadeIn>
                
              </form>
            </div>

            {/* Section 3: The Reassurance (Trust Sidebar) */}
            <div className="w-full lg:w-1/3">
              <FadeIn delay={0.2} className="sticky top-28 space-y-8">
                <div className="glass-card p-8 rounded-3xl">
                  <h3 className="text-xl font-bold mb-6">What Happens Next?</h3>
                  <ul className="space-y-6 text-zinc-400 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span>Our team will review your core requirements and vision.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span>We schedule an initial 30-minute Discovery Call to dive deep into the architecture.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span>You receive a formal Scope of Work and an architectural timeline.</span>
                    </li>
                  </ul>
                </div>

                <div className="glass-card p-8 rounded-3xl bg-zinc-900/30">
                  <div className="flex items-center mb-4">
                    <ShieldCheck className="w-6 h-6 text-zinc-500 mr-3" />
                    <h3 className="font-bold">Privacy Secured</h3>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Your data is secure and protected under our strict confidentiality protocols. It will only be used to discuss and quote your specific project.
                  </p>
                </div>

                {/* Section 4: Alternative Contact */}
                <div className="p-6 border border-zinc-900 rounded-3xl text-center">
                  <p className="text-zinc-400 text-sm mb-3">Not ready for a full planner?</p>
                  <Link href="/contact" className="inline-flex items-center text-sm font-semibold text-brand-primary hover:text-white transition-colors">
                    <Mail className="w-4 h-4 mr-2" /> Send a quick email instead
                  </Link>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
