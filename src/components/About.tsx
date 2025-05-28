
import { Award, Clock, Headphones, Users } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Headphones,
      title: "Qualidade Sonora",
      description: "Equipamentos profissionais e tratamento acústico para máxima qualidade"
    },
    {
      icon: Clock,
      title: "Entrega Rápida",
      description: "Prazos curtos sem comprometer a qualidade do resultado final"
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description: "Cada projeto é único e recebe atenção especializada"
    },
    {
      icon: Award,
      title: "Experiência Comprovada",
      description: "Anos de experiência atendendo diversos segmentos do mercado"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80"
              alt="Estúdio LM Produções"
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent rounded-lg"></div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Sobre a <span className="text-green-600">LM Produções</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Com anos de experiência no mercado de áudio, a LM Produções se consolidou como 
              referência em gravações comerciais profissionais. Nossa equipe especializada 
              trabalha com equipamentos de última geração para garantir a máxima qualidade 
              em cada projeto.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Atendemos diversos segmentos como lojas, farmácias, carros de som, empresas 
              e muito mais. Nosso compromisso é entregar resultados excepcionais em prazos 
              que atendem às necessidades urgentes do seu negócio.
            </p>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <feature.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
