import { GraduationCap, Stethoscope, Brain, Award, Quote } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Diploma in Pharmacy",
      description: "Strong foundation in pharmaceutical sciences",
    },
    {
      icon: Stethoscope,
      title: "B.Pharm Graduate",
      description: "Bachelor of Pharmacy degree",
    },
    {
      icon: Award,
      title: "Certified Medical Coder",
      description: "Expert in medical coding practices",
    },
    {
      icon: Brain,
      title: "AI Certified",
      description: "Trained in AI-based approaches",
    },
  ];

  const testimonials = [
    {
      quote: "Every dose counts — accuracy saves lives.",
      author: "Healthcare Philosophy",
    },
    {
      quote: "Blending science with technology for better healthcare outcomes.",
      author: "Professional Motto",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Healthcare Professional & Innovator
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Biography */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a healthcare professional with a solid academic foundation in{" "}
              <span className="text-foreground font-medium">Diploma in Pharmacy</span> and{" "}
              <span className="text-foreground font-medium">Bachelor of Pharmacy</span>, backed by certified expertise in{" "}
              <span className="text-primary font-medium">Medical Coding</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Along with my core healthcare training, I have also completed an{" "}
              <span className="text-foreground font-medium">Artificial Intelligence program</span>, enabling me to integrate modern AI-based approaches into research, analysis, and academic problem-solving.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My background blends pharmaceutical science, clinical understanding, coding accuracy, and AI literacy, allowing me to support healthcare learning, create structured academic content, and contribute to research-oriented projects with clarity, precision, and a modern skillset.
            </p>

            {/* Testimonials */}
            <div className="pt-8 space-y-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l-2 border-primary/30"
                >
                  <Quote className="absolute -left-3 -top-1 w-6 h-6 text-primary/40 bg-card" />
                  <blockquote className="text-foreground font-medium italic mb-2">
                    "{testimonial.quote}"
                  </blockquote>
                  <cite className="text-sm text-muted-foreground not-italic">
                    — {testimonial.author}
                  </cite>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-background rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "B.Pharm", label: "Degree" },
            { value: "Medical", label: "Coding Certified" },
            { value: "AI", label: "Certified" },
            { value: "Pharma Write", label: "Pro Founder" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-background rounded-2xl shadow-soft"
            >
              <div className="font-display text-2xl md:text-3xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
