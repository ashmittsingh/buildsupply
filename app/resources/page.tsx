"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { resources, resourceCategories } from "@/data/resources";

export default function Resources() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredResources = selectedCategory
    ? resources.filter((r) => r.category === selectedCategory)
    : resources;

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
            Resources & Documentation
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">
            Access comprehensive guides, technical specs, and training materials
          </p>
        </div>
      </section>

      {/* Resources Section */}
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
                All Resources
              </Button>
              {resourceCategories.map((category) => (
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

          {/* Resources Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredResources.map((resource) => (
              <motion.div key={resource.id} variants={itemVariants} layout>
                <Card className="flex h-full flex-col justify-between">
                  <div>
                    {resource.icon && (
                      <div className="text-4xl">{resource.icon}</div>
                    )}
                    <span className="mt-3 inline-block rounded-lg bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                      {resource.category}
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-gray-900">
                      {resource.title}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {resource.description}
                    </p>
                  </div>
                  <div className="mt-6 border-t border-gray-200 pt-4">
                    <Button size="sm" variant="secondary" className="w-full">
                      Learn More →
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredResources.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-gray-600">
                No resources found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-gray-50 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Popular Resources
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                title: "Product Datasheets",
                description: "Technical specifications for all products",
                icon: "📄",
              },
              {
                title: "Installation Guides",
                description: "Step-by-step installation instructions",
                icon: "📋",
              },
              {
                title: "Video Tutorials",
                description: "Video demonstrations of best practices",
                icon: "▶️",
              },
              {
                title: "Safety Guidelines",
                description: "Health and safety information",
                icon: "⚠️",
              },
              {
                title: "FAQs",
                description: "Answers to common questions",
                icon: "❓",
              },
              {
                title: "Blog Articles",
                description: "Industry insights and tips",
                icon: "📚",
              },
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <div className="text-5xl">{item.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Help CTA */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Need Expert Help?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Our team is available to provide technical support and answer any questions.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <a href="/contact" className="inline-block rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-gray-800">
              Contact Support
            </a>
            <a href="/faqs" className="inline-block rounded-lg border border-gray-900 px-6 py-3 font-semibold text-gray-900 transition-colors duration-200 hover:bg-gray-50">
              Browse FAQs
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
