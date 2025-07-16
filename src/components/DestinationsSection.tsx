import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users, Star } from "lucide-react";

const DestinationsSection = () => {
  const destinations = [
    {
      id: 1,
      name: "Tomorrowland",
      location: "Boom, Belgique",
      dates: "21-23 & 28-30 Juillet 2024",
      genre: "EDM",
      rating: 4.9,
      attendees: "180k",
      price: "À partir de 1,200€",
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=300&fit=crop",
      highlights: ["Stages iconiques", "Expérience magique", "Line-up légendaire"],
      isHot: true
    },
    {
      id: 2,
      name: "Coachella",
      location: "Indio, Californie",
      dates: "12-14 & 19-21 Avril 2024",
      genre: "Multi-genres",
      rating: 4.8,
      attendees: "250k",
      price: "À partir de 2,100€",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop",
      highlights: ["Art installations", "Célébrités", "Desert vibes"],
      isHot: true
    },
    {
      id: 3,
      name: "Glastonbury",
      location: "Somerset, Angleterre",
      dates: "26-30 Juin 2024",
      genre: "Rock/Pop",
      rating: 4.7,
      attendees: "200k",
      price: "À partir de 900€",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=500&h=300&fit=crop",
      highlights: ["Pyramid Stage", "Histoire légendaire", "Ambiance unique"],
      isHot: false
    },
    {
      id: 4,
      name: "Burning Man",
      location: "Nevada, États-Unis",
      dates: "25 Août - 2 Septembre 2024",
      genre: "Art & Musique",
      rating: 4.9,
      attendees: "80k",
      price: "À partir de 1,800€",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&h=300&fit=crop",
      highlights: ["Art radical", "Communauté", "Expérience transformante"],
      isHot: false
    },
    {
      id: 5,
      name: "Ultra Miami",
      location: "Miami, Floride",
      dates: "22-24 Mars 2024",
      genre: "EDM",
      rating: 4.6,
      attendees: "165k",
      price: "À partir de 1,500€",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&h=300&fit=crop",
      highlights: ["Main Stage épique", "Miami vibes", "After-parties légendaires"],
      isHot: true
    },
    {
      id: 6,
      name: "Rock in Rio",
      location: "Rio de Janeiro, Brésil",
      dates: "13-15 & 20-22 Septembre 2024",
      genre: "Rock/Pop",
      rating: 4.8,
      attendees: "350k",
      price: "À partir de 800€",
      image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=500&h=300&fit=crop",
      highlights: ["Énergie brésilienne", "Méga-production", "Plage de Copacabana"],
      isHot: false
    }
  ];

  return (
    <section id="destinations" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <MapPin className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Destinations Exclusives</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Les festivals les plus
            <br />
            <span className="bg-gradient-sunset bg-clip-text text-transparent">
              épiques de la planète
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez notre sélection de festivals iconiques, soigneusement choisis pour vous offrir des expériences musicales inoubliables
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card 
              key={destination.id} 
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {destination.isHot && (
                  <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground animate-pulse-glow">
                    🔥 Populaire
                  </Badge>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                  <div className="flex items-center gap-1 text-sm">
                    <MapPin className="w-3 h-3" />
                    {destination.location}
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    {destination.genre}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{destination.rating}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {destination.dates}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    {destination.attendees} participants
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight, highlightIndex) => (
                      <Badge 
                        key={highlightIndex} 
                        variant="secondary" 
                        className="text-xs bg-muted/50"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-lg font-bold text-foreground">{destination.price}</div>
                    <div className="text-xs text-muted-foreground">par personne</div>
                  </div>
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Voir le package
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="festival" size="lg" className="px-8 py-4 text-lg font-semibold">
            Explorer toutes les destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;