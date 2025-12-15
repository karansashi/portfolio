import { motion } from "framer-motion";
import { ExternalLink, Figma, Layout, ShoppingCart, Bus, BookOpen } from "lucide-react";

const projects = [
  {
    title: "E-commerce Website Design",
    description: "Designed an e-commerce website using competitive analysis to optimize user journeys and checkout flow.",
    icon: ShoppingCart,
    tags: ["UI/UX", "Figma", "E-commerce"],
    color: "from-purple-500 to-pink-500",
    link: "https://www.figma.com/proto/JV91fEobOe0GQQbNUONBXZ/E-commerce-Website-Redesign?page-id=0%3A1&node-id=95-281&viewport=-552%2C92%2C0.12&t=lsNWiUW8pwPgfa5q-1&scaling=min-zoom&content-scaling=fixed",
  },
  {
    title: "Mohan's Art E-Commerce website",
    description: "Designed an elegant e-commerce website for an antique furniture brand, ensuring seamless purchasing.",
    icon: Bus,
    tags: ["UX Research", "Wireframing", "Accessibility"],
    color: "from-blue-500 to-cyan-500",
    link: "https://www.figma.com/proto/GDgcs6duGY1aAegSdQDSJF/Mohans-Art?page-id=0%3A1&node-id=1-31&viewport=146%2C144%2C0.05&t=Kn1ve8LKKQbbaREq-1&scaling=min-zoom&content-scaling=fixed",
  },
  {
    title: "Psychological Research & Poster Presentation",
    description: "Designed athlete-focused poster leveraging insights from sports professionals directly.",
    icon: Layout,
    tags: ["Research Poster", "Psychology Research", "Poster Design"],
    color: "from-rose-500 to-red-500",
    link:"https://drive.google.com/drive/u/1/folders/1b4LKSp02ri3bFA1-sCnlezpUB0cE3xB5",
  },
  {
    title: "Ooty Taxi Booking Website",
    description: "Trusted cab booking service for Nilgiris, featuring real-time tracking, transparent fares, seamless booking.",
    icon: ShoppingCart,
    tags: ["E-commerce", "Branding", "Mobile"],
    color: "from-rose-500 to-red-500",
    link:"https://www.figma.com/proto/gvor7rd3YOsQntAmhjhZ0Z/Untitled?page-id=0%3A1&node-id=1-2&viewport=179%2C191%2C0.18&t=19GPOPcHtBQygFUT-1&scaling=scale-down&content-scaling=fixed   ",
  },
  {
    title: "Lead Generation UX Design",
    description: "Antique furniture e-commerce platform showcasing rare pieces, elegant design, intuitive navigation.",
    icon: Layout,
    tags: ["Conversion", "Lead Gen", "User Research"],
    color: "from-orange-500 to-amber-500",
    link:"https://www.figma.com/proto/soYEpNyDmQfmLNIEIEQaDN/uptoskill.io?page-id=0%3A1&node-id=1-2&viewport=438%2C141%2C0.15&t=pDRqZVvnjjeOKm2u-1&scaling=contain&content-scaling=fixed&starting-point-node-id=1%3A2&show-proto-sidebar=1",
  },
  {
    title: "Blog Website Redesign",
    description: "Created wireframes and high-fidelity UI designs to improve readability, navigation, and responsive design.",
    icon: BookOpen,
    tags: ["UI Design", "Content Strategy", "Responsive"],
    color: "from-green-500 to-emerald-500",
    link:"https://www.figma.com/proto/w9mItgoUWHqDeynm09683U/Blog-Post-Redesign?page-id=0%3A1&node-id=3-1793&viewport=92%2C88%2C0.09&t=EQCeXfqQ2sPUrMF5-1&scaling=scale-down&content-scaling=fixed ",
  },
  {
    title: "Student Portal Revamp",
    description: "Collaborated with a cross-functional team to redesign six key functional cards and optimize navigation.",
    icon: Figma,
    tags: ["Team Lead", "UI/UX", "Portal"],
    color: "from-violet-500 to-purple-500",
    link:"https://www.figma.com/design/MVn9JtNm18ovPzxjJMt2ZO/Untitled?node-id=0-1&t=KLYov6jzNN03jVDh-1 ",
  },
  {
    title: "Poster Design and Social Media Marketing",
    description: "Created visually appealing posters to boos online product visibility daily.",
    icon: Layout,
    tags: ["Graphic Design", "Social Media Marketing", "Digital Marketing"],
    color: "from-rose-500 to-red-500",
    link:"https://drive.google.com/drive/u/1/folders/1glCygmJZCWo9PHgz5tcgQLb36Np5wfgY",
  },
];

const ProjectsSection = () => {
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
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl">
          A collection of my recent UI/UX design work, showcasing user-centered approaches and modern design solutions.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="group relative rounded-2xl glass-card overflow-hidden glow-border hover:glow-border-hover transition-all duration-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            {/* Gradient overlay on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
            
            <div className="p-6 relative z-10">
              <motion.div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} p-3 mb-4`}
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <project.icon className="w-full h-full text-white" />
              </motion.div>

              <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.link ? (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ x: 5 }}
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </motion.a>
              ) : (
                <motion.button
                  className="flex items-center gap-2 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ x: 5 }}
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </motion.button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
