import CaseStudyLayout from "@/components/CaseStudyLayout";

export default function EmbersGrilleHouse() {
  return (
    <CaseStudyLayout
      title="Embers Grille House"
      tagline="Cinematic food and ambiance photography that elevated a local restaurant's brand perception to a premium dining experience."
      tag="Photography"
      year="2025"
      services={["Commercial Photography", "Food Styling Direction", "Ambiance & Interior Shots", "Digital Asset Library", "Social Media Content Package"]}
      challenge="Embers Grille House was a quality restaurant being undersold by amateur photography that failed to communicate the quality of their food and the warmth of their atmosphere. Their social media and website visuals were actively deterring the premium clientele they were targeting."
      solution="We executed a comprehensive studio-day shoot using our Sony Cinema Line camera system with dedicated food and lifestyle lighting rigs. We delivered a full digital asset library covering hero dish photography, chef-action content, interior ambiance, and social media optimized cuts in both 4:5 and 16:9 formats."
      result="The new photography was deployed across the website and social channels, and the client reported being told by new guests that they were drawn in specifically by the visuals online. Average table spend increased by 15% in the three months following the brand elevation, attributed to an overall shift in the restaurant's perceived value tier."
      metrics={[
        { label: "Increase in Avg. Table Spend", value: "+15%" },
        { label: "Assets Delivered", value: "180+" },
        { label: "Instagram Engagement Increase", value: "220%" },
      ]}
      prevProject={{ slug: "dragonsinn", title: "Dragons Inn" }}
      nextProject={{ slug: "montax", title: "Montax" }}
    />
  );
}
