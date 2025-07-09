const Experience = () => {
    const experiences = [
        {
            title: "Senior Full Stack Developer",
            company: "TechCorp Solutions",
            duration: "2022 - Present",
            location: "San Francisco, CA",
            responsibilities: [
                "Led development of microservices architecture serving 50k+ daily users",
                "Implemented CI/CD pipelines reducing deployment time by 60%",
                "Mentored team of 5 junior developers and conducted code reviews",
                "Architected scalable React applications with Node.js backends",
            ],
        },
        {
            title: "Full Stack Developer",
            company: "StartupXYZ",
            duration: "2020 - 2022",
            location: "Remote",
            responsibilities: [
                "Built and maintained multiple client applications using React and Vue.js",
                "Developed RESTful APIs and GraphQL endpoints with Express.js",
                "Integrated third-party services and payment gateways",
                "Optimized database queries improving performance by 35%",
            ],
        },
        {
            title: "Frontend Developer",
            company: "WebAgency Pro",
            duration: "2019 - 2020",
            location: "New York, NY",
            responsibilities: [
                "Created responsive web applications for diverse client portfolio",
                "Collaborated with designers to implement pixel-perfect UI/UX",
                "Maintained and upgraded legacy codebases to modern standards",
                "Implemented accessibility features following WCAG guidelines",
            ],
        },
        {
            title: "Junior Developer",
            company: "Digital Innovations",
            duration: "2018 - 2019",
            location: "Austin, TX",
            responsibilities: [
                "Developed dynamic websites using HTML, CSS, and JavaScript",
                "Assisted in backend development with PHP and MySQL",
                "Participated in agile development processes and daily standups",
                "Learned and applied best practices in software development",
            ],
        },
    ];

    return (
        <section id="experience" className="section-padding bg-muted/20">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
                        Work Experience
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        My professional journey and career milestones
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-0.5"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className={`relative flex items-center ${
                                    index % 2 === 0
                                        ? "md:flex-row"
                                        : "md:flex-row-reverse"
                                }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-2 md:-translate-x-2 z-10"></div>

                                {/* Content */}
                                <div
                                    className={`ml-12 md:ml-0 md:w-1/2 ${
                                        index % 2 === 0
                                            ? "md:pr-12"
                                            : "md:pl-12"
                                    }`}
                                >
                                    <div className="scroll-animate">
                                        <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50">
                                            <div className="mb-4">
                                                <h3 className="text-xl font-semibold">
                                                    {exp.title}
                                                </h3>
                                                <p className="text-primary font-medium">
                                                    {exp.company}
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    {exp.duration} •{" "}
                                                    {exp.location}
                                                </p>
                                            </div>
                                            <ul className="space-y-2">
                                                {exp.responsibilities.map(
                                                    (resp, respIndex) => (
                                                        <li
                                                            key={respIndex}
                                                            className="flex items-start text-sm text-muted-foreground"
                                                        >
                                                            <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                                            {resp}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
