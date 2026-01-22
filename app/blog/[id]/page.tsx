import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import Image from 'next/image';
import { Spinner } from "@/components/ui/spinner"
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { BlogPosts } from '@/entities';
import { format } from 'date-fns';

export default function BlogDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<BlogPosts | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      loadBlog();
    }
  }, [id]);

  const loadBlog = async () => {
    setIsLoading(true);
    const data = await BaseCrudService.getById<BlogPosts>('blogposts', id!);
    setBlog(data);
    setIsLoading(false);
  };

  const formatDate = (date: Date | string | undefined) => {
    if (!date) return '';
    try {
      return format(new Date(date), 'MMMM dd, yyyy');
    } catch {
      return '';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="w-full max-w-400 mx-auto px-8 lg:px-16 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <Link to="/blogs">
          <Button 
            variant="outline"
            className="mb-12 border-2 border-dark-grey text-dark-grey hover:bg-dark-grey hover:text-white font-paragraph transition-all duration-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        <div className="min-h-150">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Spinner />
            </div>
          ) : !blog ? (
            <div className="text-center py-20">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                Article Not Found
              </h2>
              <p className="font-paragraph text-base text-foreground/60 mb-8">
                The article you're looking for doesn't exist.
              </p>
              <Link to="/blogs">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  View All Articles
                </Button>
              </Link>
            </div>
          ) : (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              {/* Article Header */}
              <header className="mb-12">
                {blog.category && (
                  <div className="inline-block px-4 py-2 bg-white border border-light-grey rounded-sm mb-6">
                    <span className="font-paragraph text-sm text-accent-gold font-medium">
                      {blog.category}
                    </span>
                  </div>
                )}
                
                <h1 className="font-heading text-5xl lg:text-7xl font-bold text-foreground mb-8">
                  {blog.title}
                </h1>
                
                <div className="flex items-center gap-6 text-foreground/60">
                  {blog.publishDate && (
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" strokeWidth={1.5} />
                      <span className="font-paragraph text-base">
                        {formatDate(blog.publishDate)}
                      </span>
                    </div>
                  )}
                  {blog.author && (
                    <div className="flex items-center gap-2">
                      <User className="h-5 w-5" strokeWidth={1.5} />
                      <span className="font-paragraph text-base">
                        {blog.author}
                      </span>
                    </div>
                  )}
                </div>
              </header>

              {/* Featured Image */}
              {blog.coverImage && (
                <div className="aspect-video rounded-sm overflow-hidden mb-12">
                  <Image 
                    src={blog.coverImage}
                    alt={blog.title || 'Blog post cover'}
                    className="w-full h-full object-cover"
                    width={1200}
                  />
                </div>
              )}

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div className="font-paragraph text-lg text-foreground/80 leading-relaxed whitespace-pre-line">
                  {blog.content}
                </div>
              </div>

              {/* Article Footer */}
              <footer className="mt-16 pt-12 border-t border-light-grey">
                <Link to="/blogs">
                  <Button 
                    variant="outline"
                    className="border-2 border-dark-grey text-dark-grey hover:bg-dark-grey hover:text-white font-paragraph transition-all duration-300"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to All Articles
                  </Button>
                </Link>
              </footer>
            </motion.article>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
