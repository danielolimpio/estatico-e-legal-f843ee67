import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Newspaper, 
  Search, 
  Calendar,
  Clock,
  ArrowRight,
  TrendingUp,
  Bookmark,
  Filter
} from "lucide-react";

const categories = [
  { name: "Todos", count: 0, active: true },
  { name: "Blockchain", count: 0, active: false },
  { name: "IA & Tecnologia", count: 0, active: false },
  { name: "Mercado Cripto", count: 0, active: false },
  { name: "Tutoriais", count: 0, active: false },
  { name: "Novidades", count: 0, active: false },
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Blog | Aurum Foundation - Insights sobre Blockchain e IA"
        description="Fique por dentro das últimas novidades sobre blockchain, inteligência artificial, mercado de criptomoedas e tecnologia financeira."
        canonicalUrl="https://aurumfoundation.world/blog"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Newspaper className="w-4 h-4 mr-2" />
              Blog Aurum
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Insights & <span className="text-primary">Novidades</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Explore as últimas tendências em blockchain, inteligência artificial e o futuro das finanças digitais.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input 
                placeholder="Buscar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg rounded-full border-border/50 bg-card/50 backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-y border-border/50 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
            <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={activeCategory === category.name ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.name)}
                className={`rounded-full whitespace-nowrap ${
                  activeCategory === category.name 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-primary/10"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Empty State - Waiting for Articles */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Featured Article Placeholder */}
            <Card className="mb-12 overflow-hidden border-border/50 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <TrendingUp className="w-16 h-16 text-primary/50 mx-auto mb-4" />
                    <p className="text-muted-foreground">Artigo em Destaque</p>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-primary/10 text-primary border-primary/20">
                    Em Breve
                  </Badge>
                  <h2 className="text-2xl font-bold mb-4">
                    Novos Artigos em Breve
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Estamos preparando conteúdo exclusivo sobre blockchain, IA e o futuro das finanças digitais. Fique atento!
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Em breve
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      5 min leitura
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Article Grid Placeholders */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card 
                  key={item} 
                  className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <Bookmark className="w-10 h-10 text-primary/30" />
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-3 text-xs">
                      Categoria
                    </Badge>
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                      Artigo {item}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      Conteúdo em breve. Estamos preparando artigos de qualidade para você.
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        Em breve
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Newsletter Section */}
            <Card className="mt-16 p-8 md:p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <div className="text-center max-w-xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">
                  Receba Novidades em Primeira Mão
                </h3>
                <p className="text-muted-foreground mb-6">
                  Inscreva-se para receber os melhores artigos sobre blockchain, IA e finanças digitais.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input 
                    placeholder="Seu melhor e-mail"
                    className="flex-1 rounded-full"
                  />
                  <Button className="rounded-full bg-primary hover:bg-primary/90">
                    Inscrever-se
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
