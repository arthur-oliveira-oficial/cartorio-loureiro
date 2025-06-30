import React from 'react';
import './HeroSection.css';

const HeroSection = ({
  titulo,
  subtitulo,
  descricao,
  botaoPrimario,
  botaoSecundario,
  imagemFundo,
  gradiente = true
}) => {
  return (
    <section className={`hero ${gradiente ? 'hero--gradiente' : ''}`}>
      {imagemFundo && (
        <div className="hero__fundo">
          <img src={imagemFundo} alt="" className="hero__fundo-img" />
          <div className="hero__overlay"></div>
        </div>
      )}

      <div className="container">
        <div className="hero__conteudo">
          <div className="hero__texto">
            {titulo && (
              <h1 className="hero__titulo">{titulo}</h1>
            )}

            {subtitulo && (
              <h2 className="hero__subtitulo">{subtitulo}</h2>
            )}

            {descricao && (
              <p className="hero__descricao">{descricao}</p>
            )}

            {(botaoPrimario || botaoSecundario) && (
              <div className="hero__acoes">
                {botaoPrimario && (
                  <a
                    href={botaoPrimario.url}
                    className="botao hero__botao-primario"
                  >
                    {botaoPrimario.icone && (
                      <botaoPrimario.icone size={20} />
                    )}
                    {botaoPrimario.texto}
                  </a>
                )}

                {botaoSecundario && (
                  <a
                    href={botaoSecundario.url}
                    className="botao botao-secundario hero__botao-secundario"
                  >
                    {botaoSecundario.icone && (
                      <botaoSecundario.icone size={20} />
                    )}
                    {botaoSecundario.texto}
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
