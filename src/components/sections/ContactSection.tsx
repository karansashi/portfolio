import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Instagram, Twitter, Youtube, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, url: "#", color: "hover:text-blue-500" },
  { name: "GitHub", icon: Github, url: "#", color: "hover:text-gray-400" },
  { name: "Instagram", icon: Instagram, url: "#", color: "hover:text-pink-500" },
  { name: "Twitter", icon: Twitter, url: "#", color: "hover:text-sky-500" },
  { name: "YouTube", icon: Youtube, url: "#", color: "hover:text-red-500" },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setTimeout(() => setIsSubmitted(false), 3000);
  };

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
          Get in <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl">
          Ready to start your next project? Let's collaborate and create something amazing together.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <label className="block text-sm font-medium mb-2">Your Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
              placeholder="John Doe"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
              placeholder="john@example.com"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none resize-none h-32"
              placeholder="Tell me about your project..."
              required
            />
          </motion.div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="group flex items-center justify-center gap-2 w-full px-6 py-4 bg-primary text-primary-foreground rounded-xl font-medium transition-all glow-border hover:shadow-lg hover:shadow-primary/25 disabled:opacity-70"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {isSubmitting ? (
              <motion.div
                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            ) : isSubmitted ? (
              <>
                <CheckCircle className="w-5 h-5" />
                Sent Successfully!
              </>
            ) : (
              <>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </>
            )}
          </motion.button>
        </motion.form>

        {/* Contact Info & Socials */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Contact Info Cards */}
          <div className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: "karansashi2003@gmail.com" },
              { icon: Phone, label: "Phone", value: "+91 6381004047" },
              { icon: MapPin, label: "Location", value: "Bangalore, India" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="flex items-center gap-4 p-5 rounded-xl glass-card glow-border hover:glow-border-hover transition-all"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-medium">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            className="p-6 rounded-2xl glass-card glow-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-display font-semibold mb-4">Connect with me</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  className={`w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center text-muted-foreground ${social.color} transition-all hover:bg-primary/10`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;
