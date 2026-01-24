import { motion } from "framer-motion";
import AttractionCard from "./AttractionCard";

import boatImage from "@/assets/boat.png";
import desertSafariImage from "@/assets/desert-safari.png";
import historicTourImage from "@/assets/historic-tour.png";
import planeRideImage from "@/assets/plane-ride.png";
import paratrikingImage from "@/assets/paratriking.png";
import kayakingImage from "@/assets/kayaking.png";
import quadbikeImage from "@/assets/quadbike.png";
import cityTourImage from "@/assets/city-tour.png";

const attractions = [
  {
    image: desertSafariImage,
    title: "Desert Safari",
    description: "Experience the thrill of dune bashing and witness stunning sunsets over the golden sands of Qatar.",
  },
  {
    image: boatImage,
    title: "Dhow Boat Tour",
    description: "Cruise along Doha's coastline on a traditional Arabian dhow and admire the stunning skyline.",
  },
  {
    image: planeRideImage,
    title: "Eurofox Plane Ride",
    description: "Soar above Qatar's landscapes in an exhilarating light aircraft adventure.",
  },
  {
    image: historicTourImage,
    title: "Al Zubarah Fort",
    description: "Explore the UNESCO World Heritage site and discover Qatar's rich history.",
  },
  {
    image: paratrikingImage,
    title: "Paratriking",
    description: "Experience the ultimate aerial adventure with powered paragliding over Qatar.",
  },
  {
    image: kayakingImage,
    title: "Purple Island Kayaking",
    description: "Paddle through the serene mangroves and crystal-clear waters of Al Khor.",
  },
  {
    image: quadbikeImage,
    title: "Buggy & Quad Bike",
    description: "Race across the desert dunes on powerful quad bikes and dune buggies.",
  },
  {
    image: cityTourImage,
    title: "City & Museum Tours",
    description: "Discover Doha's modern marvels and world-class museums with expert guides.",
  },
];

const Attractions = () => {
  return (
    <section id="attractions" className="py-24 bg-background">
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
            Qatar Adventures
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
            Discover Our <span className="text-gradient-gold">Attractions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From thrilling desert adventures to serene cultural experiences, we offer
            unforgettable journeys tailored to every traveler.
          </p>
        </motion.div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {attractions.map((attraction, index) => (
            <AttractionCard
              key={attraction.title}
              image={attraction.image}
              title={attraction.title}
              description={attraction.description}
              index={index}
            />
          ))}
        </div>

        {/* More Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">Also available:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Premium Airport Transport",
              "Dahl Al Misfir Cave",
              "Water Ride Activities",
              "Historical Tour of Old Doha",
              "Shopping Tour",
            ].map((service) => (
              <span
                key={service}
                className="px-4 py-2 rounded-full border border-border text-sm text-foreground/70 hover:border-gold hover:text-gold transition-colors cursor-pointer"
              >
                {service}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Attractions;
