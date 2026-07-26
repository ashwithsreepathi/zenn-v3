import CaseStudyLayout from "@/components/CaseStudyLayout";

export default function MaternityStoriesWork() {
  return (
    <CaseStudyLayout
      title="Maternity & Family Celebrations"
      tagline="Emotional documentary coverage and fine art portraiture of family milestones, maternity reveals, and gender celebration events."
      tag="Maternity Photography"
      year="2026"
      services={[
        "Maternity Portrait Sessions",
        "Gender Reveal Event Coverage",
        "Burst Confetti Action Captures",
        "Color-Graded High-Res Collection",
        "Custom Keepsake Digital Albums"
      ]}
      challenge="Families celebrating once-in-a-lifetime maternity milestones require unobtrusive, high-speed photography coverage that captures spontaneous expressions, family joy, and key reveal moments in natural light."
      solution="Zenn Studios captured comprehensive multi-generational stories for client gender reveals (including Annam & Manisha's family celebrations), combining burst-action confetti shots with intimate outdoor portraits."
      result="Delivered curated collections of over 300 color-graded high-resolution photos capturing natural emotion, resulting in glowing client testimonials and lifelong family keepsakes."
      metrics={[
        { label: "High-Res Photos Delivered", value: "300+" },
        { label: "Client Satisfaction", value: "100%" },
        { label: "Family Referrals Generated", value: "15+" }
      ]}
      prevProject={{ slug: "anotherworldvr", title: "Another World VR" }}
      nextProject={{ slug: "dcurries", title: "D'Curries" }}
    />
  );
}
