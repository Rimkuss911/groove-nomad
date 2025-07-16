import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Music, MapPin } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sophie Martin",
      age: 28,
      profession: "Designer UX",
      location: "Paris, France",
      festival: "Tomorrowland 2023",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=150&h=150&fit=crop&crop=face",
      quote: "GrooveNomad a transformé ma vision des festivals. L'IA a parfaitement cerné mes goûts et m'a proposé Tomorrowland avec un package VIP incroyable. J'ai rencontré mes DJs préférés en backstage !",
      highlights: ["VIP Experience", "Meet & Greet", "Transport Premium"]
    },
    {
      id: 2,
      name: "Marcus Johnson",
      age: 32,
      profession: "Développeur",
      location: "Londres, UK",
      festival: "Burning Man 2023",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: "Incroyable ! L'équipe a organisé un voyage sur-mesure pour Burning Man. Chaque détail était parfait, de l'hébergement glamping aux œuvres d'art. Une expérience transformante !",
      highlights: ["Glamping Luxe", "Art Tours", "Communauté Privée"]
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      age: 25,
      profession: "Photographe",
      location: "Madrid, Espagne",
      festival: "Coachella 2023",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      quote: "Grâce à GrooveNomad, j'ai vécu Coachella comme une VIP ! Les accès photo privilégiés, les masterclass avec des artistes... Tout était magique. L'IA a vraiment compris mes besoins de photographe.",
      highlights: ["Accès Photo", "Masterclass", "Networking Artists"]
    },
    {
      id: 4,
      name: "Thomas Dubois",
      age: 35,
      profession: "Chef d'entreprise",
      location: "Lyon, France",
      festival: "Ultra Miami 2023",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: "Organisation parfaite pour Ultra Miami ! L'équipe a géré mon emploi du temps chargé et créé un planning sur-mesure. Les after-parties privées étaient exceptionnelles. Service 5 étoiles !",
      highlights: ["Planning Sur-mesure", "After-parties VIP", "Concierge 24/7"]
    },
    {
      id: 5,
      name: "Luna Chen",
      age: 24,
      profession: "Étudiante",
      location: "Tokyo, Japon",
      festival: "Glastonbury 2023",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: "Première expérience festival en Europe et c'était parfait ! GrooveNomad a organisé un voyage de groupe avec d'autres fans de rock. J'ai fait des amis pour la vie et découvert des artistes incroyables !",
      highlights: ["Voyage de Groupe", "Découvertes Musicales", "Amitié Internationale"]
    },
    {
      id: 6,
      name: "Alex Thompson",
      age: 29,
      profession: "Musicien",
      location: "Melbourne, Australie",
      festival: "Rock in Rio 2023",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      quote: "En tant que musicien, je cherchais une expérience authentique. Rock in Rio était parfait ! Les sessions studio privées et les rencontres avec des producteurs brésiliens ont enrichi ma créativité.",
      highlights: ["Sessions Studio", "Networking Pro", "Immersion Culturelle"]
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Quote className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Témoignages</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ils ont vécu l'expérience
            <br />
            <span className="bg-gradient-festival bg-clip-text text-transparent">
              GrooveNomad
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez les histoires inspirantes de nos voyageurs qui ont transformé leur passion musicale en aventures inoubliables
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in-up border-border/50 bg-card/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {testimonial.highlights.map((highlight, highlightIndex) => (
                    <Badge 
                      key={highlightIndex} 
                      variant="secondary" 
                      className="text-xs bg-primary/10 text-primary border-primary/20"
                    >
                      {highlight}
                    </Badge>
                  ))}
                </div>

                {/* User Info */}
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.profession}, {testimonial.age} ans
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                      <MapPin className="w-3 h-3" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>

                {/* Festival Badge */}
                <div className="mt-4 pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2">
                    <Music className="w-4 h-4 text-secondary" />
                    <Badge className="bg-gradient-festival text-primary-foreground">
                      {testimonial.festival}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="group">
            <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
              98%
            </div>
            <div className="text-sm text-muted-foreground">Satisfaction client</div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-secondary mb-2 group-hover:scale-110 transition-transform">
              4.9/5
            </div>
            <div className="text-sm text-muted-foreground">Note moyenne</div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform">
              10k+
            </div>
            <div className="text-sm text-muted-foreground">Voyageurs heureux</div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
              150+
            </div>
            <div className="text-sm text-muted-foreground">Festivals couverts</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;