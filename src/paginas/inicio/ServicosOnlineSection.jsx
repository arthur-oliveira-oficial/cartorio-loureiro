import React from 'react';
import { Link } from 'react-router-dom';
import { FiExternalLink } from 'react-icons/fi';
import './ServicosOnlineSection.css';

const servicosOnline = [
  { nome: "Certidão de Registro de Imóveis", url: "https://www.registrodeimoveis.org.br/" },
  { nome: "Certidão de Registro Civil", url: "https://www.registrocivil.org.br/" },
  { nome: "Certidão Notas", url: "https://www.e-notariado.org.br/notary" },
  { nome: "Consulta Protesto", url: "https://site.cenprotnacional.org.br/" }
];

const ServicosOnlineSection = () => {
  return (
    <section className="secao secao--destaque">
      <div className="container">
        <h2 className="secao__titulo">Serviços Online</h2>
        <p className="secao__subtitulo">
          Acesse certidões e documentos oficiais através das plataformas digitais
        </p>

        <div className="servicos-online">
          {servicosOnline.map((servico, index) => (
            <a
              key={index}
              href={servico.url}
              target="_blank"
              rel="noopener noreferrer"
              className="servico-online"
            >
              <span className="servico-online__nome">{servico.nome}</span>
              <FiExternalLink className="servico-online__icone" />
            </a>
          ))}
        </div>

        <div className="texto-centro mt-5">
          <Link to="/servicos-online" className="botao botao-secundario">
            Ver Todos os Serviços Online
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicosOnlineSection;
