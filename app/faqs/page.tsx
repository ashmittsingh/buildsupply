"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import { faqs, faqCategories } from "@/data/faqs";

export default function FAQs() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredFAQs = selectedCategory
    ? faqs.filter((f) => f.category === selectedCategory)
    : faqs;

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">
            Find answers to common questions about our products and services
          </p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">
              Filter by Category
            </h2>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === null
                    ? "bg-gray-900 text-white"
                    : "border border-gray-300 bg-white text-gray-700 hover:border-gray-900"
                }`}
              >
                All Questions
              </button>
              {faqCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? "bg-gray-900 text-white"
                      : "border border-gray-300 bg-white text-gray-700 hover:border-gray-900"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* FAQs List */}
          <div className="space-y-4">
            {filteredFAQs.map((faq) => (
              <motion.div
                key={faq.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <button
                  onClick={() => toggleExpanded(faq.id)}
                  className="w-full text-left"
                >
                  <Card className="cursor-pointer transition-shadow duration-200 hover:shadow-md">
                    <div className="flex items-start justify-between gap-4">
                    <h3 className="flex-1 text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <span
                      className={`flex-shrink-0 text-2xl transition-transform duration-200 ${
                        expandedId === faq.id ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedId === faq.id ? "auto" : 0,
                      opacity: expandedId === faq.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <p className="text-gray-600">{faq.answer}</p>
                      <span className="mt-3 inline-block rounded-lg bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                        {faq.category}
                      </span>
                    </div>
                  </motion.div>
                  </Card>
                </button>
              </motion.div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-gray-600">
                No questions found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Didn't find your answer?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Contact our support team for additional help with your questions.
          </p>
          <div className="mt-8">
            <a href="/contact" className="inline-block rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-gray-800">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
