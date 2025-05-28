
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre as gravações da LM Produções.', '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">LM</span>
            </div>
            <span className="text-xl font-bold text-gray-800">LM Produções</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
            >
              Portfólio
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
            >
              Fale Conosco
            </button>
          </nav>

          <Button 
            onClick={handleWhatsApp}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition-all duration-200 hover:scale-105 shadow-lg"
          >
            <Phone className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
        </div>
      </div>
    </header>
  );
};
