import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

interface FloatingHeart {
  id: number;
  x: number;
  delay: number;
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    // Create initial hearts
    const initialHearts = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      x: (i + 1) * 20,
      delay: i * 0.5,
    }));
    setHearts(initialHearts);

    // Add new hearts periodically
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now(),
        x: Math.random() * 90 + 5,
        delay: 0,
      };
      
      setHearts(prev => [...prev.slice(-4), newHeart]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-hearts">
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="heart-float text-primary opacity-60"
            style={{ left: `${heart.x}%` }}
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ 
              y: ["100vh", "-10vh"], 
              opacity: [0, 0.6, 0],
              scale: [0.8, 1, 0.8],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 4,
              delay: heart.delay,
              ease: "easeInOut",
            }}
          >
            <Heart className="w-5 h-5 fill-current" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
