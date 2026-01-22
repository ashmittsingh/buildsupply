import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-primary text-primary-foreground">
      <div className="max-w-400 mx-auto px-8 lg:px-16 py-16 lg:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Company Info */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-6">BuildPro</h3>
            <p className="font-paragraph text-sm text-primary-foreground/80 leading-relaxed mb-6">
              Premium construction materials engineered for precision, durability, and uncompromising quality.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent-gold mt-0.5 shrink-0" strokeWidth={1.5} />
                <span className="font-paragraph text-sm text-primary-foreground/80">
                  123 Industrial Avenue, Construction District
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent-gold shrink-0" strokeWidth={1.5} />
                <span className="font-paragraph text-sm text-primary-foreground/80">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent-gold shrink-0" strokeWidth={1.5} />
                <span className="font-paragraph text-sm text-primary-foreground/80">
                  info@buildpro.com
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/" 
                  className="font-paragraph text-sm text-primary-foreground/80 hover:text-accent-gold transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="font-paragraph text-sm text-primary-foreground/80 hover:text-accent-gold transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/products" 
                  className="font-paragraph text-sm text-primary-foreground/80 hover:text-accent-gold transition-colors duration-300"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="font-paragraph text-sm text-primary-foreground/80 hover:text-accent-gold transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Products</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/products?category=Waterproofing" 
                  className="font-paragraph text-sm text-primary-foreground/80 hover:text-accent-gold transition-colors duration-300"
                >
                  Waterproofing Solutions
                </Link>
              </li>
              <li>
                <Link 
                  href="/products?category=Adhesive" 
                  className="font-paragraph text-sm text-primary-foreground/80 hover:text-accent-gold transition-colors duration-300"
                >
                  Tile & Stone Adhesive
                </Link>
              </li>
              <li>
                <Link 
                  href="/products?category=Concrete%20Repair" 
                  className="font-paragraph text-sm text-primary-foreground/80 hover:text-accent-gold transition-colors duration-300"
                >
                  Concrete Repair Solutions
                </Link>
              </li>
              <li>
                <Link 
                  href="/products?category=Flooring" 
                  className="font-paragraph text-sm text-primary-foreground/80 hover:text-accent-gold transition-colors duration-300"
                >
                  Flooring Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/calculator" 
                  className="font-paragraph text-sm text-primary-foreground/80 hover:text-accent-gold transition-colors duration-300"
                >
                  Material Calculator
                </Link>
              </li>
              <li>
                <Link 
                  href="/blogs" 
                  className="font-paragraph text-sm text-primary-foreground/80 hover:text-accent-gold transition-colors duration-300"
                >
                  Blog Articles
                </Link>
              </li>
              <li>
                <Link 
                  href="/faqs" 
                  className="font-paragraph text-sm text-primary-foreground/80 hover:text-accent-gold transition-colors duration-300"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-paragraph text-sm text-primary-foreground/70">
              © {currentYear} BuildPro. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link 
                href="/privacy" 
                className="font-paragraph text-sm text-primary-foreground/70 hover:text-accent-gold transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="font-paragraph text-sm text-primary-foreground/70 hover:text-accent-gold transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
