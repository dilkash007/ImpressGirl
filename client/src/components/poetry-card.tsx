import { Link } from "wouter";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface PoetryCardProps {
  title: string;
  subtitle: string;
  preview: string;
  href: string;
  icon: LucideIcon;
  delay?: number;
}

export default function PoetryCard({ 
  title, 
  subtitle, 
  preview, 
  href, 
  icon: Icon,
  delay = 0 
}: PoetryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link href={href}>
        <Card className="poetry-card romantic-shadow hover:shadow-lg transition-all duration-300 cursor-pointer border border-border overflow-hidden group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                {title}
              </h3>
              <Icon className="text-accent w-5 h-5" />
            </div>
            <p className="text-muted-foreground mb-4 text-sm">
              {subtitle}
            </p>
            <div className="poetry-gradient rounded-lg p-4">
              <p className="text-sm font-hindi text-center text-primary/80">
                {preview}
              </p>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
