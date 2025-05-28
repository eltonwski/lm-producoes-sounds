
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Pause, Phone } from "lucide-react";
import { useState } from "react";

export const Portfolio = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);

  const projects = [
    {
      id: "1",
      title: "Farmácia Central",
      category: "Farmácias",
      description: "Spot promocional para rede de farmácias",
      audioUrl: "#" // Placeholder for audio file
    },
    {
      id: "2",
      title: "Lojas Fashion",
      category: "Varejo",
      description: "Áudio para carro de som promocional",
      audioUrl: "#"
    },
    {
      id: "3",
      title: "AutoPeças São Paulo",
      category: "Carros de Som",
      description: "Gravação para divulgação de ofertas",
      audioUrl: "#"
    },
    {
      id: "4",
      title: "Mercado do Bairro",
      category: "Supermercados",
      description: "Chamadas internas e promoções",
      audioUrl: "#"
    },
    {
      id: "5",
      title: "Clínica Saúde+",
      category: "Saúde",
      description: "Gravação institucional e informativa",
      audioUrl: "#"
    },
    {
      id: "6",
      title: "Posto Energia",
      category: "Combustíveis",
      description: "Spot para rádio e som ambiente",
      audioUrl: "#"
    }
  ];

  const handlePlayPause = (projectId: string) => {
    if (playingId === projectId) {
      setPlayingId(null);
    } else {
      setPlayingId(projectId);
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de ouvir mais exemplos do portfólio da LM Produções.', '_blank');
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nosso <span className="text-green-600">Portfólio</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos trabalhos que realizamos para nossos clientes. 
            Cada projeto é desenvolvido com cuidado e atenção aos detalhes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                {/* Audio Player */}
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handlePlayPause(project.id)}
                      className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-colors duration-200"
                    >
                      {playingId === project.id ? (
                        <Pause className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4" />
                      )}
                    </button>
                    
                    <div className="flex-1">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`bg-green-500 h-2 rounded-full transition-all duration-300 ${
                            playingId === project.id ? 'w-1/3' : 'w-0'
                          }`}
                        ></div>
                      </div>
                    </div>
                    
                    <span className="text-sm text-gray-500">0:30</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">
            Gostaria de ouvir mais exemplos do nosso trabalho?
          </p>
          <Button 
            onClick={handleWhatsApp}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full transition-all duration-200 hover:scale-105"
          >
            <Phone className="w-5 h-5 mr-2" />
            Solicitar Mais Exemplos
          </Button>
        </div>
      </div>
    </section>
  );
};
