const Education = () => {
    const education = [
        {
            degree: "Bachelor of Technology",
            field: "Computer Science & Engineering",
            institution: "Indian Institute of Technology",
            year: "2014 - 2018",
            grade: "CGPA: 8.5/10",
            description:
                "Specialized in Software Engineering and Data Structures & Algorithms",
        },
    ];

    const certifications = [
        {
            name: "AWS Certified Solutions Architect",
            issuer: "Amazon Web Services",
            year: "2023",
            credentialId: "AWS-SA-123456",
        },
        {
            name: "MEAN Stack Development",
            issuer: "Udemy",
            year: "2022",
            credentialId: "UC-MEAN-789012",
        },
        {
            name: "React - The Complete Guide",
            issuer: "Udemy",
            year: "2021",
            credentialId: "UC-REACT-345678",
        },
        {
            name: "Node.js Certification",
            issuer: "Node.js Foundation",
            year: "2021",
            credentialId: "NODE-CERT-901234",
        },
        {
            name: "Google Cloud Professional",
            issuer: "Google Cloud",
            year: "2020",
            credentialId: "GCP-PROF-567890",
        },
    ];

    return (
        <section id="education" className="section-padding">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
                        Education & Certifications
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Academic background and professional certifications
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Education */}
                    <div className="scroll-animate">
                        <h3 className="text-2xl font-semibold mb-8 text-center">
                            Education
                        </h3>
                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <div
                                    key={index}
                                    className="bg-card rounded-2xl p-6 shadow-lg border border-border/50"
                                >
                                    <div className="mb-4">
                                        <h4 className="text-xl font-semibold">
                                            {edu.degree}
                                        </h4>
                                        <p className="text-primary font-medium">
                                            {edu.field}
                                        </p>
                                        <p className="text-muted-foreground">
                                            {edu.institution}
                                        </p>
                                        <div className="flex justify-between items-center mt-2">
                                            <span className="text-sm text-muted-foreground">
                                                {edu.year}
                                            </span>
                                            <span className="text-sm font-medium text-primary">
                                                {edu.grade}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        {edu.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className="scroll-animate">
                        <h3 className="text-2xl font-semibold mb-8 text-center">
                            Certifications
                        </h3>
                        <div className="space-y-4">
                            {certifications.map((cert, index) => (
                                <div
                                    key={index}
                                    className="bg-card rounded-xl p-4 shadow-md border border-border/50 hover:shadow-lg transition-shadow duration-300"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex-1">
                                            <h4 className="font-semibold">
                                                {cert.name}
                                            </h4>
                                            <p className="text-sm text-primary">
                                                {cert.issuer}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                {cert.credentialId}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-sm font-medium text-muted-foreground">
                                                {cert.year}
                                            </span>
                                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mt-2">
                                                <svg
                                                    className="w-6 h-6 text-primary"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
