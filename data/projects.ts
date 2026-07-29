export type Project = {
  slug: string;
  title: string;
  status?: string;
  summary: string;
  overview: string[];
  areas: string[];
  values: string[];
  technologies: string[];
  performanceData?: {
    parameter: string;
    result: string;
  }[];
  projectTags?: string[];
};

export const projects: Project[] = [
  {
    slug: "cecm-small-scale-wastewater-treatment-system",
    title: "Ministry of Environment Verified Pilot — CECM Small-Scale Wastewater Treatment System",
    status: "Pilot Verified",
    summary:
      "Government-certified field demonstration (2012–2015) funded by Korea's Ministry of Environment. The CECM system treating 100 m3/day was officially validated at a rural municipal site including winter operation.",
    overview: [
      "AWT's core ECM (Electrocoagulation + Ceramic Membrane) integrated water treatment system received official government validation through Korea's Ministry of Environment Future Promising Green Technology Commercialization Program.",
      "A 100 m3/day field test-bed was installed at Ssangyong Wastewater Treatment Plant, Yeongwol, Gangwon Province. Long-term field operation — including winter months — demonstrated stable compliance with all effluent quality standards despite severe influent load fluctuations."
    ],
    areas: [
      "Small-scale rural municipal wastewater treatment",
      "Decentralized public wastewater infrastructure",
      "Sites requiring stable winter operation",
      "Facilities facing influent load fluctuation"
    ],
    values: [
      "Status: Pilot Verified",
      "Ministry of Environment verified pilot",
      "Average COD effluent 7.4 mg/L",
      "Average TN effluent 5.1 mg/L",
      "Near 100% TP removal regardless of influent concentration",
      "100% SS removal achieved via ceramic membrane"
    ],
    technologies: [
      "CECM",
      "Electrocoagulation",
      "Ceramic membrane filtration",
      "Continuous small-scale wastewater treatment",
      "100 m3/day demonstration capacity"
    ],
    performanceData: [
      { parameter: "COD", result: "Average effluent 7.4 mg/L — discharge standard met" },
      { parameter: "TN", result: "Average effluent 5.1 mg/L" },
      { parameter: "TP", result: "Near 100% removal regardless of influent concentration" },
      { parameter: "SS", result: "100% removal achieved via ceramic membrane" }
    ],
    projectTags: [
      "Ministry of Environment Certified",
      "Total R&D Budget: KRW 2.1B",
      "10+ Patents Filed/Registered",
      "9 SCI Publications",
      "3-Year Field Demonstration"
    ]
  },
  {
    slug: "ai-decentralized-sewage",
    title: "AI-Based Decentralized Small-Scale Sewage Autonomous Operation System",
    summary: "AI-based autonomous operation system for decentralized small-scale sewage treatment facilities.",
    overview: [
      "This project applies AWT's ECM technology and AI-based operation concept to small-scale sewage treatment facilities. The system is designed for decentralized sites where stable operation, compact facility size, remote monitoring, and reduced maintenance burden are essential.",
      "AWT's approach combines sewage treatment, electro-coagulation, ceramic membrane filtration, and autonomous operation logic to improve treatment reliability and operational efficiency."
    ],
    areas: ["Small-scale sewage treatment plants", "Rural and remote communities", "Decentralized public facilities", "Islands, resorts, and isolated sites", "Facilities requiring remote monitoring and autonomous operation"],
    values: ["Compact treatment system design", "Reduced operational burden", "Stable response to inflow load variation", "Improved removal of organic matter, phosphorus, suspended solids, and pathogens", "AI-based monitoring and autonomous control potential"],
    technologies: ["ECM process", "Electro-coagulation", "Ceramic membrane filtration", "AI-based autonomous operation", "Remote monitoring and control"]
  },
  {
    slug: "wastewater-reuse",
    title: "Wastewater Treatment & Water Reuse System",
    summary: "Integrated wastewater treatment and water reuse system for industrial and municipal applications.",
    overview: [
      "AWT's wastewater treatment and water reuse system is designed to treat industrial and municipal wastewater and convert treated water into reusable water. The system can combine oxidation, electro-coagulation, ceramic membrane filtration, reverse osmosis, activated carbon, and sludge dehydration depending on water quality and reuse requirements.",
      "The goal is to reduce chemical dependency, improve membrane operation, reduce brine generation, and maximize water reuse efficiency."
    ],
    areas: ["Industrial wastewater treatment", "Factory effluent reuse", "Municipal wastewater reuse", "Water reuse for industrial-grade water", "Sites requiring reduced discharge volume"],
    values: ["Chemical-reducing treatment process", "Improved RO feedwater quality", "Reduced fouling load", "Higher water reuse efficiency", "Reduced sludge and secondary pollution burden"],
    technologies: ["Electro-coagulation", "Ceramic membrane", "Reverse osmosis pretreatment", "Activated carbon filtration", "Sludge dehydration"]
  },
  {
    slug: "ospw-petroleum-wastewater",
    title: "OSPW & Petroleum Wastewater Treatment & Reuse System",
    summary: "Treatment and reuse system for oil sands produced water and petroleum wastewater.",
    overview: [
      "This project applies AWT's integrated water treatment technology to petroleum-related wastewater streams, including OSPW and petroleum wastewater. These water sources typically contain complex organic matter, suspended solids, oil-related contaminants, and high treatment difficulty.",
      "AWT's process can be structured with oxidation, electro-coagulation, ceramic membrane filtration, activated carbon, and reuse-oriented post-treatment depending on the target water quality."
    ],
    areas: ["Oil sands produced water treatment", "Petroleum wastewater treatment", "Refinery wastewater", "Energy industry wastewater reuse", "Industrial sites requiring high-difficulty wastewater treatment"],
    values: ["Removal of suspended solids and colloidal contaminants", "Reduction of organic pollutants", "Improved water reuse potential", "Reduced wastewater discharge burden", "Modular process configuration according to wastewater characteristics"],
    technologies: ["Advanced oxidation", "Electro-coagulation", "Ceramic membrane filtration", "Activated carbon", "Water reuse process design"]
  },
  {
    slug: "desalination-brionex-garabogazkol",
    title: "Desalination & Brionex Garabogazköl Aylagy",
    summary: "Desalination and brine-related project for high-salinity water environments.",
    overview: [
      "This project is related to desalination and brine treatment applications in high-salinity regions. AWT's ECM-based pretreatment and ceramic membrane technology can support desalination processes by improving feedwater quality before reverse osmosis and reducing the operational burden caused by suspended solids, colloids, and fouling materials.",
      "The project direction is suitable for regions facing water scarcity, salinity challenges, and brine management issues."
    ],
    areas: ["High-salinity water treatment", "Desalination pretreatment", "Brine reduction process", "Coastal and inland saline water regions", "Water-scarce industrial regions"],
    values: ["Improved RO pretreatment", "Reduced fouling burden", "Better desalination process stability", "Potential reduction of brine-related inefficiency", "Scalable process design for harsh water conditions"],
    technologies: ["ECM pretreatment", "Ceramic membrane filtration", "RO feedwater optimization", "Brine treatment process", "Desalination support system"]
  },
  {
    slug: "caspian-desalination",
    title: "Caspian Desalination",
    summary: "Desalination project concept for Caspian region water supply and industrial water applications.",
    overview: [
      "The Caspian Desalination project is positioned as a large-scale desalination application using AWT's water treatment and pretreatment technologies. The system can support water supply in regions where seawater or saline water treatment is required for potable, industrial, or reuse purposes.",
      "AWT's ceramic membrane and electro-coagulation process can improve pretreatment performance and contribute to more stable desalination operation."
    ],
    areas: ["Regional desalination projects", "Industrial water supply", "Potable water production", "Coastal and inland saline water treatment", "Water infrastructure projects in arid regions"],
    values: ["Enhanced pretreatment efficiency", "Reduced operational load on RO", "Improved system reliability", "Modular expansion potential", "Application to large-scale water supply projects"],
    technologies: ["Electro-coagulation", "Ceramic membrane", "Reverse osmosis pretreatment", "Desalination process design", "Water reuse and brine management"]
  },
  {
    slug: "livestock-wastewater-biogas",
    title: "Livestock Wastewater Treatment & Biogas",
    summary: "Livestock wastewater treatment system integrated with biogas recovery.",
    overview: [
      "This project applies AWT's water treatment technology to livestock wastewater, which typically contains high organic load, suspended solids, nutrients, odor-causing substances, and sludge. The system direction can be connected with biogas production, nutrient management, and water reuse.",
      "AWT's treatment approach can support solid-liquid separation, phosphorus removal, organic reduction, and post-treatment for reuse or discharge compliance."
    ],
    areas: ["Livestock farms", "Manure wastewater treatment", "Agricultural wastewater management", "Biogas-linked treatment facilities", "Rural environmental infrastructure"],
    values: ["Reduction of organic pollutants", "Nutrient and phosphorus control", "Sludge volume reduction", "Potential linkage with biogas recovery", "Improved environmental management for livestock facilities"],
    technologies: ["Electro-coagulation", "Ceramic membrane filtration", "Sludge treatment", "Nutrient removal", "Water reuse process"]
  },
  {
    slug: "plasma-zero-discharge",
    title: "Plasma-Enhanced Waste Incineration & Zero Discharge System",
    summary: "Plasma-enhanced waste treatment and zero-discharge system concept.",
    overview: [
      "This project connects waste treatment, plasma-enhanced incineration, and zero-discharge water management. It is positioned as an advanced environmental infrastructure concept that aims to reduce secondary pollution while managing wastewater and residual streams generated from waste treatment processes.",
      "AWT's water treatment technologies can be applied to wastewater, condensate, leachate, and process water generated from waste treatment facilities."
    ],
    areas: ["Waste treatment facilities", "Incineration plants", "Zero-liquid-discharge systems", "Leachate and process water treatment", "Environmental infrastructure projects"],
    values: ["Reduction of secondary wastewater discharge", "Process water treatment and reuse", "Integration with zero-discharge strategy", "Improved environmental compliance", "Advanced waste and water treatment linkage"],
    technologies: ["ECM process", "Ceramic membrane filtration", "Advanced oxidation", "Water reuse", "Zero-discharge process design"]
  }
];
