'use client';

import { useEffect, useRef } from 'react';
import { Building2, MapPin, Leaf, Car, Trees, Home, Mail, Phone, Linkedin, Instagram, Facebook, ChevronLeft, ChevronRight } from 'lucide-react';

export default function NoviraPlaza() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-[0.3em] text-[#1A1A1A]">
            NOVIRA PLAZA
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#projeto" className="text-sm tracking-wider text-gray-600 hover:text-[#C5A059] transition-colors">
              PROJETO
            </a>
            <a href="#localizacao" className="text-sm tracking-wider text-gray-600 hover:text-[#C5A059] transition-colors">
              LOCALIZAÇÃO
            </a>
            <a href="#especificacoes" className="text-sm tracking-wider text-gray-600 hover:text-[#C5A059] transition-colors">
              ESPECIFICAÇÕES
            </a>
            <a href="#galeria" className="text-sm tracking-wider text-gray-600 hover:text-[#C5A059] transition-colors">
              GALERIA
            </a>
            <button className="px-6 py-2 border-2 border-[#C5A059] text-[#C5A059] text-sm tracking-wider hover:bg-[#C5A059] hover:text-white transition-all duration-300">
              CONTACTO
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-[0.3em] mb-6 animate-fade-in">
            NOVIRA PLAZA
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light tracking-[0.2em] mb-12 animate-fade-in-up">
            O Novo Marco de Bucareste
          </p>
          <button className="px-10 py-4 border-2 border-white text-white text-sm tracking-[0.2em] hover:bg-white hover:text-[#1A1A1A] transition-all duration-500 animate-fade-in-up">
            DESCOBRIR O PROJETO
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Projeto Section */}
      <section id="projeto" className="py-32 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="fade-in-section space-y-8">
              <div className="w-16 h-1 bg-[#C5A059]"></div>
              <h2 className="text-5xl md:text-6xl font-bold tracking-[0.2em] text-[#1A1A1A] leading-tight">
                ARQUITETURA<br />VISIONÁRIA
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                O Novira Plaza representa o ápice da arquitetura corporativa contemporânea. 
                Projetado com os mais altos padrões de sustentabilidade e eficiência energética, 
                este empreendimento redefine o conceito de escritórios premium em Bucareste.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Cada detalhe foi meticulosamente pensado para proporcionar um ambiente de trabalho 
                que inspira inovação, produtividade e bem-estar. Certificação LEED Platinum e 
                tecnologia de ponta integram-se harmoniosamente com espaços amplos e luminosos.
              </p>
              <blockquote className="border-l-4 border-[#C5A059] pl-6 italic text-xl text-gray-700">
                "Um edifício Class A que estabelece novos padrões de excelência no mercado imobiliário corporativo."
              </blockquote>
            </div>
            
            <div className="fade-in-section">
              <div className="relative h-[600px] overflow-hidden rounded-sm shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=1200&fit=crop"
                  alt="Novira Plaza Building"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Localização Section */}
      <section id="localizacao" className="py-32 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 fade-in-section">
            <div className="w-16 h-1 bg-[#C5A059] mx-auto mb-8"></div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-[0.2em] text-white mb-6">
              CONECTIVIDADE<br />ESTRATÉGICA
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Localização privilegiada no coração de Bucareste
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="fade-in-section">
              <div className="relative h-[500px] rounded-sm overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=800&fit=crop"
                  alt="Bucharest Map"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent"></div>
              </div>
            </div>

            <div className="fade-in-section space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-[#C5A059]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C5A059] transition-colors">
                  <MapPin className="w-6 h-6 text-[#C5A059] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-wider">METRO AVIATORILOR</h3>
                  <p className="text-gray-400">3 minutos a pé</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-[#C5A059]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C5A059] transition-colors">
                  <Building2 className="w-6 h-6 text-[#C5A059] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-wider">CENTRO HISTÓRICO</h3>
                  <p className="text-gray-400">10 minutos de carro</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-[#C5A059]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C5A059] transition-colors">
                  <MapPin className="w-6 h-6 text-[#C5A059] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-wider">AEROPORTO HENRI COANDĂ</h3>
                  <p className="text-gray-400">20 minutos de carro</p>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-800">
                <p className="text-2xl font-bold text-white tracking-wider">
                  Bulevardul Aviatorilor 42-44<br />
                  <span className="text-[#C5A059]">011853 Bucareste, Roménia</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Especificações Section */}
      <section id="especificacoes" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 fade-in-section">
            <div className="w-16 h-1 bg-[#C5A059] mx-auto mb-8"></div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-[0.2em] text-[#1A1A1A] mb-6">
              ESPECIFICAÇÕES<br />TÉCNICAS
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Excelência em cada detalhe
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="fade-in-section text-center p-8 hover:bg-[#F5F5F5] transition-colors duration-300 group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#C5A059]/10 flex items-center justify-center group-hover:bg-[#C5A059] transition-colors">
                <Leaf className="w-10 h-10 text-[#C5A059] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold tracking-wider text-[#1A1A1A] mb-4">
                CERTIFICAÇÃO<br />LEED PLATINUM
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Máxima eficiência energética e sustentabilidade ambiental
              </p>
            </div>

            <div className="fade-in-section text-center p-8 hover:bg-[#F5F5F5] transition-colors duration-300 group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#C5A059]/10 flex items-center justify-center group-hover:bg-[#C5A059] transition-colors">
                <Car className="w-10 h-10 text-[#C5A059] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold tracking-wider text-[#1A1A1A] mb-4">
                ESTACIONAMENTO<br />SUBTERRÂNEO
              </h3>
              <p className="text-gray-600 leading-relaxed">
                300 lugares com sistema de gestão inteligente
              </p>
            </div>

            <div className="fade-in-section text-center p-8 hover:bg-[#F5F5F5] transition-colors duration-300 group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#C5A059]/10 flex items-center justify-center group-hover:bg-[#C5A059] transition-colors">
                <Trees className="w-10 h-10 text-[#C5A059] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold tracking-wider text-[#1A1A1A] mb-4">
                ESPAÇOS<br />VERDES
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Terraços ajardinados e áreas de convívio ao ar livre
              </p>
            </div>

            <div className="fade-in-section text-center p-8 hover:bg-[#F5F5F5] transition-colors duration-300 group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#C5A059]/10 flex items-center justify-center group-hover:bg-[#C5A059] transition-colors">
                <Home className="w-10 h-10 text-[#C5A059] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold tracking-wider text-[#1A1A1A] mb-4">
                LOBBY DE<br />PÉ-DIREITO DUPLO
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Entrada monumental com acabamentos premium
              </p>
            </div>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <div className="fade-in-section text-center p-8 bg-[#F5F5F5]">
              <div className="text-5xl font-bold text-[#C5A059] mb-2">18</div>
              <p className="text-sm tracking-widest text-gray-600">ANDARES</p>
            </div>
            <div className="fade-in-section text-center p-8 bg-[#F5F5F5]">
              <div className="text-5xl font-bold text-[#C5A059] mb-2">25.000</div>
              <p className="text-sm tracking-widest text-gray-600">M² DE ESCRITÓRIOS</p>
            </div>
            <div className="fade-in-section text-center p-8 bg-[#F5F5F5]">
              <div className="text-5xl font-bold text-[#C5A059] mb-2">CLASS A</div>
              <p className="text-sm tracking-widest text-gray-600">CERTIFICAÇÃO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria Section */}
      <section id="galeria" className="py-32 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 fade-in-section">
            <div className="w-16 h-1 bg-[#C5A059] mx-auto mb-8"></div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-[0.2em] text-white mb-6">
              GALERIA
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore os espaços do Novira Plaza
            </p>
          </div>

          <div className="fade-in-section grid md:grid-cols-3 gap-4">
            <div className="relative h-80 overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=800&fit=crop"
                alt="Office Interior"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6">
                  <p className="text-white text-lg font-bold tracking-wider">ESCRITÓRIOS OPEN-SPACE</p>
                </div>
              </div>
            </div>

            <div className="relative h-80 overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=800&fit=crop"
                alt="Meeting Room"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6">
                  <p className="text-white text-lg font-bold tracking-wider">SALAS DE REUNIÃO</p>
                </div>
              </div>
            </div>

            <div className="relative h-80 overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=800&fit=crop"
                alt="City View"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6">
                  <p className="text-white text-lg font-bold tracking-wider">VISTAS PANORÂMICAS</p>
                </div>
              </div>
            </div>

            <div className="relative h-80 overflow-hidden group md:col-span-2">
              <img 
                src="https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=1200&h=800&fit=crop"
                alt="Lobby"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6">
                  <p className="text-white text-lg font-bold tracking-wider">LOBBY PRINCIPAL</p>
                </div>
              </div>
            </div>

            <div className="relative h-80 overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=800&fit=crop"
                alt="Facade"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6">
                  <p className="text-white text-lg font-bold tracking-wider">FACHADA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold tracking-[0.3em] text-white mb-6">
                NOVIRA PLAZA
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                O novo padrão de excelência em escritórios corporativos premium.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold tracking-widest text-white mb-6">ENDEREÇO</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Bulevardul Aviatorilor 42-44<br />
                011853 Bucareste<br />
                Roménia
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold tracking-widest text-white mb-6">CONTACTOS</h4>
              <div className="space-y-3">
                <a href="mailto:info@noviraplaza.ro" className="flex items-center gap-3 text-gray-400 hover:text-[#C5A059] transition-colors text-sm">
                  <Mail className="w-4 h-4" />
                  info@noviraplaza.ro
                </a>
                <a href="tel:+40212345678" className="flex items-center gap-3 text-gray-400 hover:text-[#C5A059] transition-colors text-sm">
                  <Phone className="w-4 h-4" />
                  +40 21 234 5678
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold tracking-widest text-white mb-6">REDES SOCIAIS</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-[#C5A059] hover:bg-[#C5A059] transition-all group">
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-[#C5A059] hover:bg-[#C5A059] transition-all group">
                  <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-[#C5A059] hover:bg-[#C5A059] transition-all group">
                  <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-900 text-center">
            <p className="text-gray-600 text-xs tracking-wider">
              © 2024 NOVIRA PLAZA. TODOS OS DIREITOS RESERVADOS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
