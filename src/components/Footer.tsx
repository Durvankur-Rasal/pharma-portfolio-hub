import { Pill, Heart, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Pill className="w-5 h-5 text-primary" />
              </div>
              <span className="font-display font-bold text-lg">
                Rushikesh Wable
              </span>
            </div>
            <p className="text-sm text-muted-foreground/80">
              Medical Coder & Certified Pharmacist
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href="mailto:rushiwable9321@gmail.com"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/rushikesh-wable-75589236a/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground/80 flex items-center justify-center md:justify-end gap-1">
              Made with <Heart className="w-4 h-4 text-destructive" /> © {currentYear}
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-background/10">
          <p className="text-center text-xs text-muted-foreground/60">
            Disclaimer: This portfolio is for academic and professional representation only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
