import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";

export default function Gallery() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1564419320461-6870880221ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Romantic red roses bouquet",
      caption: "Beautiful roses for Alka"
    },
    {
      src: "https://images.unsplash.com/photo-1518635017498-87f514b751ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Floating heart symbols in romantic lighting",
      caption: "Hearts floating like our love"
    },
    {
      src: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Couple silhouettes walking hand in hand at sunset",
      caption: "Walking together into forever"
    },
    {
      src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Handmade heart decorations in soft romantic lighting",
      caption: "Handcrafted with love"
    },
    {
      src: "https://images.unsplash.com/photo-1564419320461-6870880221ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Pink roses blooming in a romantic garden",
      caption: "Garden of our dreams"
    },
    {
      src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Heart symbol carved in tree bark representing eternal love",
      caption: "Our love carved in time"
    },
    {
      src: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Couple silhouettes dancing in romantic evening light",
      caption: "Dancing through life together"
    },
    {
      src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Heart decorations with romantic candles creating warm ambiance",
      caption: "Candlelit moments with Alka"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/">
              <Button
                variant="ghost"
                className="mb-6 text-primary hover:text-accent"
                data-testid="button-back-home"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Beautiful Memories
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every moment with Alka is a treasure
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden rounded-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                data-testid={`gallery-image-${index}`}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-white text-xs font-medium">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Love Message Section */}
          <motion.section
            className="py-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center max-w-4xl mx-auto">
              <Heart className="text-6xl text-primary mb-8 animate-heart-beat mx-auto w-16 h-16" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Every Memory is Special
              </h2>
              <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 romantic-shadow">
                <p className="text-lg md:text-xl text-foreground leading-relaxed font-hindi mb-6">
                  अल्का, हमारी हर यादें मेरे दिल में संजोई हैं।<br/>
                  तुम्हारे साथ बिताया हर पल अनमोल है।<br/>
                  इन तस्वीरों में छुपी हमारी मोहब्बत,<br/>
                  हमेशा इसी तरह महकती रहेगी।
                </p>
                <p className="text-muted-foreground italic">
                  "Alka, I have treasured all our memories in my heart. Every moment spent with you is precious. The love hidden in these pictures will always bloom like this."
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

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
