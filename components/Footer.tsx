import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-lg font-bold text-gray-900">
              <div className="h-6 w-6 rounded-lg bg-gray-900"></div>
              <span>BuildSupply</span>
            </div>
            <p className="text-sm text-gray-600">
              Premium construction materials and solutions for professionals.
            </p>
          </div>

          {/* Products */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-gray-900">Products</h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-600">
              <li>
                <Link href="/products" className="hover:text-gray-900">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-gray-900">
                  Adhesives & Grouts
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-gray-900">
                  Waterproofing
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-gray-900">
                  Coatings & Paints
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-gray-900">Resources</h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-600">
              <li>
                <Link href="/calculator" className="hover:text-gray-900">
                  Calculator
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-gray-900">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-gray-900">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-gray-900">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-gray-900">Company</h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-600">
              <li>
                <Link href="/about" className="hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-900">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-200"></div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-600">
            © {currentYear} BuildSupply. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">
              Twitter
            </a>
            <a href="#" className="hover:text-gray-900">
              LinkedIn
            </a>
            <a href="#" className="hover:text-gray-900">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
