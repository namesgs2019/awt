export type SolutionSlug =
  | "tap-water"
  | "sewage-treatment"
  | "industrial-wastewater"
  | "water-reuse"
  | "desalination"
  | "pool-spa";

export type SolutionPageData = {
  slug: SolutionSlug;
  title: string;
  summary: string;
  points: string[];
  intro: string;
  image?: {
    src: string;
    alt: string;
  };
  related?: {
    title: string;
    body: string;
  };
};

export const solutionPages: SolutionPageData[] = [
  {
    slug: "tap-water",
    title: "Tap Water",
    summary: "Tap water purification, surface water treatment, portable facilities, and HYDRO REPUBLIC applications.",
    points: ["Tap Water Purification", "Surface Water", "Portable Facility", "HYDRO REPUBLIC"],
    intro:
      "Tap Water covers municipal tap-water purification, surface water treatment, water purification plants, groundwater treatment for arsenic conditions, and portable water treatment facilities.",
    image: {
      src: "/images/solutions/tap-water-process.png",
      alt: "Tap Water treatment process flow diagram"
    }
  },
  {
    slug: "sewage-treatment",
    title: "Sewage Treatment",
    summary: "Municipal sewage, AI decentralized systems, hospital wastewater, MoE pilot records, and HYDRO REPUBLIC applications.",
    points: ["Municipal Sewage", "AI Decentralized", "Hospital Wastewater", "MoE Pilot", "HYDRO REPUBLIC"],
    intro:
      "Sewage Treatment applies ECM-based treatment to municipal sewage, decentralized AI systems, hospital wastewater, pilot records, and HYDRO REPUBLIC applications.",
    image: {
      src: "/images/solutions/Sewage-Treatment.png",
      alt: "Sewage treatment process flow diagram"
    }
  },
  {
    slug: "industrial-wastewater",
    title: "Industrial Wastewater",
    summary: "Industrial WTS, oil sands produced water, livestock wastewater, plasma zero discharge, and pilot applications.",
    points: ["Industrial WTS", "OSPW", "Livestock", "Plasma Zero Discharge", "Pilot"],
    intro:
      "Industrial Wastewater organizes industrial WTS, OSPW, livestock wastewater, plasma zero discharge, and pilot applications around ECM pretreatment and reuse.",
    image: {
      src: "/images/solutions/Wastewater-Treatment.png",
      alt: "Wastewater treatment and water reuse process flow diagram"
    }
  },
  {
    slug: "water-reuse",
    title: "Water Reuse",
    summary: "Phosphorus removal, WRS, and reuse pilot applications for RO-optimized reuse systems.",
    points: ["Phosphorus Removal", "WRS", "Reuse Pilot"],
    intro:
      "Water Reuse focuses on phosphorus removal, WRS, and reuse pilots that improve RO feedwater conditions while reducing chemical dependency and brine generation."
  },
  {
    slug: "desalination",
    title: "Desalination",
    summary: "Desalination and brine-oriented applications for Garabogazkol, Caspian, and high-salinity regions.",
    points: ["Desalination", "Garabogazkol", "Caspian"],
    intro:
      "Desalination covers high-salinity applications including Garabogazkol, Caspian, and brine-oriented pretreatment strategies.",
    related: {
      title: "Related Process Direction",
      body:
        "AWT applies ECM pretreatment and ceramic membrane filtration concepts to improve feedwater quality for high-salinity desalination and brine-oriented treatment applications."
    }
  },
  {
    slug: "pool-spa",
    title: "Pool & Spa",
    summary: "Chemical-free pool and spa water purification powered by compact ECM Mini systems.",
    points: ["Private Pool", "Lap & Fitness Pool", "Resort & Spa", "ECM Mini"],
    intro:
      "Chemical-free pool and spa water purification for private residences, indoor facilities, and resort-scale applications — powered by ECM Mini. No chlorine, no plastics, and zero water discharged through continuous closed-loop recirculation."
  }
];

export function getSolutionPage(slug: string) {
  return solutionPages.find((solution) => solution.slug === slug);
}
