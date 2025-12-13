import { motion } from "framer-motion";
import { Home, FolderOpen, PlayCircle, User, Mail, Menu, X, Award } from "lucide-react";
import { useState } from "react";
import useMediaQuery from "@/hooks/use-media-query";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "skills", label: "Skills", icon: PlayCircle },
  { id: "certificates", label: "Certificates", icon: Award },
  { id: "about", label: "About", icon: User },
  { id: "contact", label: "Contact", icon: Mail },
];

const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="fixed top-4 left-4 z-50 p-3 rounded-xl glass-card lg:hidden glow-border"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <motion.aside
        className="fixed left-0 top-0 h-full w-64 glass-card z-40 flex flex-col py-8 px-4"
        initial={{ x: -260, opacity: 0 }}
        animate={{ x: isDesktop ? 0 : mobileMenuOpen ? 0 : -260, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Profile Section */}
        <motion.div
          className="flex flex-col items-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent p-0.5 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <img src="/img/karan.jpg" alt="Profile" className="w-full h-full rounded-full object-cover" />
          </motion.div>
          <h2 className="text-lg font-display font-bold text-foreground">KARAN S</h2>
          <p className="text-xs text-primary flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            UI/UX Designer
          </p>
        </motion.div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => {
                onSectionChange(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                activeSection === item.id
                  ? "glow-border bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index + 0.3 }}
              whileHover={{ x: 5 }}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </motion.button>
          ))}
        </nav>

        {/* Social links footer */}
        <motion.div
          className="pt-4 border-t border-border"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-xs text-muted-foreground text-center">
            © 2025 Karan S
          </p>
        </motion.div>
      </motion.aside>

      {/* Overlay for mobile */}
      {mobileMenuOpen && !isDesktop && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
