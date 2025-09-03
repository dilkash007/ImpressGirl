import { motion } from "framer-motion";
import { Heart, ArrowDown, Eye, Crown, Moon, Music, Infinity, Sun, Smile, Cloud, BellRing, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import PoetryCard from "@/components/poetry-card";

export default function Home() {
  const scrollToPoetry = () => {
    const poetrySection = document.getElementById('poetry');
    if (poetrySection) {
      poetrySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const poetryCards = [
    {
      title: "First Meeting",
      subtitle: "The moment that changed everything",
      preview: "पहली नज़र में ही अल्का...",
      href: "/poetry/first-meeting",
      icon: Heart,
    },
    {
      title: "Your Smile",
      subtitle: "The sunshine of my life",
      preview: "अल्का की मुस्कान में...",
      href: "/poetry/your-smile",
      icon: Smile,
    },
    {
      title: "Dreams Together",
      subtitle: "Our beautiful future",
      preview: "अल्का के साथ सपने...",
      href: "/poetry/dreams-together",
      icon: Moon,
    },
    {
      title: "Missing You",
      subtitle: "When you're away from me",
      preview: "अल्का की याद में...",
      href: "/poetry/missing-you",
      icon: Cloud,
    },
    {
      title: "Your Eyes",
      subtitle: "Windows to my soul",
      preview: "अल्का की आँखों में...",
      href: "/poetry/your-eyes",
      icon: Eye,
    },
    {
      title: "Promise of Love",
      subtitle: "My eternal commitment",
      preview: "अल्का से वादा...",
      href: "/poetry/promise-of-love",
      icon: BellRing,
    },
    {
      title: "Morning Sunshine",
      subtitle: "You brighten my every day",
      preview: "अल्का की रोशनी...",
      href: "/poetry/morning-sunshine",
      icon: Sun,
    },
    {
      title: "Dance of Love",
      subtitle: "Moving together in harmony",
      preview: "अल्का के साथ नृत्य...",
      href: "/poetry/dance-of-love",
      icon: Music,
    },
    {
      title: "Forever Yours",
      subtitle: "My eternal love declaration",
      preview: "अल्का के लिए हमेशा...",
      href: "/poetry/forever-yours",
      icon: Infinity,
    },
    {
      title: "My Queen",
      subtitle: "You rule my heart",
      preview: "अल्का मेरी रानी...",
      href: "/poetry/my-queen",
      icon: Crown,
    },
    {
      title: "Moonlit Nights",
      subtitle: "Thinking of you under the stars",
      preview: "चाँदनी रात में अल्का...",
      href: "/poetry/moonlit-nights",
      icon: Moon,
    },
    {
      title: "Garden of Love",
      subtitle: "Our love blooms eternal",
      preview: "अल्का के प्रेम का बगीचा...",
      href: "/poetry/garden-of-love",
      icon: Sprout,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20"></div>
        <img 
          src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Romantic couple silhouette" 
          className="absolute inset-0 w-full h-full object-cover opacity-30" 
        />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <Heart className="text-6xl text-primary animate-heart-beat mb-4 mx-auto w-16 h-16" />
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-primary mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            My Dear Alka
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            A collection of love poems written from the depths of my heart, dedicated to the most beautiful soul - Alka
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Button
              onClick={scrollToPoetry}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 romantic-shadow"
              data-testid="button-scroll-to-poetry"
            >
              Read My Love Letters <ArrowDown className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Poetry Navigation Section */}
      <section id="poetry" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Love Poetry Collection
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each poem is a piece of my heart, written specially for you, Alka
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {poetryCards.map((card, index) => (
              <PoetryCard
                key={card.href}
                {...card}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Love Message Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Heart className="text-6xl text-primary mb-8 animate-heart-beat mx-auto w-16 h-16" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              A Special Message for Alka
            </h2>
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 romantic-shadow">
              <p className="text-lg md:text-xl text-foreground leading-relaxed font-hindi mb-6">
                अल्का, तुम मेरी जिंदगी की सबसे खूबसूरत कहानी हो।<br/>
                तुम्हारे बिना मेरा हर दिन अधूरा है।<br/>
                तुम्हारी हँसी में मेरी खुशी छुपी है,<br/>
                तुम्हारे प्यार में मेरी दुनिया बसी है।
              </p>
              <p className="text-muted-foreground italic">
                "Alka, you are the most beautiful story of my life. Every day is incomplete without you. My happiness is hidden in your laughter, my world resides in your love."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="text-primary animate-heart-beat w-5 h-5" />
            <span className="text-lg font-semibold text-primary">Made with Love for Alka</span>
            <Heart className="text-primary animate-heart-beat w-5 h-5" />
          </div>
          <p className="text-muted-foreground">Every word, every design, every heartbeat - all for you ❤️</p>
        </div>
      </footer>
    </div>
  );
}
