
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle } from "lucide-react";

export const Contact = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento para gravação.', '_blank');
  };

  const handlePhone = () => {
    window.open('tel:+5511999999999', '_self');
  };

  const handleEmail = () => {
    window.open('mailto:contato@lmproducoes.com.br?subject=Solicitação de Orçamento', '_self');
  };

  return (
    <section id="contato" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Vamos Gravar Seu <span className="text-green-400">Projeto?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Entre em contato conosco e transforme sua ideia em uma gravação profissional. 
            Estamos prontos para atender você!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* WhatsApp */}
          <div className="text-center p-8 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors duration-200">
            <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
            <p className="text-gray-400 mb-4">Resposta rápida e atendimento personalizado</p>
            <Button 
              onClick={handleWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full w-full"
            >
              Conversar Agora
            </Button>
          </div>

          {/* Telefone */}
          <div className="text-center p-8 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors duration-200">
            <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Telefone</h3>
            <p className="text-gray-400 mb-4">Ligue diretamente para nossa equipe</p>
            <Button 
              onClick={handlePhone}
              variant="outline"
              className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-2 rounded-full w-full"
            >
              (11) 99999-9999
            </Button>
          </div>

          {/* Email */}
          <div className="text-center p-8 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors duration-200">
            <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">E-mail</h3>
            <p className="text-gray-400 mb-4">Envie detalhes do seu projeto</p>
            <Button 
              onClick={handleEmail}
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-6 py-2 rounded-full w-full"
            >
              Enviar E-mail
            </Button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-green-600 to-green-700 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Pronto para começar?</h3>
          <p className="text-lg mb-6 text-green-100">
            Solicite seu orçamento sem compromisso e descubra como podemos ajudar seu negócio.
          </p>
          <Button 
            onClick={handleWhatsApp}
            size="lg"
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-full transition-all duration-200 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Solicitar Orçamento
          </Button>
        </div>
      </div>
    </section>
  );
};
