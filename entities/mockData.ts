
import { BlogPosts, CalculatorFormulas, ContactInquiries, FAQs, Products, TeamMembers } from './index';

export const mockBlogPosts: BlogPosts[] = [
  {
    _id: '1',
    title: 'The Future of Construction',
    content: 'Exploring new trends in construction technology...',
    publishDate: '2026-01-01',
    author: 'Jane Doe',
    coverImage: '/images/blog1.jpg',
    category: 'Innovation',
    _createdDate: new Date('2026-01-01'),
    _updatedDate: new Date('2026-01-02'),
  },
  {
    _id: '2',
    title: 'Eco-Friendly Materials',
    content: 'Sustainable choices for modern buildings...',
    publishDate: '2026-01-10',
    author: 'John Smith',
    coverImage: '/images/blog2.jpg',
    category: 'Sustainability',
    _createdDate: new Date('2026-01-10'),
    _updatedDate: new Date('2026-01-11'),
  },
];

export const mockCalculatorFormulas: CalculatorFormulas[] = [
  {
    _id: '1',
    formulaName: 'Concrete Volume',
    description: 'Calculate the volume of concrete needed.',
    calculationLogic: 'length * width * height',
    variables: 'length,width,height',
    outputUnit: 'm³',
    isActive: true,
    lastUpdated: '2026-01-05',
    _createdDate: new Date('2026-01-05'),
    _updatedDate: new Date('2026-01-06'),
  },
];

export const mockContactInquiries: ContactInquiries[] = [
  {
    _id: '1',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    phone: '1234567890',
    message: 'Interested in waterproofing solutions.',
    submissionDate: '2026-01-15',
    _createdDate: new Date('2026-01-15'),
    _updatedDate: new Date('2026-01-15'),
  },
];

export const mockFAQs: FAQs[] = [
  {
    _id: '1',
    question: 'What is the coverage rate?',
    answer: 'Coverage rate depends on the product and application.',
    category: 'Products',
    isFeatured: true,
    lastUpdated: '2026-01-12',
    _createdDate: new Date('2026-01-12'),
    _updatedDate: new Date('2026-01-13'),
  },
];

export const mockProducts: Products[] = [
  {
    _id: '1',
    productName: 'SuperSeal Waterproofing',
    category: 'Waterproofing',
    description: 'Premium waterproofing for concrete surfaces.',
    specifications: 'Apply at 2mm thickness. Coverage: 1kg/m².',
    coverageRate: 1,
    wastagePercentage: 5,
    productImage: '/images/product1.jpg',
    _createdDate: new Date('2026-01-03'),
    _updatedDate: new Date('2026-01-04'),
  },
  {
    _id: '2',
    productName: 'BondMax Adhesive',
    category: 'Adhesive',
    description: 'High-strength adhesive for tiles and stones.',
    specifications: 'Mix ratio: 1:3. Coverage: 0.5kg/m².',
    coverageRate: 1,
    wastagePercentage: 3,
    productImage: '/images/product2.jpg',
    _createdDate: new Date('2026-01-07'),
    _updatedDate: new Date('2026-01-08'),
  },
];

export const mockTeamMembers: TeamMembers[] = [
  {
    _id: '1',
    name: 'Dr. Anya Sharma',
    role: 'Chief Executive Officer',
    bio: 'Dr. Anya Sharma is the visionary leader behind our company, driving innovation and sustainable growth in the construction materials industry. With over 20 years of experience in material science and business development, she is committed to delivering high-quality, eco-friendly solutions.',
    photo: '/images/anyasharma.png',
    linkedInProfile: 'https://linkedin.com/in/anyasharma',
    _createdDate: new Date('2026-01-09'),
    _updatedDate: new Date('2026-01-10'),
  },
  {
    _id: '2',
    name: 'Mark Thompson',
    role: 'Head of Sales & Marketing',
    bio: "Mark Thompson leads our dynamic sales and marketing teams, focusing on expanding our market reach and building strong client relationships. His strategic approach and deep understanding of customer needs have been instrumental in our company's success.",
    photo: '/images/markthompson.png',
    linkedInProfile: 'https://linkedin.com/in/markthompson',
    _createdDate: new Date('2026-01-11'),
    _updatedDate: new Date('2026-01-12'),
  },
  {
    _id: '3',
    name: 'Sarah Chen',
    role: 'Director of Research & Development',
    bio: "Sarah Chen is at the forefront of our product innovation, leading the R&D department in developing cutting-edge construction material solutions. Her expertise in chemical engineering ensures our products meet the highest standards of performance and durability.",
    photo: '/images/sarahchen.png',
    linkedInProfile: 'https://linkedin.com/in/sarahchen',
    _createdDate: new Date('2026-01-11'),
    _updatedDate: new Date('2026-01-12'),
  },
  {
    _id: '4',
    name: 'David Miller',
    role: 'Chief Operations Officer',
    bio: "David Miller oversees all operational aspects, from manufacturing to supply chain management, ensuring efficiency and quality across our production processes. His meticulous planning guarantees timely delivery and consistent product availability.",
    photo: '/images/davidmiller.png',
    linkedInProfile: 'https://linkedin.com/in/davidmiller',
    _createdDate: new Date('2026-01-11'),
    _updatedDate: new Date('2026-01-12'),
  },
  {
    _id: '5',
    name: 'Emily White',
    role: 'Senior Product Manager',
    bio: "Emily White is responsible for the lifecycle of our key product lines, ensuring they align with market demands and customer expectations. Her analytical skills and product development experience are crucial for our portfolio's success.",
    photo: '/images/emilywhite.png',
    linkedInProfile: 'https://linkedin.com/in/emilywhite',
    _createdDate: new Date('2026-01-11'),
    _updatedDate: new Date('2026-01-12'),
  },
  {
    _id: '6',
    name: 'Michael Brown',
    role: 'Technical Support Lead',
    bio: "Michael Brown leads our technical support team, providing expert guidance and solutions to our clients regarding product application and performance. His extensive field experience ensures practical and effective support for all projects.",
    photo: '/images/michaelbrown.png',
    linkedInProfile: 'https://linkedin.com/in/michaelbrown',
    _createdDate: new Date('2026-01-11'),
    _updatedDate: new Date('2026-01-12'),
  },
];
