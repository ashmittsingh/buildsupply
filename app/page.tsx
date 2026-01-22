import { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { blogPosts } from "@/data/blogs";

export const metadata: Metadata = {
  title: "BuildSupply - Premium Construction Materials & Coverage Calculator",
  description: "Industry-leading construction materials including adhesives, waterproofing solutions, grouts, and decorative finishes. Try our advanced formula-based coverage calculator.",
  keywords: "construction materials, tile adhesive, grout, waterproofing, coverage calculator, construction supplies",
  openGraph: {
    title: "BuildSupply - Premium Construction Materials & Coverage Calculator",
    description: "Industry-leading construction materials including adhesives, waterproofing solutions, and coverage calculator for professionals.",
    type: "website",
  },
};

export default function Home() {
  const featuredProducts = products.slice(0, 3);
  const latestBlogs = blogPosts.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 py-20 sm:py-32 lg:py-40">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gray-200 opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gray-200 opacity-20 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-block rounded-full bg-gray-200 px-4 py-1 text-sm font-medium text-gray-700"
          >
            Professional Construction Materials
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl"
          >
            Premium Materials for Every Construction Need
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl"
          >
            Industry-leading adhesives, waterproofing solutions, and decorative finishes designed for professionals who demand excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center"
          >
            <Link href="/calculator">
              <Button size="lg">Try Calculator</Button>
            </Link>
            <Link href="/products">
              <Button variant="outline" size="lg">
                Browse Products
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Featured Products
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore our most popular solutions trusted by professionals
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {featuredProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <Card className="flex h-full flex-col justify-between">
                  <div>
                    <span className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
                      {product.category}
                    </span>
                    <h3 className="mt-4 text-xl font-semibold text-gray-900">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {product.description}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center justify-between pt-6">
                    <div className="text-sm text-gray-500">
                      <span className="font-semibold text-gray-900">
                        {product.coverageRate}
                      </span>
                      <span className="ml-1">{product.unit}/sqm</span>
                    </div>
                    <Link href="/products">
                      <Button size="sm" variant="secondary">
                        View →
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <Link href="/products">
              <Button variant="secondary" size="lg">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="bg-gray-900 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Material Coverage Calculator
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
              Calculate exact material quantities needed for your project with our advanced formula-based calculator.
            </p>
            <div className="mt-8">
              <Link href="/calculator">
                <Button variant="secondary" size="lg">
                  Get Started →
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Latest Articles
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Industry insights and expert tips for your construction projects
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {latestBlogs.map((blog) => (
              <motion.div key={blog.id} variants={itemVariants}>
                <Card className="flex h-full flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {blog.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {blog.readTime} min read
                      </span>
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-gray-900">
                      {blog.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{blog.excerpt}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-6">
                    <span className="text-sm text-gray-500">{blog.date}</span>
                    <Link href={`/blogs/${blog.id}`}>
                      <Button size="sm" variant="secondary">
                        Read →
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <Link href="/blogs">
              <Button variant="secondary" size="lg">
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose BuildSupply?
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                icon: "✓",
                title: "Industry-Leading Quality",
                description: "Premium materials tested and trusted by professionals worldwide",
              },
              {
                icon: "🧮",
                title: "Advanced Calculator",
                description: "Formula-based calculations for precise material estimation",
              },
              {
                icon: "📚",
                title: "Expert Resources",
                description: "Comprehensive guides, blogs, and technical documentation",
              },
              {
                icon: "⚡",
                title: "Fast Delivery",
                description: "Quick shipping on all products to keep projects on schedule",
              },
              {
                icon: "💬",
                title: "Expert Support",
                description: "Dedicated team ready to help with technical questions",
              },
              {
                icon: "🌱",
                title: "Eco-Friendly",
                description: "Sustainable products that don't compromise on performance",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="text-center">
                  <div className="text-4xl">{feature.icon}</div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Contact us today for product inquiries, technical support, or to learn more about our solutions.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
              <Link href="/contact">
                <Button size="lg">Contact Us</Button>
              </Link>
              <Link href="/resources">
                <Button variant="outline" size="lg">
                  View Resources
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
