import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Heart, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Poetry", href: "#poetry" },
    { label: "Memories", href: "/gallery" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href === "#poetry" && location === "/") {
      // Scroll to poetry section on home page
      const poetrySection = document.getElementById('poetry');
      if (poetrySection) {
        poetrySection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header className="fixed top-0 w-full bg-card/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/">
              <div className="flex items-center space-x-2" data-testid="link-home">
                <Heart className="text-primary text-xl animate-heart-beat" />
                <h1 className="text-xl font-bold text-primary">Alka - My Love</h1>
              </div>
            </Link>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-primary"
              onClick={() => setIsMobileMenuOpen(true)}
              data-testid="button-mobile-menu"
            >
              <Menu className="w-6 h-6" />
            </Button>

            <nav className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                item.href.startsWith("#") ? (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`button-nav-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link key={item.label} href={item.href}>
                    <a
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid={`link-nav-${item.label.toLowerCase()}`}
                    >
                      {item.label}
                    </a>
                  </Link>
                )
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-card/95 backdrop-blur-md z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            data-testid="mobile-menu"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item) => (
                item.href.startsWith("#") ? (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className="text-2xl text-primary hover:text-accent transition-colors"
                    data-testid={`button-mobile-nav-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link key={item.label} href={item.href}>
                    <a
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-2xl text-primary hover:text-accent transition-colors"
                      data-testid={`link-mobile-nav-${item.label.toLowerCase()}`}
                    >
                      {item.label}
                    </a>
                  </Link>
                )
              ))}
              
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid="button-close-mobile-menu"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
