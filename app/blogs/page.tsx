"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { blogPosts, blogCategories } from "@/data/blogs";

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = selectedCategory
    ? blogPosts.filter((p) => p.category === selectedCategory)
    : blogPosts;

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
            Blog & Articles
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">
            Expert insights and industry tips for construction professionals
          </p>
        </div>
      </section>

      {/* Blogs Section */}
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
                All Articles
              </Button>
              {blogCategories.map((category) => (
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

          {/* Blog Posts */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-8 lg:grid-cols-1"
          >
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                layout
              >
                <Card className="flex flex-col md:flex-row md:items-start md:gap-8">
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <span className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                          {post.category}
                        </span>
                        <span className="text-sm text-gray-500">
                          {post.date}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {post.readTime} min read
                      </span>
                    </div>

                    <h2 className="mt-4 text-2xl font-bold text-gray-900">
                      {post.title}
                    </h2>

                    <p className="mt-3 text-gray-600">{post.excerpt}</p>

                    <div className="mt-6 flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        By {post.author}
                      </div>
                      <Link href={`/blogs/${post.id}`}>
                        <Button size="sm">Read Article →</Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredPosts.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-gray-600">
                No articles found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gray-50 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Stay Updated
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Subscribe to get the latest articles, tips, and industry updates delivered to your inbox.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 sm:flex-1 sm:max-w-xs"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
