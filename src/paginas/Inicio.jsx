import React from 'react';
import { Link } from 'react-router-dom';
import { FiFileText, FiPhone } from 'react-icons/fi';
import HeroSection from '../componentes/ui/HeroSection';
import ServicosSection from './inicio/ServicosSection';
import ServicosOnlineSection from './inicio/ServicosOnlineSection';
import InfoSection from './inicio/InfoSection';
import NoticiasSection from './inicio/NoticiasSection';
import './Inicio.css'; /* Manter para estilos globais da página, se houver */
import './inicio/ServicosSection.css';
import './inicio/ServicosOnlineSection.css';
import './inicio/InfoSection.css';
import './inicio/NoticiasSection.css';

const Inicio = () => {
  return (
    <div className="inicio">
      <HeroSection
        titulo="Cartório Loureiro"
        subtitulo="1º Ofício de Notas, Protesto e Registros de Boa Vista/RR"
        descricao="Oferecemos serviços notariais, de registro civil e protesto de títulos com segurança, agilidade e qualidade. Mais de 30 anos servindo a comunidade de Roraima."
        botaoPrimario={{
          texto: "Nossos Serviços",
          url: "/servicos",
          icone: FiFileText
        }}
        botaoSecundario={{
          texto: "Entre em Contato",
          url: "/contato",
          icone: FiPhone
        }}
        gradiente={true}
      />

      <ServicosSection />
      <ServicosOnlineSection />
      <InfoSection />
      <NoticiasSection />
    </div>
  );
};

export default Inicio;
