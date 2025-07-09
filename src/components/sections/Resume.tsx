import { Button } from "@/components/ui/button";

const Resume = () => {
    const handleDownload = () => {
        // Create a temporary link to download the resume
        const link = document.createElement("a");
        link.href = "/resume-sandeep-pulapaka.pdf";
        link.download = "Sandeep_Pulapaka_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleView = () => {
        window.open("/resume-sandeep-pulapaka.pdf", "_blank");
    };

    return (
        <section className="section-padding bg-muted/20">
            <div className="max-w-4xl mx-auto text-center">
                <div className="scroll-animate">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
                        Resume
                    </h2>
                    <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Download or view my complete professional resume with
                        detailed experience and qualifications
                    </p>

                    <div className="bg-card rounded-2xl p-12 shadow-lg border border-border/50">
                        <div className="mb-8">
                            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg
                                    className="w-12 h-12 text-primary"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                </svg>
                            </div>

                            <h3 className="text-2xl font-semibold mb-2">
                                Professional Resume
                            </h3>
                            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                                Complete overview of my experience, skills,
                                education, and professional achievements
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                onClick={handleDownload}
                                size="lg"
                                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 transform hover:scale-105"
                            >
                                <svg
                                    className="w-5 h-5 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                </svg>
                                Download Resume
                            </Button>

                            <Button
                                onClick={handleView}
                                variant="outline"
                                size="lg"
                                className="text-lg px-8 py-6 border-2 hover:bg-accent/10 transition-all duration-300 transform hover:scale-105"
                            >
                                <svg
                                    className="w-5 h-5 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                                View Online
                            </Button>
                        </div>

                        <div className="mt-8 pt-8 border-t border-border/50">
                            <p className="text-sm text-muted-foreground">
                                Last updated: March 2024 • PDF format • 2 pages
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
