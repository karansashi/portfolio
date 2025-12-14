import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";

const stats = [
  { value: "10+", label: "Projects Completed" },
  { value: "UI/UX", label: "Expert" },
  { value: "3+", label: "Internships" },
  { value: "4+", label: "Certifications" },
];

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <div className="min-h-screen relative flex flex-col justify-center pt-20">
      {/* Main content grid */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
        {/* Left: Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
                    >
                      <Sparkles className="w-4 h-4 text-primary" />
                      <span className="text-xs text-muted-foreground">Design with clarity-Build with confidence</span>
                    </motion.div>
          
                    <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            UI/UX Designer
            <br />
          </motion.h1>

          <motion.p
            className="text-lg text-muted-foreground max-w-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            As a Computer Science & Psychology graduate and UX designer, I craft human-centered experiences that balance empathy, clarity, and purpose—ensuring every interaction feels intuitive, meaningful, and confidently designed.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              onClick={() => onNavigate("contact")}
              className="group flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium transition-all glow-border hover:shadow-lg hover:shadow-primary/25"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.a
              href="https://drive.google.com/file/d/1QjtScVb4ShsgGUbDJxTXyjYu8StRQQj4/view"
              className="flex items-center gap-2 px-6 py-3 glass-card rounded-xl font-medium text-foreground hover:bg-muted/50 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-4 h-4" />
              Download CV 
              link:"https://drive.google.com/file/d/1QjtScVb4ShsgGUbDJxTXyjYu8StRQQj4/view",
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right: Stats grid */}
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="p-6 rounded-2xl glass-card glow-border hover:glow-border-hover transition-all cursor-default"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.span
                className="text-3xl md:text-4xl font-display font-bold gradient-text block mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {stat.value}
              </motion.span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
