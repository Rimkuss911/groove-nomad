import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Send, Sparkles, CheckCircle, Calendar, MapPin, Music } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    genres: "",
    dates: "",
    destination: "",
    groupSize: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Configuration Airtable - Remplacez ces valeurs par les vôtres
      const AIRTABLE_BASE_ID = "YOUR_BASE_ID"; // Remplacez par votre Base ID
      const AIRTABLE_TABLE_NAME = "FormSubmissions"; // Nom de votre table
      const AIRTABLE_API_KEY = "YOUR_API_KEY"; // Remplacez par votre API Key
      
      const airtableData = {
        fields: {
          "Nom": formData.name,
          "Email": formData.email,
          "Téléphone": formData.phone,
          "Budget": formData.budget,
          "Genres musicaux": formData.genres,
          "Dates": formData.dates,
          "Destination": formData.destination,
          "Nombre de personnes": formData.groupSize,
          "Message": formData.message,
          "Date de soumission": new Date().toISOString()
        }
      };

      await axios.post(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
        airtableData,
        {
          headers: {
            "Authorization": `Bearer ${AIRTABLE_API_KEY}`,
            "Content-Type": "application/json"
          }
        }
      );

      toast({
        title: "Demande envoyée avec succès !",
        description: "Notre IA analyse déjà vos préférences. Nous vous recontactons sous 24h.",
      });
      
      setFormData({
        name: "", email: "", phone: "", budget: "", genres: "", 
        dates: "", destination: "", groupSize: "", message: ""
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi vers Airtable:", error);
      toast({
        title: "Erreur lors de l'envoi",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Brain className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">IA Personnalisée</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Créons ensemble votre
              <br />
              <span className="bg-gradient-sunset bg-clip-text text-transparent">
                aventure musicale parfaite
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Notre IA analyse vos préférences pour vous proposer l'expérience festival idéale en moins de 24h
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Parlez-nous de vos rêves musicaux
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nom complet *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Téléphone</label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+33 6 12 34 56 78"
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Budget estimé</label>
                      <Input
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        placeholder="1000-3000€"
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Genres musicaux préférés *</label>
                    <Input
                      name="genres"
                      value={formData.genres}
                      onChange={handleChange}
                      placeholder="EDM, Rock, Pop, Hip-hop, Techno..."
                      required
                      className="bg-background/50"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Dates souhaitées</label>
                      <Input
                        name="dates"
                        value={formData.dates}
                        onChange={handleChange}
                        placeholder="Été 2024, Juillet..."
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Nombre de personnes</label>
                      <Input
                        name="groupSize"
                        value={formData.groupSize}
                        onChange={handleChange}
                        placeholder="2 personnes"
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Destination préférée (optionnel)</label>
                    <Input
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      placeholder="Europe, Asie, Amérique..."
                      className="bg-background/50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message personnalisé</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Parlez-nous de vos attentes, expériences passées, contraintes particulières..."
                      rows={4}
                      className="bg-background/50"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="festival" 
                    size="lg" 
                    className="w-full font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Brain className="w-5 h-5 animate-spin" />
                        IA en cours d'analyse...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Lancer l'analyse IA
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* AI Features */}
            <div className="space-y-6">
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary">
                      <Brain className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold">Intelligence Artificielle Avancée</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Notre IA analyse plus de 500 paramètres pour créer votre voyage parfait
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Analyse des goûts musicaux en temps réel
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Optimisation budget/expérience
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Recommandations personnalisées
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-secondary/20 bg-secondary/5">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-secondary">
                      <Calendar className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold">Réponse Rapide</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Recevez votre proposition de voyage personnalisée sous 24h
                  </p>
                  <Badge className="bg-secondary/20 text-secondary border-secondary/30">
                    ⚡ Traitement ultra-rapide
                  </Badge>
                </CardContent>
              </Card>

              <Card className="border-accent/20 bg-accent/5">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-accent">
                      <MapPin className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold">Accès Exclusif</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Bénéficiez de nos partenariats privilégiés avec les plus grands festivals
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <Badge variant="outline">VIP Access</Badge>
                    <Badge variant="outline">Early Bird</Badge>
                    <Badge variant="outline">Backstage</Badge>
                    <Badge variant="outline">Meet & Greet</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;