import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, inventory management, and admin dashboard.",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/sandeep/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.vercel.app",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      techStack: ["Vue.js", "Firebase", "Vuex", "Socket.io", "CSS3"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/sandeep/task-manager",
      liveUrl: "https://task-manager-demo.netlify.app"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics using multiple APIs.",
      techStack: ["React", "TypeScript", "Chart.js", "OpenWeather API", "Mapbox"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/sandeep/weather-dashboard",
      liveUrl: "https://weather-app-demo.vercel.app"
    },
    {
      title: "Social Media Analytics",
      description: "Analytics dashboard for social media metrics with data visualization, reporting features, and real-time social media monitoring.",
      techStack: ["Next.js", "PostgreSQL", "Prisma", "Chart.js", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/sandeep/social-analytics",
      liveUrl: "https://social-analytics-demo.vercel.app"
    },
    {
      title: "Learning Management System",
      description: "Complete LMS with course creation, student enrollment, progress tracking, and interactive learning modules.",
      techStack: ["React", "Node.js", "MySQL", "JWT", "AWS S3"],
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/sandeep/lms-platform",
      liveUrl: "https://lms-demo.herokuapp.com"
    },
    {
      title: "Real Estate Portal",
      description: "Property listing platform with advanced search, virtual tours, mortgage calculator, and agent management system.",
      techStack: ["React", "Express", "MongoDB", "Cloudinary", "Mapbox"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/sandeep/real-estate-portal",
      liveUrl: "https://realestate-demo.netlify.app"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and technical capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`scroll-animate ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}>
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">Featured</span>
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed flex-1">{project.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3 mt-auto">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
