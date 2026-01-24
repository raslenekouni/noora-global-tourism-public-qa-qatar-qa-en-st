import { motion } from "framer-motion";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61578255764617",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/nooraglobalfortourismservices/",
    label: "Instagram",
  },
  {
    icon: () => (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
      </svg>
    ),
    href: "https://www.tiktok.com/@nooratourismservices",
    label: "TikTok",
  },
];

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Attractions", href: "#attractions" },
  { name: "International Tours", href: "#international" },
  { name: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Noora Global Tourism" className="h-12 w-auto" />
              <div>
                <span className="text-foreground font-display text-lg font-semibold">
                  Noora Global
                </span>
                <span className="block text-gold text-xs tracking-widest uppercase">
                  Tourism
                </span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Your gateway to unforgettable adventures in Qatar and beyond. Experience
              luxury, culture, and excitement with our curated tours.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold transition-colors"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-display text-lg text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Popular Tours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-display text-lg text-foreground mb-6">Popular Tours</h4>
            <ul className="space-y-3">
              {["Desert Safari", "Boat Tour", "City Tour", "Al Zubarah Fort", "Purple Island Kayaking"].map((tour) => (
                <li key={tour}>
                  <a
                    href="#attractions"
                    className="text-muted-foreground hover:text-gold transition-colors text-sm"
                  >
                    {tour}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-display text-lg text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+97433973766"
                  className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  +974 3397 3766
                </a>
              </li>
              <li>
                <a
                  href="mailto:nooraglobalfortourismservices@gmail.com"
                  className="flex items-start gap-3 text-muted-foreground hover:text-gold transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  <span className="break-all">nooraglobalfortourismservices@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span>Al Jabr St, Doha<br />Near Souq Waqif</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Noora Global Tourism. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Based in Doha, Qatar 🇶🇦
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
