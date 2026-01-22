export interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  icon?: string;
  link?: string;
}

export const resources: Resource[] = [
  // Installation Guides
  {
    id: "res-001",
    title: "Complete Tile Installation Guide",
    description: "Step-by-step guide covering surface preparation, adhesive application, tiling techniques, and grouting for professional results.",
    category: "Installation Guides",
    icon: "📋",
  },
  {
    id: "res-002",
    title: "Waterproofing Installation Manual",
    description: "Comprehensive guide to waterproofing basement, bathrooms, and wet areas with our range of waterproofing products.",
    category: "Installation Guides",
    icon: "💧",
  },
  {
    id: "res-003",
    title: "Flooring Preparation Guide",
    description: "Learn proper floor surface preparation, leveling techniques, and best practices for long-lasting flooring installations.",
    category: "Installation Guides",
    icon: "🏗️",
  },

  // Technical Specifications
  {
    id: "res-004",
    title: "Product Datasheets",
    description: "Complete technical specifications for all products including coverage rates, coverage rates, application instructions, and safety information.",
    category: "Technical Specifications",
    icon: "📊",
  },
  {
    id: "res-005",
    title: "Chemical Composition Reference",
    description: "Detailed composition information for all products including binders, fillers, and additives used in our formulations.",
    category: "Technical Specifications",
    icon: "🧪",
  },
  {
    id: "res-006",
    title: "Curing Time Charts",
    description: "Temperature and humidity-dependent curing time references for all product categories at various environmental conditions.",
    category: "Technical Specifications",
    icon: "⏱️",
  },

  // Industry Standards
  {
    id: "res-007",
    title: "International Standards Compliance",
    description: "Information about ISO, ASTM, and EN standards that our products comply with, ensuring quality and reliability.",
    category: "Industry Standards",
    icon: "✓",
  },
  {
    id: "res-008",
    title: "Health & Safety Guidelines",
    description: "Safety data sheets (SDS), PPE requirements, and proper handling procedures for all products.",
    category: "Industry Standards",
    icon: "⚠️",
  },

  // Design Tools
  {
    id: "res-009",
    title: "Color & Finish Samples",
    description: "Virtual samples of available colors and finishes for decorative products. Order physical samples if needed.",
    category: "Design Tools",
    icon: "🎨",
  },
  {
    id: "res-010",
    title: "Project Planning Template",
    description: "Downloadable spreadsheet templates for planning material quantities, budgets, and timelines for your projects.",
    category: "Design Tools",
    icon: "📅",
  },

  // Training & Certification
  {
    id: "res-011",
    title: "Installer Certification Program",
    description: "Information about our professional installer certification program, training courses, and continuous education opportunities.",
    category: "Training & Certification",
    icon: "🎓",
  },
  {
    id: "res-012",
    title: "Video Tutorials",
    description: "Collection of video tutorials demonstrating proper installation techniques for various product categories.",
    category: "Training & Certification",
    icon: "▶️",
  },

  // Troubleshooting
  {
    id: "res-013",
    title: "Common Problems & Solutions",
    description: "Diagnostic guide for common issues encountered during installation and usage, with recommended solutions.",
    category: "Troubleshooting",
    icon: "🔧",
  },
  {
    id: "res-014",
    title: "Product Failure Analysis",
    description: "Technical guide to identifying causes of product failure and preventive measures for future projects.",
    category: "Troubleshooting",
    icon: "🔍",
  },

  // Environmental
  {
    id: "res-015",
    title: "Sustainability Report",
    description: "Our commitment to environmental responsibility, including eco-friendly products and sustainable manufacturing practices.",
    category: "Environmental",
    icon: "🌱",
  },
  {
    id: "res-016",
    title: "VOC & Emissions Information",
    description: "Detailed information about volatile organic compound (VOC) levels in our products and indoor air quality impact.",
    category: "Environmental",
    icon: "💨",
  },
];

export const resourceCategories = [
  "Installation Guides",
  "Technical Specifications",
  "Industry Standards",
  "Design Tools",
  "Training & Certification",
  "Troubleshooting",
  "Environmental",
];
