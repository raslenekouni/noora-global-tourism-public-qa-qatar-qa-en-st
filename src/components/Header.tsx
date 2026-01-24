import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Attractions", href: "#attractions" },
  { name: "International Tours", href: "#international" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <img src={logo} alt="Noora Global Tourism" className="h-12 w-auto" />
          <div className="hidden sm:block">
            <span className="text-foreground font-display text-lg font-semibold tracking-wide">
              Noora Global
            </span>
            <span className="block text-gold text-xs tracking-widest uppercase">
              Tourism
            </span>
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-foreground/80 hover:text-gold transition-colors duration-300 text-sm font-medium tracking-wide"
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hidden lg:flex items-center gap-4"
        >
          <a
            href="tel:+97433973766"
            className="flex items-center gap-2 text-foreground/80 hover:text-gold transition-colors text-sm"
          >
            <Phone className="w-4 h-4" />
            <span>+974 3397 3766</span>
          </a>
          <Button variant="gold" size="sm" asChild>
            <a href="#contact">Book Now</a>
          </Button>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground/80 hover:text-gold transition-colors py-2 text-lg font-medium"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-border my-2" />
              <a
                href="tel:+97433973766"
                className="flex items-center gap-3 text-foreground/80 hover:text-gold transition-colors py-2"
              >
                <Phone className="w-5 h-5" />
                <span>+974 3397 3766</span>
              </a>
              <a
                href="mailto:nooraglobalfortourismservices@gmail.com"
                className="flex items-center gap-3 text-foreground/80 hover:text-gold transition-colors py-2"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">nooraglobalfortourismservices@gmail.com</span>
              </a>
              <Button variant="gold" className="mt-4" asChild>
                <a href="#contact">Book Now</a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
