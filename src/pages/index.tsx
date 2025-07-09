import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import ThemeToggle from "@/components/ThemeToggle";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";
import Blog from "@/components/sections/Blog";
import Resume from "@/components/sections/Resume";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

const Index = () => {
    useEffect(() => {
        // Scroll animation observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px",
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                }
            });
        }, observerOptions);

        // Observe all scroll-animate elements
        const animateElements = document.querySelectorAll(".scroll-animate");
        animateElements.forEach((el) => observer.observe(el));

        return () => {
            animateElements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <ThemeToggle />

            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Education />
                <Projects />
                <Blog />
                <Resume />
                <Testimonials />
                <Contact />
            </main>

            <Footer />
        </div>
    );
};

export default Index;
