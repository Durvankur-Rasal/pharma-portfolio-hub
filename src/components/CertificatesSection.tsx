import { Award, CheckCircle, Shield, Brain, Stethoscope } from "lucide-react";

const CertificatesSection = () => {
  const certificates = [
    {
      title: "Medical Coding Certification",
      issuer: "Healthcare Certification Board",
      icon: Shield,
      color: "from-primary to-primary/70",
    },
    {
      title: "Artificial Intelligence Program",
      issuer: "AI Training Institute",
      icon: Brain,
      color: "from-accent to-accent/70",
    },
    {
      title: "Bachelor of Pharmacy",
      issuer: "University Degree",
      icon: Stethoscope,
      color: "from-blue-500 to-blue-500/70",
    },
    {
      title: "Diploma in Pharmacy",
      issuer: "Pharmacy Board",
      icon: Award,
      color: "from-primary to-accent",
    },
  ];

  return (
    <section id="certificates" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Certifications
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Credentials & Qualifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my expertise in healthcare and technology
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-6 shadow-soft hover:shadow-glow transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient Top Border */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color}`}
              />

              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <cert.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute -top-1 -right-1">
                  <CheckCircle className="w-6 h-6 text-accent fill-accent/20" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {cert.title}
              </h3>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>

              {/* Decorative */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors" />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-card rounded-full shadow-soft">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground">
              All certifications are verified and up-to-date
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
