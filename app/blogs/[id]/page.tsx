import Link from "next/link";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { blogPosts } from "@/data/blogs";

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export default function BlogPost({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, different post)
  const relatedPosts = blogPosts.filter(
    (p) => p.category === post.category && p.id !== post.id
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Article Header */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <span className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700">
              {post.category}
            </span>
            <span className="text-sm text-gray-600">{post.date}</span>
            <span className="text-sm text-gray-600">•</span>
            <span className="text-sm text-gray-600">{post.readTime} min read</span>
          </div>

          <h1 className="mt-6 text-4xl font-bold text-gray-900 sm:text-5xl">
            {post.title}
          </h1>

          <div className="mt-6 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gray-300"></div>
            <div>
              <p className="font-semibold text-gray-900">{post.author}</p>
              <p className="text-sm text-gray-600">{post.date}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-gray max-w-none">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              {post.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-700">
                  {paragraph.split("\n").map((line, lineIndex) => (
                    <span key={lineIndex}>
                      {line}
                      {lineIndex < paragraph.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </p>
              ))}
            </div>
          </div>

          {/* Article Footer */}
          <div className="mt-12 border-t border-gray-200 pt-12">
            <div className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:items-start">
              <div>
                <p className="text-sm text-gray-600">Share this article</p>
                <div className="mt-3 flex gap-4">
                  {["Twitter", "LinkedIn", "Facebook"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-gray-900"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
              <Link href="/blogs">
                <Button variant="outline">← Back to Articles</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
              Related Articles
            </h2>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.slice(0, 3).map((relatedPost) => (
                <Card key={relatedPost.id}>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-medium text-gray-600">
                      {relatedPost.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {relatedPost.readTime} min
                    </span>
                  </div>

                  <h3 className="mt-3 text-lg font-semibold text-gray-900">
                    {relatedPost.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
                    {relatedPost.excerpt}
                  </p>

                  <div className="mt-6 border-t border-gray-200 pt-4">
                    <Link href={`/blogs/${relatedPost.id}`}>
                      <Button size="sm" variant="secondary">
                        Read →
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
