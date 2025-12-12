import { Button } from "@/components/ui/button";
import { ArrowDown, Linkedin, Mail, FlaskConical, Pill, Heart, Activity, FileText, BookOpen } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Capsules */}
        <div className="absolute top-20 left-10 w-16 h-8 bg-primary/10 rounded-full animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute top-40 right-20 w-12 h-6 bg-accent/10 rounded-full animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-40 left-20 w-20 h-10 bg-primary/5 rounded-full animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-60 right-40 w-14 h-7 bg-accent/10 rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
        
        {/* Molecule dots */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary/20 rounded-full" />
        <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-accent/20 rounded-full" />
        <div className="absolute top-1/4 right-1/3 w-4 h-4 bg-primary/15 rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-accent/15 rounded-full" />
        
        {/* Floating Icons */}
        <FlaskConical className="absolute top-32 right-1/4 w-8 h-8 text-primary/20 animate-float" style={{ animationDelay: "1.5s" }} />
        <Pill className="absolute bottom-32 left-1/4 w-10 h-10 text-accent/15 animate-float" style={{ animationDelay: "2.5s" }} />
        <Heart className="absolute top-1/2 right-16 w-6 h-6 text-primary/15 animate-float" style={{ animationDelay: "0.8s" }} />
        <Activity className="absolute bottom-1/4 right-1/3 w-8 h-8 text-accent/20 animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo */}
          <div className="mb-8 animate-fade-up">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-1 shadow-glow">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                <img 
                  src="https://drive.google.com/uc?export=view&id=1aVXUvtjJJARpacnIz0c2VydtE_A0jDYg" 
                  alt="Rushikesh Wable"
                  className="w-full h-full object-cover object-top rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full shadow-soft mb-8 animate-fade-up" style={{ animationDelay: "0.05s" }}>
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Medical Coder & Certified Pharmacist
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Hi, I'm{" "}
            <span className="text-gradient">Rushikesh Wable</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            I'm a <span className="text-primary font-semibold">Medical Coder</span> as well as a{" "}
            <span className="text-primary font-semibold">Certified Pharmacist</span>.
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: "0.3s" }}>
            I founded <span className="font-semibold text-foreground">Pharma Write Pro</span>, an agency dedicated to helping pharmacy and healthcare students with research, review, thesis, career guidance, job placement support, research assistance, and overall academic growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          {/* Resume & Pamphlet Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.45s" }}>
            <a
              href="https://drive.google.com/file/d/11QKqVqIvGV3I0LgezI97zt2fMZuj4Bpw/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-card/80 backdrop-blur-sm rounded-full shadow-soft hover:shadow-glow hover:bg-card transition-all duration-300 hover:scale-105 text-foreground font-medium"
            >
              <FileText className="w-5 h-5 text-primary" />
              <span>My Resume</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1biVVqJAxsCbKjUAcOIuC6xJv-r7JjY9H/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-card/80 backdrop-blur-sm rounded-full shadow-soft hover:shadow-glow hover:bg-card transition-all duration-300 hover:scale-105 text-foreground font-medium"
            >
              <BookOpen className="w-5 h-5 text-accent" />
              <span>Agency Pamphlet</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <a
              href="mailto:rushiwable9321@gmail.com"
              className="w-12 h-12 rounded-full bg-card shadow-soft flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-glow transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/rushikesh-wable-75589236a/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-card shadow-soft flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-glow transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs font-medium">Scroll Down</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
