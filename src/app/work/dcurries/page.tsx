import CaseStudyLayout from "@/components/CaseStudyLayout";

export default function DCurriesWork() {
  return (
    <CaseStudyLayout
      title="D'Curries"
      tagline="Social media post graphics, promotional campaign design, and visual media branding for an authentic restaurant launch."
      tag="Graphic Design & Socials"
      year="2025"
      services={[
        "Social Media Post Graphic Design",
        "Promotional Event Banners",
        "Menu Design & Print Layouts",
        "Digital Content Strategy",
        "Brand Identity Assets"
      ]}
      challenge="D'Curries needed high-impact visual graphic designs for social media and local marketing channels to launch their new authentic cuisine menu and attract food enthusiasts."
      solution="We crafted custom graphic design templates, vibrant social media promo graphics, print banners, and digital menus that communicated culinary authenticity with modern aesthetic flair."
      result="The launch campaign reached over 80,000 local food lovers, driving packed opening week dining crowds and establishing D'Curries as a top regional dining destination."
      metrics={[
        { label: "Opening Campaign Reach", value: "80K+" },
        { label: "Custom Graphic Assets", value: "65+" },
        { label: "Social Media Growth", value: "+280%" }
      ]}
      prevProject={{ slug: "maternitystories", title: "Maternity & Family Celebrations" }}
      nextProject={{ slug: "embersgrillehouse", title: "Embers Grille House" }}
    />
  );
}
