const Testimonials = () => {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Product Manager at TechCorp",
            company: "TechCorp Solutions",
            testimonial:
                "Sandeep is an exceptional developer who consistently delivers high-quality code. His attention to detail and problem-solving skills have been invaluable to our team. He transformed our legacy system into a modern, scalable application.",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
        },
        {
            name: "Michael Chen",
            role: "CTO",
            company: "StartupXYZ",
            testimonial:
                "Working with Sandeep was a game-changer for our startup. He built our entire platform from scratch and helped us scale to serve thousands of users. His technical expertise and dedication are remarkable.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        },
        {
            name: "Emily Rodriguez",
            role: "Senior Designer",
            company: "WebAgency Pro",
            testimonial:
                "Sandeep has an incredible ability to bring designs to life with pixel-perfect precision. His collaboration skills and technical knowledge make him a joy to work with. Every project exceeded expectations.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
        },
        {
            name: "David Kumar",
            role: "Lead Developer",
            company: "Digital Innovations",
            testimonial:
                "As Sandeep's mentor early in his career, I watched him grow into an outstanding developer. His passion for learning and commitment to excellence make him a valuable asset to any team.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
        },
    ];

    return (
        <section id="testimonials" className="section-padding bg-muted/20">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
                        What People Say
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Feedback from colleagues, clients, and team members
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="scroll-animate">
                            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 h-full">
                                <div className="flex items-center mb-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover mr-4"
                                    />
                                    <div>
                                        <h4 className="font-semibold">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm text-primary">
                                            {testimonial.role}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            {testimonial.company}
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <svg
                                        className="w-8 h-8 text-primary/20 mb-2"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>

                                <p className="text-muted-foreground leading-relaxed italic">
                                    "{testimonial.testimonial}"
                                </p>

                                <div className="flex justify-end mt-4">
                                    <div className="flex space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className="w-4 h-4 text-yellow-400 fill-current"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                            </svg>
                                        ))}
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

export default Testimonials;
