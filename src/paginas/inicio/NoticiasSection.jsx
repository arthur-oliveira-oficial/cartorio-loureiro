import React from 'react';
import { Link } from 'react-router-dom';
import './NoticiasSection.css';

const noticias = [
  {
    titulo: "Nova Tabela de Emolumentos 2024",
    resumo: "Confira os novos valores dos serviços notariais e de registro para o ano de 2024.",
    data: "15 de Janeiro de 2024",
    link: "/noticias/nova-tabela-emolumentos-2024"
  },
  {
    titulo: "Horário Especial de Funcionamento",
    resumo: "Informamos sobre alterações no horário de funcionamento durante o período de obras.",
    data: "08 de Janeiro de 2024",
    link: "/noticias/horario-especial-funcionamento"
  },
  {
    titulo: "Novos Serviços Digitais Disponíveis",
    resumo: "Agora você pode solicitar diversos serviços online através de nossas plataformas digitais.",
    data: "03 de Janeiro de 2024",
    link: "/noticias/novos-servicos-digitais"
  }
];

const NoticiasSection = () => {
  return (
    <section className="secao">
      <div className="container">
        <h2 className="secao__titulo">Notícias e Avisos</h2>
        <p className="secao__subtitulo">
          Fique por dentro das últimas novidades e informações importantes
        </p>

        <div className="grid grid--3">
          {noticias.map((noticia, index) => (
            <article key={index} className="card noticia-card">
              <h4 className="noticia-card__titulo">{noticia.titulo}</h4>
              <p className="noticia-card__resumo">{noticia.resumo}</p>
              <div className="noticia-card__meta">
                <span className="noticia-card__data">{noticia.data}</span>
                <Link to={noticia.link} className="noticia-card__link">
                  Leia mais
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="texto-centro mt-5">
          <Link to="/noticias" className="botao botao-secundario">
            Ver Todas as Notícias
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NoticiasSection;
