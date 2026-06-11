export const dropdownItems = {
  solutions: [
    { label: "Tap Water", href: "/solutions/tap-water", status: "available" },
    { label: "Sewage Treatment", href: "/solutions/sewage-treatment", status: "available" },
    { label: "Industrial Wastewater", href: "/solutions/industrial-wastewater", status: "available" },
    { label: "Water Reuse", href: "/solutions/water-reuse", status: "available" },
    { label: "Desalination", href: "/solutions/desalination", status: "available" }
  ],
  projects: [
    { label: "Global", href: "/projects#global", status: "available" },
    { label: "Domestic", href: "/projects#domestic", status: "available" },
    {
      label: "CECM Small-Scale Wastewater Treatment System",
      href: "/projects/cecm-small-scale-wastewater-treatment-system",
      status: "available"
    }
  ],
  partnership: [
    { label: "Impact Investors", href: "/partnership#impact-investors", status: "available" },
    { label: "EPC & Engineering", href: "/partnership#epc-engineering", status: "available" },
    { label: "Municipal & Government", href: "/partnership#municipal-government", status: "available" },
    { label: "Licensing Partners", href: "/partnership#licensing-partners", status: "available" }
  ]
} as const;

export type DropdownKey = keyof typeof dropdownItems;

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
