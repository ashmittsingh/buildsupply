export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  coverageRate: number; // kg/sqm or liters/sqm
  unit: "kg" | "bags" | "liters";
  bagsPerUnit?: number; // for bag count
  price?: number;
  image?: string;
}

export const products: Product[] = [
  // Waterproofing Solutions
  {
    id: "waterproof-001",
    name: "Liquid Waterproof Membrane",
    category: "Waterproofing Solutions",
    description: "Professional-grade liquid waterproofing membrane for basements and wet areas",
    coverageRate: 1.5,
    unit: "liters",
    price: 2500,
  },
  {
    id: "waterproof-002",
    name: "Bituminous Waterproofing Sheet",
    category: "Waterproofing Solutions",
    description: "Self-adhesive bituminous sheet for concrete protection",
    coverageRate: 0.8,
    unit: "kg",
    price: 1800,
  },

  // Tile & Stone Adhesive and Grout
  {
    id: "adhesive-001",
    name: "Premium Tile Adhesive",
    category: "Tile & Stone Adhesive and Grout",
    description: "High-strength adhesive for ceramic and stone tiles",
    coverageRate: 2.5,
    unit: "kg",
    bagsPerUnit: 20,
    price: 450,
  },
  {
    id: "adhesive-002",
    name: "Epoxy Grout",
    category: "Tile & Stone Adhesive and Grout",
    description: "Water-resistant epoxy-based grout for tile joints",
    coverageRate: 1.8,
    unit: "kg",
    bagsPerUnit: 5,
    price: 1200,
  },
  {
    id: "adhesive-003",
    name: "Cement Grout",
    category: "Tile & Stone Adhesive and Grout",
    description: "Standard cement grout for interior tiling",
    coverageRate: 2.0,
    unit: "kg",
    bagsPerUnit: 25,
    price: 350,
  },

  // Concrete Repair Solutions
  {
    id: "repair-001",
    name: "Concrete Repair Mortar",
    category: "Concrete Repair Solutions",
    description: "Self-leveling repair mortar for concrete cracks and spalls",
    coverageRate: 2.8,
    unit: "kg",
    bagsPerUnit: 20,
    price: 600,
  },
  {
    id: "repair-002",
    name: "Epoxy Concrete Filler",
    category: "Concrete Repair Solutions",
    description: "High-strength epoxy for concrete structural repairs",
    coverageRate: 3.2,
    unit: "kg",
    bagsPerUnit: 10,
    price: 2000,
  },

  // Flooring Solutions
  {
    id: "flooring-001",
    name: "Self-Leveling Floor Screed",
    category: "Flooring Solutions",
    description: "Rapid-setting self-leveling screed for floor preparation",
    coverageRate: 1.8,
    unit: "kg",
    bagsPerUnit: 25,
    price: 800,
  },
  {
    id: "flooring-002",
    name: "Vinyl Flooring Adhesive",
    category: "Flooring Solutions",
    description: "Moisture-resistant adhesive for vinyl flooring installation",
    coverageRate: 1.2,
    unit: "liters",
    price: 950,
  },

  // Stamping Solutions
  {
    id: "stamping-001",
    name: "Concrete Stamping Release Agent",
    category: "Stamping Solutions",
    description: "Non-toxic release agent for decorative concrete stamping",
    coverageRate: 0.5,
    unit: "liters",
    price: 1100,
  },
  {
    id: "stamping-002",
    name: "Concrete Hardener",
    category: "Stamping Solutions",
    description: "Surface hardener to improve stamped concrete durability",
    coverageRate: 1.5,
    unit: "liters",
    price: 1400,
  },

  // Decorative Surface Finish
  {
    id: "decorative-001",
    name: "Textured Surface Coating",
    category: "Decorative Surface Finish",
    description: "Textured coating for decorative wall finishes",
    coverageRate: 2.0,
    unit: "liters",
    price: 1600,
  },

  // Texture Paint Coatings
  {
    id: "paint-001",
    name: "Premium Texture Paint",
    category: "Texture Paint Coatings",
    description: "Acrylic-based texture paint with superior coverage",
    coverageRate: 3.5,
    unit: "liters",
    price: 2200,
  },

  // Admixtures
  {
    id: "admix-001",
    name: "Waterproofing Admixture",
    category: "Admixtures",
    description: "Integral waterproofing admixture for concrete mixes",
    coverageRate: 2.0,
    unit: "liters",
    price: 1500,
  },
  {
    id: "admix-002",
    name: "Air Entrainment Agent",
    category: "Admixtures",
    description: "Creates air voids in concrete for freeze-thaw resistance",
    coverageRate: 0.3,
    unit: "liters",
    price: 800,
  },

  // Mortar
  {
    id: "mortar-001",
    name: "Masonry Mortar Mix",
    category: "Mortar",
    description: "Pre-mixed mortar for brickwork and masonry",
    coverageRate: 2.5,
    unit: "kg",
    bagsPerUnit: 25,
    price: 400,
  },
  {
    id: "mortar-002",
    name: "Specialized Refractory Mortar",
    category: "Mortar",
    description: "High-temperature mortar for furnace and fireplace work",
    coverageRate: 2.2,
    unit: "kg",
    bagsPerUnit: 20,
    price: 1800,
  },
];

export const categories = [
  "Waterproofing Solutions",
  "Tile & Stone Adhesive and Grout",
  "Concrete Repair Solutions",
  "Flooring Solutions",
  "Stamping Solutions",
  "Decorative Surface Finish",
  "Texture Paint Coatings",
  "Admixtures",
  "Mortar",
];
