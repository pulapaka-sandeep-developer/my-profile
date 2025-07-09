import { Button } from '@/components/ui/button';

const Blog = () => {
  const blogPosts = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Learn the best practices for architecting large-scale React applications that can grow with your team and requirements.",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "React",
      url: "https://medium.com/@sandeep/building-scalable-react-apps",
      featured: true
    },
    {
      title: "Mastering Node.js Performance",
      excerpt: "Deep dive into Node.js optimization techniques including clustering, caching strategies, and memory management.",
      date: "February 28, 2024",
      readTime: "12 min read",
      category: "Node.js",
      url: "https://dev.to/sandeep/mastering-nodejs-performance"
    },
    {
      title: "TypeScript Best Practices in 2024",
      excerpt: "Comprehensive guide to writing maintainable TypeScript code with modern patterns and advanced type features.",
      date: "February 10, 2024",
      readTime: "10 min read",
      category: "TypeScript",
      url: "https://medium.com/@sandeep/typescript-best-practices-2024"
    },
    {
      title: "Cloud Architecture for Startups",
      excerpt: "Cost-effective cloud infrastructure strategies for early-stage companies using AWS and modern DevOps practices.",
      date: "January 22, 2024",
      readTime: "15 min read",
      category: "DevOps",
      url: "https://hashnode.com/@sandeep/cloud-architecture-startups"
    },
    {
      title: "Modern CSS Techniques",
      excerpt: "Exploring CSS Grid, Flexbox, and custom properties to create responsive and maintainable stylesheets.",
      date: "January 8, 2024",
      readTime: "6 min read",
      category: "CSS",
      url: "https://css-tricks.com/author/sandeep"
    }
  ];

  const categories = ["All", "React", "Node.js", "TypeScript", "DevOps", "CSS"];

  return (
    <section id="blog" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Blog & Articles</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge and insights from my development journey
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              size="sm"
              className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className={`scroll-animate ${post.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}>
              <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                {post.featured && (
                  <div className="mb-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">Featured</span>
                  </div>
                )}
                
                <div className="mb-4">
                  <span className="bg-accent/20 text-accent-foreground px-2 py-1 rounded-md text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 hover:text-primary transition-colors cursor-pointer">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                
                <Button 
                  variant="ghost" 
                  className="w-full justify-start p-0 h-auto font-medium text-primary hover:text-primary/80"
                  onClick={() => window.open(post.url, '_blank')}
                >
                  Read Full Article
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            onClick={() => window.open('https://medium.com/@sandeep', '_blank')}
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;