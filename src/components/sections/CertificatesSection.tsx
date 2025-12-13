import { motion } from "framer-motion";
import { ArrowRight, Award, Calendar, CheckCircle } from "lucide-react";

const certificates = [
  {
    title: "Google Ux Professional Certificate",
    issuer: "Coursera",
    status: "Completed",
    description: "Trained through Google UX Professional Certificate, applying industry-ready, user-centered design principles with confidence.",
    date: "29/09/2024",
    color: "from-blue-500 to-cyan-500",
    link: "https://www.coursera.org/account/accomplishments/specialization/5BCFW9V9YFRO?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Ds12n",
  },
  {
    title: "Digital Skills:  User Experience",
    issuer: "Accenture",
    status: "Completed",
    description: "Enhanced UX skills through Accenture's training, crafting intuitive experiences with user-centered design and confidence gained.",
    date: "20/07/2025",
    color: "from-green-500 to-emerald-500",
    link: "https://www.futurelearn.com/certificates/os3pl1l",
  },
  {
    title: "Human Skills in the Age of AI",
    issuer: "Microsoft & Linkedin",
    status: "Completed",
    description: "Fundamental knowledge of AWS Cloud concepts, services, and terminology for cloud-based solutions.",
    date: "19/07/2025",
    color: "from-orange-500 to-amber-500",
    link: "Developed essential human skills for AI era through Microsoft & LinkedIn training, enhancing collaboration and adaptability.",
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    status: "Completed",
    description: "Understanding of cloud services and Azure platform, including core Azure services and management tools.",
    date: "2022",
    color: "from-purple-500 to-pink-500",
    link: "#",
  },
];

const CertificatesSection = () => {
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
          <span className="gradient-text">Certificates</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl">
          A collection of my professional certifications and achievements in technology and data science.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.title}
            className="group relative rounded-2xl glass-card overflow-hidden glow-border hover:glow-border-hover transition-all duration-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            {/* Gradient overlay on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

            <div className="p-6 relative z-10">
              <motion.div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} p-3 mb-4`}
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <Award className="w-full h-full text-white" />
              </motion.div>

              <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                {cert.issuer}
              </p>

              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-xs text-green-600 font-medium">{cert.status}</span>
                <Calendar className="w-4 h-4 text-muted-foreground ml-2" />
                <span className="text-xs text-muted-foreground">{cert.date}</span>
              </div>

              <p className="text-sm text-muted-foreground line-clamp-3">
                {cert.description}
              </p>

              <motion.a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/button mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary"
                whileHover={{ x: 5 }}
              >
                View Certificate
                <ArrowRight className="w-4 h-4 transition-transform group-hover/button:translate-x-1" />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CertificatesSection;
