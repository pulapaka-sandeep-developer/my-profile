const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Vue.js", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "JavaScript", level: 95 },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "Java", level: 75 },
        { name: "GraphQL", level: 85 },
        { name: "REST APIs", level: 95 },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 85 },
        { name: "Redis", level: 70 },
        { name: "Firebase", level: 80 },
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Git", level: 95 },
        { name: "CI/CD", level: 80 },
        { name: "Kubernetes", level: 70 },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="scroll-animate">
              <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50 h-full">
                <h3 className="text-xl font-semibold mb-6 text-center">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
