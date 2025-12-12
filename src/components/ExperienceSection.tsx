import { Button } from "@/components/ui/button";
import { Briefcase, ExternalLink, Building2, Calendar } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Experience
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Professional Journey
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Experience Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-background rounded-3xl shadow-soft overflow-hidden group hover:shadow-glow transition-all duration-500">
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-accent to-primary" />

            <div className="p-8 md:p-10">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Briefcase className="w-10 h-10 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    Medical Coding Internship
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      Pharmaceutical Industry
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Professional Training
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Completed comprehensive pharmacy internship gaining hands-on experience in:
                </p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Dispensing medications accurately",
                    "Patient counseling & care",
                    "Inventory management",
                    "Pharmaceutical compounding",
                    "Drug interaction analysis",
                    "Healthcare documentation",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Button variant="pill" asChild>
                <a
                  href="https://drive.google.com/file/d/1WnFRg-3A6PEbX082KrpSKBkPrZCwqUnE/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Experience Letter
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-accent/5 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
