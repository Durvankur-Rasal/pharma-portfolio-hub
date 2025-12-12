import { Mail, Stethoscope, FlaskConical, Pill, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-card relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Stethoscope className="absolute top-20 left-10 w-16 h-16 text-primary/5" />
        <FlaskConical className="absolute bottom-20 right-10 w-20 h-20 text-accent/5" />
        <Pill className="absolute top-1/2 right-1/4 w-12 h-12 text-primary/5 rotate-45" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to collaborate? I'd love to hear from you.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="max-w-xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Contact Information
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Feel free to reach out for collaborations, research opportunities, or any questions about pharmaceutical sciences and healthcare.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:rushiwable9321@gmail.com"
                className="flex items-center gap-4 p-4 bg-background rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-medium text-foreground">
                    rushiwable9321@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/rushikesh-wable-75589236a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-background rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">LinkedIn</div>
                  <div className="font-medium text-foreground">
                    Rushikesh Wable
                  </div>
                </div>
              </a>
            </div>

            {/* Decorative Card */}
            <div className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Pill className="w-6 h-6 text-primary" />
                <span className="font-display font-semibold text-foreground">
                  Pharma Write Pro
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Helping pharmacy and healthcare students with research, review, thesis, and career guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
