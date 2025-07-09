const About = () => {
    return (
        <section id="about" className="section-padding bg-muted/20">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
                        About Me
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Get to know the person behind the code
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="scroll-animate">
                            <h3 className="text-2xl font-semibold mb-4">
                                Hello! I'm Sandeep
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                I'm a passionate Full Stack Developer with over
                                5 years of experience in building scalable web
                                applications. My journey in tech started with a
                                curiosity about how things work on the internet,
                                and it has evolved into a deep passion for
                                creating digital solutions that make a
                                difference.
                            </p>
                        </div>

                        <div className="scroll-animate">
                            <h4 className="text-xl font-semibold mb-3">
                                Career Background
                            </h4>
                            <p className="text-muted-foreground leading-relaxed">
                                I specialize in modern JavaScript frameworks,
                                cloud technologies, and building robust backend
                                systems. I've had the privilege of working with
                                startups and established companies, helping them
                                transform their ideas into successful digital
                                products.
                            </p>
                        </div>

                        <div className="scroll-animate">
                            <h4 className="text-xl font-semibold mb-3">
                                Major Achievements
                            </h4>
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                                    Led development of 3 major applications
                                    serving 10k+ users
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                                    Improved system performance by 40% through
                                    optimization
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                                    Mentored junior developers and contributed
                                    to open source
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="scroll-animate">
                        <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50">
                            <h4 className="text-xl font-semibold mb-6">
                                Personal Interests
                            </h4>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-4 bg-muted/50 rounded-lg">
                                    <div className="text-2xl mb-2">🚀</div>
                                    <p className="text-sm font-medium">
                                        Space Tech
                                    </p>
                                </div>
                                <div className="text-center p-4 bg-muted/50 rounded-lg">
                                    <div className="text-2xl mb-2">📚</div>
                                    <p className="text-sm font-medium">
                                        Tech Books
                                    </p>
                                </div>
                                <div className="text-center p-4 bg-muted/50 rounded-lg">
                                    <div className="text-2xl mb-2">🎵</div>
                                    <p className="text-sm font-medium">Music</p>
                                </div>
                                <div className="text-center p-4 bg-muted/50 rounded-lg">
                                    <div className="text-2xl mb-2">🏃‍♂️</div>
                                    <p className="text-sm font-medium">
                                        Running
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
