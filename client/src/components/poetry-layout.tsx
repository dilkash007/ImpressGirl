import { ReactNode } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/navigation";

interface PoetryLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  backgroundImage?: string;
}

export default function PoetryLayout({ 
  title, 
  subtitle, 
  children, 
  backgroundImage = "https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300"
}: PoetryLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="min-h-screen flex items-center justify-center p-4"
        >
          <Card className="bg-card rounded-2xl max-w-2xl w-full romantic-shadow overflow-hidden">
            <div className="relative">
              <img 
                src={backgroundImage} 
                alt="Romantic background" 
                className="w-full h-48 object-cover opacity-60" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              <Link href="/">
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                  data-testid="button-back-home"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              </Link>
              
              <div className="absolute bottom-4 left-6">
                <motion.h1 
                  className="text-2xl md:text-3xl font-bold text-white mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {title}
                </motion.h1>
                <motion.p 
                  className="text-white/80"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {subtitle}
                </motion.p>
              </div>
            </div>
            
            <div className="p-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="font-hindi text-lg md:text-xl leading-relaxed text-center space-y-4"
              >
                {children}
              </motion.div>
              
              <motion.div 
                className="mt-8 pt-6 border-t border-border text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
                  Written with all my love for Alka
                  <Heart className="w-4 h-4 text-primary animate-heart-beat fill-current" />
                </p>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}
