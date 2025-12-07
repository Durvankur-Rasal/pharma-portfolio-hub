import { Award, ExternalLink } from "lucide-react";

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Certification
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My Certificate
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certification validating my expertise in healthcare
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        {/* Certificate Card */}
        <div className="max-w-md mx-auto">
          <a
            href="https://drive.google.com/file/d/1S8p_L74mpwV8sSDGns3RPtDPjhkDVRvy/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-glow transition-all duration-500 hover:-translate-y-2 overflow-hidden"
          >
            {/* Gradient Top Border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent" />

            {/* Icon */}
            <div className="relative mb-6 flex justify-center">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Award className="w-10 h-10 text-primary" />
              </div>
            </div>

            {/* Content */}
            <div className="text-center">
              <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                Professional Certificate
              </h3>
              <p className="text-muted-foreground mb-4">
                Healthcare Certification
              </p>
              <div className="inline-flex items-center gap-2 text-primary font-medium">
                <span>View Certificate</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
