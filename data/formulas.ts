export interface Formula {
  id: string;
  productId: string;
  productName: string;
  category: string;
  coverageRate: number; // per sqm
  unit: "kg" | "bags" | "liters";
  bagsPerUnit?: number;
  thickness?: number; // mm (if applicable)
  description: string;
}

export const calculatorFormulas: Formula[] = [
  // Waterproofing
  {
    id: "formula-water-001",
    productId: "waterproof-001",
    productName: "Liquid Waterproof Membrane",
    category: "Waterproofing Solutions",
    coverageRate: 1.5,
    unit: "liters",
    thickness: 2,
    description: "Liquid membrane application - 1.5 liters per sqm",
  },
  {
    id: "formula-water-002",
    productId: "waterproof-002",
    productName: "Bituminous Waterproofing Sheet",
    category: "Waterproofing Solutions",
    coverageRate: 0.8,
    unit: "kg",
    description: "Self-adhesive sheet - 0.8 kg per sqm",
  },

  // Tile & Adhesive
  {
    id: "formula-tile-001",
    productId: "adhesive-001",
    productName: "Premium Tile Adhesive",
    category: "Tile & Stone Adhesive and Grout",
    coverageRate: 2.5,
    unit: "kg",
    bagsPerUnit: 20,
    thickness: 4,
    description: "Ceramic tiles 300x300mm - 2.5 kg per sqm",
  },
  {
    id: "formula-tile-002",
    productId: "adhesive-002",
    productName: "Epoxy Grout",
    category: "Tile & Stone Adhesive and Grout",
    coverageRate: 1.8,
    unit: "kg",
    bagsPerUnit: 5,
    description: "Joint width 10mm - 1.8 kg per sqm",
  },
  {
    id: "formula-tile-003",
    productId: "adhesive-003",
    productName: "Cement Grout",
    category: "Tile & Stone Adhesive and Grout",
    coverageRate: 2.0,
    unit: "kg",
    bagsPerUnit: 25,
    description: "Standard joint width 5-8mm - 2.0 kg per sqm",
  },

  // Concrete Repair
  {
    id: "formula-repair-001",
    productId: "repair-001",
    productName: "Concrete Repair Mortar",
    category: "Concrete Repair Solutions",
    coverageRate: 2.8,
    unit: "kg",
    bagsPerUnit: 20,
    thickness: 5,
    description: "Self-leveling repair - 2.8 kg per sqm per 5mm thickness",
  },
  {
    id: "formula-repair-002",
    productId: "repair-002",
    productName: "Epoxy Concrete Filler",
    category: "Concrete Repair Solutions",
    coverageRate: 3.2,
    unit: "kg",
    bagsPerUnit: 10,
    description: "Structural repair - 3.2 kg per sqm",
  },

  // Flooring
  {
    id: "formula-floor-001",
    productId: "flooring-001",
    productName: "Self-Leveling Floor Screed",
    category: "Flooring Solutions",
    coverageRate: 1.8,
    unit: "kg",
    bagsPerUnit: 25,
    thickness: 5,
    description: "Floor leveling - 1.8 kg per sqm per 5mm thickness",
  },
  {
    id: "formula-floor-002",
    productId: "flooring-002",
    productName: "Vinyl Flooring Adhesive",
    category: "Flooring Solutions",
    coverageRate: 1.2,
    unit: "liters",
    description: "Vinyl sheet adhesive - 1.2 liters per sqm",
  },

  // Stamping
  {
    id: "formula-stamp-001",
    productId: "stamping-001",
    productName: "Concrete Stamping Release Agent",
    category: "Stamping Solutions",
    coverageRate: 0.5,
    unit: "liters",
    description: "Release agent - 0.5 liters per sqm",
  },
  {
    id: "formula-stamp-002",
    productId: "stamping-002",
    productName: "Concrete Hardener",
    category: "Stamping Solutions",
    coverageRate: 1.5,
    unit: "liters",
    description: "Surface hardener - 1.5 liters per sqm",
  },

  // Decorative
  {
    id: "formula-deco-001",
    productId: "decorative-001",
    productName: "Textured Surface Coating",
    category: "Decorative Surface Finish",
    coverageRate: 2.0,
    unit: "liters",
    description: "Textured coating - 2.0 liters per sqm",
  },

  // Paint
  {
    id: "formula-paint-001",
    productId: "paint-001",
    productName: "Premium Texture Paint",
    category: "Texture Paint Coatings",
    coverageRate: 3.5,
    unit: "liters",
    description: "Texture paint - 3.5 liters per sqm",
  },

  // Admixtures
  {
    id: "formula-admix-001",
    productId: "admix-001",
    productName: "Waterproofing Admixture",
    category: "Admixtures",
    coverageRate: 2.0,
    unit: "liters",
    description: "Per cubic meter of concrete",
  },

  // Mortar
  {
    id: "formula-mortar-001",
    productId: "mortar-001",
    productName: "Masonry Mortar Mix",
    category: "Mortar",
    coverageRate: 2.5,
    unit: "kg",
    bagsPerUnit: 25,
    description: "Standard mortar - 2.5 kg per sqm",
  },
];

// Helper function to calculate material required
export function calculateMaterial(
  area: number,
  coverageRate: number,
  wastagePercentage: number = 0
): { quantity: number; bags?: number } {
  const baseQuantity = area * coverageRate;
  const totalQuantity = baseQuantity * (1 + wastagePercentage / 100);
  return {
    quantity: Math.ceil(totalQuantity * 100) / 100,
  };
}

export function calculateMaterialWithBags(
  area: number,
  coverageRate: number,
  bagsPerUnit: number,
  wastagePercentage: number = 0
): { quantity: number; bags: number } {
  const baseQuantity = area * coverageRate;
  const totalQuantity = baseQuantity * (1 + wastagePercentage / 100);
  const bags = Math.ceil(totalQuantity / bagsPerUnit);
  return {
    quantity: Math.ceil(totalQuantity * 100) / 100,
    bags,
  };
}
