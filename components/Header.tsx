import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const productCategories = [
    { name: 'Waterproofing Solutions', path: '/products?category=Waterproofing' },
    { name: 'Tile & Stone Adhesive and Grout', path: '/products?category=Adhesive' },
    { name: 'Concrete Repair Solutions', path: '/products?category=Concrete%20Repair' },
    { name: 'Flooring Solutions', path: '/products?category=Flooring' },
    { name: 'Stamping Solutions', path: '/products?category=Stamping' },
    { name: 'Decorative Surface Finish', path: '/products?category=Decorative' },
    { name: 'Texture Paint Coatings', path: '/products?category=Texture%20Paint' },
    { name: 'Admixtures', path: '/products?category=Admixtures' },
    { name: 'Mortar', path: '/products?category=Mortar' }
  ];

  const resourceLinks = [
    { name: 'Calculator', path: '/calculator' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'FAQs', path: '/faqs' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-light-grey">
      <nav className="max-w-400 mx-auto px-8 lg:px-16 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-heading text-3xl font-bold text-primary">BuildPro</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <Link 
              href="/" 
              className={`font-paragraph text-base transition-colors duration-300 ${
                isActive('/') ? 'text-primary' : 'text-foreground hover:text-accent-gold'
              }`}
            >
              Home
            </Link>
            
            <Link 
              href="/about" 
              className={`font-paragraph text-base transition-colors duration-300 ${
                isActive('/about') ? 'text-primary' : 'text-foreground hover:text-accent-gold'
              }`}
            >
              About Us
            </Link>

            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="font-paragraph text-base text-foreground hover:text-accent-gold transition-colors duration-300 flex items-center gap-1">
                Products
                <ChevronDown className="h-4 w-4" />
              </button>
              
              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white border border-light-grey rounded-sm shadow-lg py-4"
                  >
                    {productCategories.map((category) => (
                      <Link
                        key={category.name}
                        href={category.path}
                        className="block px-6 py-3 font-paragraph text-sm text-foreground hover:bg-background hover:text-accent-gold transition-colors duration-200"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button className="font-paragraph text-base text-foreground hover:text-accent-gold transition-colors duration-300 flex items-center gap-1">
                Resources
                <ChevronDown className="h-4 w-4" />
              </button>
              
              <AnimatePresence>
                {resourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white border border-light-grey rounded-sm shadow-lg py-4"
                  >
                    {resourceLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.path}
                        className="block px-6 py-3 font-paragraph text-sm text-foreground hover:bg-background hover:text-accent-gold transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              href="/contact" 
              className={`font-paragraph text-base transition-colors duration-300 ${
                isActive('/contact') ? 'text-primary' : 'text-foreground hover:text-accent-gold'
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-foreground"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-6 pb-6 border-t border-light-grey pt-6"
            >
              <div className="flex flex-col gap-6">
                <Link 
                  href="/" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-paragraph text-base text-foreground"
                >
                  Home
                </Link>
                
                <Link 
                  href="/about" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-paragraph text-base text-foreground"
                >
                  About Us
                </Link>

                <div>
                  <button 
                    onClick={() => setProductsOpen(!productsOpen)}
                    className="font-paragraph text-base text-foreground flex items-center gap-1 mb-3"
                  >
                    Products
                    <ChevronDown className={`h-4 w-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {productsOpen && (
                    <div className="pl-4 space-y-3">
                      {productCategories.map((category) => (
                        <Link
                          key={category.name}
                          href={category.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block font-paragraph text-sm text-foreground/80"
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <button 
                    onClick={() => setResourcesOpen(!resourcesOpen)}
                    className="font-paragraph text-base text-foreground flex items-center gap-1 mb-3"
                  >
                    Resources
                    <ChevronDown className={`h-4 w-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {resourcesOpen && (
                    <div className="pl-4 space-y-3">
                      {resourceLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block font-paragraph text-sm text-foreground/80"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link 
                  href="/contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-paragraph text-base text-foreground"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
