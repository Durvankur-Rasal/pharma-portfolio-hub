import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Microscope, Bone, Shield } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "COVID-19 Research Paper",
      description:
        "Comprehensive research and analysis on COVID-19, exploring its impact on healthcare systems and pharmaceutical responses.",
      icon: Shield,
      color: "from-primary/20 to-primary/5",
      iconColor: "text-primary",
      link: "https://drive.google.com/file/d/15EG6S0c_GWI5u6pJBSMQuv9V3o4tNGkN/view?usp=drivesdk",
      tags: ["Research", "Pandemic", "Healthcare"],
    },
    {
      title: "Antibiotic Study",
      description:
        "In-depth study on antibiotics, their mechanisms of action, resistance patterns, and clinical applications in modern medicine.",
      icon: Microscope,
      color: "from-accent/20 to-accent/5",
      iconColor: "text-accent",
      link: "https://drive.google.com/file/d/1PzqalG7OjH05Lf1ni-AZuNZVu3oQmEdU/view?usp=drivesdk",
      tags: ["Pharmacology", "Antibiotics", "Clinical"],
    },
    {
      title: "Bone Cancer Research",
      description:
        "Research paper on bone cancer, covering pathophysiology, diagnostic approaches, and current treatment modalities.",
      icon: Bone,
      color: "from-blue-500/20 to-blue-500/5",
      iconColor: "text-blue-500",
      link: "https://drive.google.com/file/d/1EDhMHdXS0Ny2xieP8lkCc_ogfuU_lnJ8/view?usp=drivesdk",
      tags: ["Oncology", "Research", "Treatment"],
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            My Projects
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Research & Publications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my academic research papers and studies in pharmaceutical sciences
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group relative bg-card rounded-3xl shadow-soft overflow-hidden hover:shadow-glow transition-all duration-500 hover:-translate-y-2"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50 group-hover:opacity-70 transition-opacity`}
              />

              <div className="relative p-6 md:p-8">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-card shadow-soft flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <project.icon className={`w-8 h-8 ${project.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-background/80 text-muted-foreground text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  variant="pill-outline"
                  size="sm"
                  className="w-full group/btn"
                  asChild
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    View Document
                    <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  </a>
                </Button>
              </div>

              {/* Decorative pill shape */}
              <div className="absolute -bottom-4 -right-4 w-24 h-12 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
