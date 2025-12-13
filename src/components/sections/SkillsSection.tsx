import { motion } from "framer-motion";
import { Palette, Users, Brain, Layers, Search, PenTool } from "lucide-react";

const designSkills = [
  { name: "User Interface (UI) Design", level: 90, icon: Palette },
  { name: "User Experience (UX) Design", level: 88, icon: Users },
  { name: "Wireframing & Prototyping", level: 85, icon: Layers },
  { name: "Design Thinking", level: 82, icon: Brain },
  { name: "Usability Testing", level: 80, icon: Search },
  { name: "User-Centered Design", level: 85, icon: PenTool },
];

const tools = [
  { name: "Figma", logo: "🎨" },
  { name: "Framer", logo: "⚡" },
  { name: "Sketch", logo: "💎" },
  { name: "Miro", logo: "📋" },
  { name: "Canva", logo: "🖼️" },
  { name: "Notion", logo: "📝" },
  { name: "Maze", logo: "🔬" },
  { name: "UXtweak", logo: "🔍" },
];

const SkillsSection = () => {
  return (
    <div className="min-h-screen py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl">
          A combination of design expertise and psychological insights to create user-centered digital experiences.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Skills with progress bars */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-display font-semibold mb-6 text-primary">Design Skills</h3>
          <div className="space-y-5">
            {designSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <skill.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Certifications */}
        <div className="space-y-8">
          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-display font-semibold mb-6 text-primary">Tools I Use</h3>
            <div className="grid grid-cols-4 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl glass-card glow-border hover:glow-border-hover transition-all"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <span className="text-2xl">{tool.logo}</span>
                  <span className="text-xs text-muted-foreground">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>


        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
