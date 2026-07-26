import CaseStudyLayout from "@/components/CaseStudyLayout";

export default function AnotherWorldVRWork() {
  return (
    <CaseStudyLayout
      title="Another World VR"
      tagline="Commercial film production capturing immersive virtual reality experiences, arcade excitement, and futuristic gameplay visuals."
      tag="Commercial Shoot & Video"
      year="2025"
      services={[
        "Commercial Short Film Direction",
        "Multi-Camera On-Set Production",
        "Action Lighting & Color Grading",
        "Promotional Video Edits",
        "Social Media Campaign Cuts"
      ]}
      challenge="Another World VR needed to communicate the thrilling, physical immersion of their virtual reality arcade to first-time customers who couldn't visualize the experience from text descriptions alone."
      solution="We directed a full-day commercial video shoot incorporating high-frame-rate tracking shots, synchronized gaming screen overlays, and reaction captures of players immersed in VR worlds."
      result="Produced high-energy video teasers and commercial shorts that drove a 48% surge in weekend arcade bookings and generated over 150,000 video views across social platforms."
      metrics={[
        { label: "Increase in Weekend Bookings", value: "+48%" },
        { label: "Social Video Views", value: "150K+" },
        { label: "Customer Engagement", value: "4.9★" }
      ]}
      prevProject={{ slug: "purelixr", title: "Purelixr" }}
      nextProject={{ slug: "maternitystories", title: "Maternity & Family Celebrations" }}
    />
  );
}
