import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Music } from "lucide-react";
import heroImage from "@/assets/hero-festival.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="p-3 rounded-full bg-primary/20 backdrop-blur-sm">
          <Music className="w-6 h-6 text-primary" />
        </div>
      </div>
      <div className="absolute bottom-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
        <div className="p-4 rounded-full bg-secondary/20 backdrop-blur-sm">
          <Sparkles className="w-8 h-8 text-secondary" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Propulsé par l'Intelligence Artificielle
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-festival bg-clip-text text-transparent">
              Groove
            </span>
            <span className="text-foreground">
              Nomad
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            L'agence de voyage qui révolutionne vos expériences musicales.
            <br />
            Des festivals épiques, des voyages sur-mesure, une technologie d'avant-garde.
          </p>

          {/* Strong Slogan */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              "Votre prochaine aventure musicale commence ici"
            </h2>
            <p className="text-lg text-muted-foreground">
              Notre IA analyse vos goûts musicaux pour créer le voyage festival parfait
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="festival" 
              size="lg" 
              className="text-lg px-8 py-4 font-semibold group"
            >
              Découvrir mes festivals
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 bg-background/10 backdrop-blur-sm hover:bg-background/20"
            >
              Comment ça marche ?
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Festivals partenaires</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Pays couverts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">10k+</div>
              <div className="text-sm text-muted-foreground">Voyageurs satisfaits</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;