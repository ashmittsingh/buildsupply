export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  // Calculator FAQs
  {
    id: "faq-calc-001",
    question: "How do I calculate the area of my space?",
    answer: "Simply multiply the length by the width of your space in meters. For example, a room that is 5m long and 4m wide has an area of 20 square meters. You can also enter the total area directly if you already know it.",
    category: "Calculator",
  },
  {
    id: "faq-calc-002",
    question: "What is wastage percentage and why should I add it?",
    answer: "Wastage percentage accounts for material loss during application, spillage, and rework. We recommend 5-10% for most applications. Professional installers might need less, while inexperienced applicators might need more. Always order slightly more material than calculated to account for mistakes.",
    category: "Calculator",
  },
  {
    id: "faq-calc-003",
    question: "How accurate is the calculator?",
    answer: "The calculator uses industry-standard coverage rates for all products. However, actual consumption may vary based on surface condition, application technique, and environmental factors. We recommend getting professional assessments for large projects.",
    category: "Calculator",
  },
  {
    id: "faq-calc-004",
    question: "Can I use the calculator for multiple areas?",
    answer: "Yes, calculate each area separately and add the results together. Or calculate the total area of all spaces and use that in a single calculation.",
    category: "Calculator",
  },

  // Product FAQs
  {
    id: "faq-prod-001",
    question: "What is the difference between tile adhesive and grout?",
    answer: "Tile adhesive (also called thin set) bonds tiles to the substrate (wall or floor). Grout fills the joints between tiles. They are different products with different formulations. Adhesive needs strong bonding strength, while grout needs flexibility and water resistance.",
    category: "Products",
  },
  {
    id: "faq-prod-002",
    question: "Can I use waterproof adhesive for all tile installations?",
    answer: "While waterproof adhesive is excellent for wet areas like bathrooms and kitchens, it's not always necessary for dry interior spaces. However, using waterproof adhesive in all areas provides extra protection and is a good practice for long-lasting installations.",
    category: "Products",
  },
  {
    id: "faq-prod-003",
    question: "What is the shelf life of your products?",
    answer: "Most of our products have a shelf life of 12-18 months when stored properly in cool, dry conditions. Check the packaging for specific expiration dates. Opened products should be used immediately.",
    category: "Products",
  },
  {
    id: "faq-prod-004",
    question: "Do you offer eco-friendly product options?",
    answer: "Yes, we offer several environmentally-friendly alternatives in our product range. Please contact us or check individual product pages for specific eco-certifications and sustainability information.",
    category: "Products",
  },

  // Installation FAQs
  {
    id: "faq-install-001",
    question: "What surface preparation is needed before tiling?",
    answer: "The surface must be clean, dry, and stable. Remove any loose paint, dust, or debris. For porous surfaces like gypsum board, apply a primer. For existing tiles, either remove them or ensure they're firmly adhered. Surface should be relatively flat (within 3-5mm variation).",
    category: "Installation",
  },
  {
    id: "faq-install-002",
    question: "How long should I wait before grouting after tiling?",
    answer: "Most adhesives require 24 hours of curing before grouting. However, this depends on humidity, temperature, and tile type. Check the adhesive manufacturer's instructions for specific timing. Improper timing can compromise both adhesive and grout performance.",
    category: "Installation",
  },
  {
    id: "faq-install-003",
    question: "How do I handle tile expansion joints?",
    answer: "Tile expands and contracts with temperature changes. Leave expansion joints (typically 3-5mm) in grout lines, especially for large areas and natural stone. Use epoxy grout for wet areas and standard grout for dry areas. Never grout expansion joints tight.",
    category: "Installation",
  },
  {
    id: "faq-install-004",
    question: "What should I do if my tiles are cracking?",
    answer: "Tile cracking usually indicates adhesive failure, substrate movement, or improper installation. Identify the root cause before replacing tiles. Poor adhesion might require removing tiles and reapplying with proper coverage.",
    category: "Installation",
  },

  // Technical FAQs
  {
    id: "faq-tech-001",
    question: "What is concrete carbonation and why does it matter?",
    answer: "Carbonation is a chemical process where concrete's alkalinity reduces over time due to CO2 exposure. This can lead to reinforcement corrosion. Waterproofing and sealers help prevent carbonation and extend concrete life significantly.",
    category: "Technical",
  },
  {
    id: "faq-tech-002",
    question: "What causes efflorescence on concrete and masonry?",
    answer: "Efflorescence is the white powder on concrete surfaces caused by water carrying salts to the surface. It's not dangerous but indicates moisture movement. Use waterproofing solutions and improve drainage to reduce efflorescence.",
    category: "Technical",
  },
  {
    id: "faq-tech-003",
    question: "How do temperature and humidity affect product performance?",
    answer: "Both temperature and humidity significantly impact curing times and final strength. Most products perform optimally at 15-25°C and 50-70% humidity. Cold temperatures slow curing; high humidity can trap moisture; low humidity can cause rapid drying and cracking.",
    category: "Technical",
  },

  // Warranty & Service
  {
    id: "faq-warranty-001",
    question: "Do your products come with warranty?",
    answer: "Yes, our products come with a quality warranty when used as directed. Warranty covers manufacturing defects but not failures due to improper installation, storage, or use beyond specifications.",
    category: "Warranty",
  },
  {
    id: "faq-warranty-002",
    question: "How can I contact customer support?",
    answer: "You can reach our support team through the contact form on our website, call us during business hours, or email us. We typically respond within 24 hours.",
    category: "Warranty",
  },
];

export const faqCategories = [
  "Calculator",
  "Products",
  "Installation",
  "Technical",
  "Warranty",
];
