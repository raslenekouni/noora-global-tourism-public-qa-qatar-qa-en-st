import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const destinations = [
  {
    name: "Saudi Arabia",
    description: "Explore the holy cities and ancient wonders of the Kingdom.",
    flag: "🇸🇦",
  },
  {
    name: "Dubai",
    description: "Experience luxury, innovation, and Arabian hospitality.",
    flag: "🇦🇪",
  },
  {
    name: "Sri Lanka",
    description: "Discover tropical beaches, tea plantations, and rich culture.",
    flag: "🇱🇰",
  },
  {
    name: "India",
    description: "Journey through diverse landscapes and timeless heritage.",
    flag: "🇮🇳",
  },
  {
    name: "Thailand",
    description: "Immerse in vibrant temples, cuisine, and island paradises.",
    flag: "🇹🇭",
  },
];

const InternationalTours = () => {
  return (
    <section id="international" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
            Go Beyond Borders
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
            International <span className="text-gradient-gold">Destinations</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Extend your journey beyond Qatar with our curated international tour packages
            to the world's most captivating destinations.
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass rounded-xl p-6 hover:border-gold/50 transition-all duration-500 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">{destination.flag}</span>
                <div className="flex-1">
                  <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-gold transition-colors">
                    {destination.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {destination.description}
                  </p>
                  <a href="#contact" className="mt-4 flex items-center gap-2 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                     <span>Learn More</span>
                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                   </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button variant="goldOutline" size="lg" asChild>
            <a href="#contact" className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Plan Your International Trip
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default InternationalTours;
