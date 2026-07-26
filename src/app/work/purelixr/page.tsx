import CaseStudyLayout from "@/components/CaseStudyLayout";

export default function PurelixrWork() {
  return (
    <CaseStudyLayout
      title="Purelixr"
      tagline="Cinematic product photography and visual storytelling for a luxury perfume brand — capturing liquid reflection and luxury packaging."
      tag="Product Photography"
      year="2025"
      services={[
        "Commercial Product Photography",
        "Macro Lens Liquid Styling",
        "Studio Lighting Rigging",
        "High-Resolution Retouching",
        "E-Commerce Visual Asset Suite"
      ]}
      challenge="Purelixr created a luxury fragrance line but struggled to convey the tactile weight, glass reflections, and premium bottle craftsmanship through standard product photos, limiting their luxury positioning online."
      solution="Zenn Studios designed a 3-day intensive studio photography production utilizing macro prime lenses, high-frequency studio strobes, and liquid splash styling to capture light refracting through every angle of the fragrance bottles."
      result="Delivered a 120-asset visual suite that elevated Purelixr into luxury retailer standards, resulting in a 340% increase in online conversion rate within 30 days of campaign launch."
      metrics={[
        { label: "Online Conversion Boost", value: "+340%" },
        { label: "Assets Delivered", value: "120+" },
        { label: "Retail Partner Inquiries", value: "3x" }
      ]}
      prevProject={{ slug: "embersgrillehouse", title: "Embers Grille House" }}
      nextProject={{ slug: "anotherworldvr", title: "Another World VR" }}
    />
  );
}
