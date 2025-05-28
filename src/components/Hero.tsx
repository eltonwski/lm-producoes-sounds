
import { Button } from "@/components/ui/button";
import { Phone, Play } from "lucide-react";

export const Hero = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre as gravações da LM Produções.', '_blank');
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=2000&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Gravações Profissionais
          <span className="block text-green-400">para Seu Negócio</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in">
          Transformamos sua mensagem em áudio de alta qualidade. 
          Especialistas em locuções comerciais, spots publicitários e conteúdo personalizado.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button 
            onClick={handleWhatsApp}
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg rounded-full transition-all duration-200 hover:scale-105 shadow-xl"
          >
            <Phone className="w-5 h-5 mr-2" />
            Falar no WhatsApp
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 text-lg rounded-full transition-all duration-200 hover:scale-105"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Play className="w-5 h-5 mr-2" />
            Ouvir Exemplos
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
