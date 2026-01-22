"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { products, categories } from "@/data/products";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Our Products
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">
            Explore our complete range of premium construction materials and solutions
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">
              Filter by Category
            </h2>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === null ? "primary" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(null)}
              >
                All Products
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "primary" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                layout
              >
                <Card className="flex h-full flex-col justify-between">
                  <div>
                    <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                      {product.category}
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-gray-900">
                      {product.name}
                    </h3>
                    <p className="mt-3 text-gray-600">
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-gray-200 pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">Coverage Rate</p>
                        <p className="text-lg font-semibold text-gray-900">
                          {product.coverageRate} {product.unit}/sqm
                        </p>
                      </div>
                      {product.price && (
                        <div className="text-right">
                          <p className="text-sm text-gray-500">Price</p>
                          <p className="text-lg font-semibold text-gray-900">
                            Rs. {product.price}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-gray-600">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Need help choosing?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Use our calculator to determine the exact quantity you need for your project.
          </p>
          <div className="mt-8">
            <a href="/calculator">
              <Button variant="secondary" size="lg">
                Try Calculator
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
