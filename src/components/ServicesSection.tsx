import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, MapPin, Calendar, Headphones, Users, Shield } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: "IA Personnalisée",
      description: "Notre intelligence artificielle analyse vos goûts musicaux, votre budget et vos préférences pour créer le voyage festival parfait.",
      features: ["Analyse des goûts musicaux", "Recommandations sur-mesure", "Optimisation automatique"]
    },
    {
      icon: MapPin,
      title: "Destinations Exclusives",
      description: "Accès privilégié à plus de 500 festivals dans le monde, des événements underground aux méga-festivals iconiques.",
      features: ["Festivals exclusifs", "Accès VIP", "Lieux secrets"]
    },
    {
      icon: Calendar,
      title: "Planification Complète",
      description: "De la réservation des billets au retour, nous nous occupons de tout : transport, hébergement, restauration et activités.",
      features: ["Transport inclus", "Hébergement premium", "Support 24/7"]
    },
    {
      icon: Headphones,
      title: "Expérience Immersive",
      description: "Rencontrez vos artistes préférés, participez à des masterclass exclusives et vivez des moments uniques en backstage.",
      features: ["Meet & Greet", "Masterclass", "Accès backstage"]
    },
    {
      icon: Users,
      title: "Communauté Exclusive",
      description: "Rejoignez une communauté de passionnés de musique et participez à des événements privés toute l'année.",
      features: ["Réseau global", "Événements privés", "Plateforme communautaire"]
    },
    {
      icon: Shield,
      title: "Assurance Voyage",
      description: "Voyagez l'esprit tranquille avec notre assurance complète et notre assistance d'urgence internationale.",
      features: ["Assurance complète", "Assistance 24/7", "Remboursement garanti"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Services Innovants</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Une technologie d'avant-garde
            <br />
            <span className="bg-gradient-festival bg-clip-text text-transparent">
              au service de votre passion
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez comment notre approche révolutionnaire transforme la façon dont vous vivez les festivals de musique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="inline-flex p-3 rounded-lg bg-gradient-festival group-hover:animate-pulse-glow">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    En savoir plus
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button variant="festival" size="lg" className="px-8 py-4 text-lg font-semibold">
            Découvrir tous nos services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;