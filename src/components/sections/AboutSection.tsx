import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Heart } from "lucide-react";

const experiences = [
  {
    period: "Sep 2025 - Dec 2025",
    role: "Team Leader - UI/UX Design",
    company: "Uptoskills",
    description: "Led design teams during internship projects, coordinating cross-functional collaboration and mentoring peers.",
    link: "https://drive.google.com/drive/u/1/folders/1vEoPiPZHJ5EXAQPTK3qmJ7haZCkfibzq",
  },
  {
    period: "Jan 2025 - Feb 2025",
    role: "UI/UX Designer",
    company: "Mohans Art",
    description: "Designed responsive e-commerce website for furniture brand using UX research and competitive analysis.",
    link:"",
  },
  {
    period: "Sep 2022 - Oct 2022",
    role: "Web Development Intern",
    company: "Computer Society of India",
    description: "Developed fully responsive website landing pages using HTML5 and CSS3.",
  },
];

const AboutSection = () => {
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
          About <span className="gradient-text">Me</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Bio section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="p-6 rounded-2xl glass-card glow-border">
            <h3 className="text-xl font-display font-semibold mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" />
              Who I Am
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Detail-oriented and motivated UI/UX designer with a strong academic foundation in 
              psychology and hands-on training in user experience design. Skilled in applying 
              behavioral insights, usability best practices, and design thinking to create 
              intuitive, inclusive, and visually refined digital products.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-card glow-border">
            <h3 className="text-xl font-display font-semibold mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              Education
            </h3>
            <div className="space-y-2">
              <p className="font-medium">BSc Computer Science and Psychology</p>
              <p className="text-sm text-muted-foreground">Bangalore University • 2022 - 2025</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl glass-card glow-border">
            <h3 className="text-xl font-display font-semibold mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Psychological Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {["User Research", "Behavioral Analysis", "Cognitive Psychology", "Empathy Mapping", "User Persona Development"].map((skill) => (
                <span key={skill} className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-display font-semibold mb-6 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-primary" />
            Experience
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.role}
                  className="relative pl-10"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-2 top-2 w-4 h-4 rounded-full bg-primary glow-border"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.2 }}
                  />

                  <div className="p-5 rounded-xl glass-card hover:glow-border transition-all">
                    <span className="text-xs text-primary font-medium">{exp.period}</span>
                    <h4 className="font-display font-semibold mt-1">{exp.role}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
