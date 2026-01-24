import { motion } from "framer-motion";

interface AttractionCardProps {
  image: string;
  title: string;
  description: string;
  index: number;
}

const AttractionCard = ({ image, title, description, index }: AttractionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl aspect-[4/5] cursor-pointer"
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-card opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <motion.div
          initial={{ y: 20 }}
          whileHover={{ y: 0 }}
          className="transform transition-transform duration-300"
        >
          <h3 className="font-display text-xl md:text-2xl text-foreground mb-2 group-hover:text-gold transition-colors duration-300">
            {title}
          </h3>
          <p className="text-foreground/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {description}
          </p>
          <div className="mt-4 flex items-center gap-2 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
            <span>Learn More</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Border Glow on Hover */}
      <div className="absolute inset-0 border border-transparent group-hover:border-gold/30 rounded-xl transition-colors duration-500" />
    </motion.div>
  );
};

export default AttractionCard;
