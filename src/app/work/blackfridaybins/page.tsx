import CaseStudyLayout from "@/components/CaseStudyLayout";

export default function BlackFridayBins() {
  return (
    <CaseStudyLayout
      title="Black Friday Bins"
      tagline="High-velocity weekly video campaigns that translate social media momentum into measurable retail foot traffic."
      tag="Media & Social"
      year="2025"
      services={["Commercial Videography", "Social Media Management", "Weekly Content Production", "Paid Media Strategy", "Community Growth"]}
      challenge="Black Friday Bins, a retail model dependent on physically driving customers into a store for liquidation events, needed a consistent digital engine to fuel weekly attendance. The challenge was creating high-quality, high-frequency video content that built genuine anticipation and translated into real-world foot traffic—not just vanity metrics."
      solution="We established a weekly content production loop: cinematic trailers for each upcoming bin event, behind-the-scenes community content, and strategic reels designed to go viral within the local market. This was paired with targeted paid media to amplify organic reach and a consistent posting cadence across Instagram, TikTok, and Facebook."
      result="The weekly view counts on promotional trailers grew 300% within four months. Most critically, the client reported a direct, measurable correlation between trailer release days and in-store foot traffic spikes, with sellout events becoming the norm rather than an exception."
      metrics={[
        { label: "Growth in Video Views (4 months)", value: "300%" },
        { label: "Weekly Videos Produced", value: "3–5" },
        { label: "Social Followers Gained", value: "4,200+" },
      ]}
      prevProject={{ slug: "mkfoodco", title: "MK Food Company" }}
      nextProject={{ slug: "dragonsinn", title: "Dragons Inn" }}
    />
  );
}
