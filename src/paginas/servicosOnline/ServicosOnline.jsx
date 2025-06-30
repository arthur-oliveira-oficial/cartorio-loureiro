import React from 'react';
import { FiExternalLink, FiShield, FiClock, FiCheckCircle } from 'react-icons/fi';
import HeroSection from '../../componentes/ui/HeroSection';
import './ServicosOnline.css';

const ServicosOnline = () => {
  const servicosOnline = [
    {
      categoria: "Certidões de Registro Civil",
      descricao: "Solicite certidões de nascimento, casamento e óbito online",
      servicos: [
        {
          nome: "Certidão de Nascimento",
          descricao: "Primeira e segunda via de certidão de nascimento",
          url: "https://www.registrocivil.org.br/",
          icone: "📋"
        },
        {
          nome: "Certidão de Casamento",
          descricao: "Primeira e segunda via de certidão de casamento",
          url: "https://www.registrocivil.org.br/",
          icone: "💍"
        },
        {
          nome: "Certidão de Óbito",
          descricao: "Primeira e segunda via de certidão de óbito",
          url: "https://www.registrocivil.org.br/",
          icone: "🕊️"
        }
      ]
    },
    {
      categoria: "Registro de Imóveis",
      descricao: "Certidões e consultas relacionadas a imóveis",
      servicos: [
        {
          nome: "Certidão de Registro de Imóveis",
          descricao: "Certidão atualizada de registro de imóveis",
          url: "https://www.registrodeimoveis.org.br/",
          icone: "🏠"
        },
        {
          nome: "Certidão de Ônus Reais",
          descricao: "Informações sobre ônus e gravames do imóvel",
          url: "https://www.registrodeimoveis.org.br/",
          icone: "📊"
        }
      ]
    },
    {
      categoria: "Serviços Notariais",
      descricao: "Certidões e consultas de atos notariais",
      servicos: [
        {
          nome: "Certidão de Escrituras",
          descricao: "Certidões de escrituras públicas lavradas",
          url: "https://www.e-notariado.org.br/notary",
          icone: "📄"
        },
        {
          nome: "Certidão de Procurações",
          descricao: "Certidões de procurações outorgadas",
          url: "https://www.e-notariado.org.br/notary",
          icone: "⚖️"
        }
      ]
    },
    {
      categoria: "Protestos",
      descricao: "Consultas e certidões relacionadas a protestos",
      servicos: [
        {
          nome: "Consulta de Protesto",
          descricao: "Consulte protestos em nome de pessoa física ou jurídica",
          url: "https://site.cenprotnacional.org.br/",
          icone: "🔍"
        },
        {
          nome: "Certidão de Protesto",
          descricao: "Certidões positivas e negativas de protesto",
          url: "https://site.cenprotnacional.org.br/",
          icone: "📋"
        }
      ]
    },
    {
      categoria: "Outros Serviços",
      descricao: "Serviços diversos e consultas especiais",
      servicos: [
        {
          nome: "Consulta de Testamento",
          descricao: "Consulte se há testamento registrado",
          url: "https://buscatestamento.org.br/",
          icone: "📜"
        },
        {
          nome: "Certidão de Selo Digital",
          descricao: "Consulte e valide selos digitais",
          url: "https://cidadao.portalselorr.com.br/#/",
          icone: "🔒"
        },
        {
          nome: "Registro de Títulos e Documentos",
          descricao: "Consultas do registro de títulos e documentos",
          url: "https://www.rtdbrasil.org.br/",
          icone: "📑"
        }
      ]
    }
  ];

  const beneficios = [
    {
      icone: FiClock,
      titulo: "Disponível 24h",
      descricao: "Acesso aos serviços a qualquer hora do dia"
    },
    {
      icone: FiShield,
      titulo: "Segurança",
      descricao: "Plataformas oficiais com certificação digital"
    },
    {
      icone: FiCheckCircle,
      titulo: "Praticidade",
      descricao: "Solicite documentos sem sair de casa"
    }
  ];

  return (
    <div className="servicos-online-page">
      <HeroSection
        titulo="Serviços Online"
        subtitulo="Acesse certidões e documentos oficiais pela internet"
        descricao="Através das plataformas digitais oficiais, você pode solicitar diversos tipos de certidões e documentos com segurança e praticidade."
      />

      <section className="section section--benefits">
        <div className="container">
          <h2 className="section__title">Vantagens dos Serviços Online</h2>
          <div className="benefits-grid">
            {beneficios.map((beneficio, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-card__icon">
                  <beneficio.icone size={32} />
                </div>
                <h3 className="benefit-card__title">{beneficio.titulo}</h3>
                <p className="benefit-card__description">{beneficio.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--categories">
        <div className="container">
          <h2 className="section__title">Plataformas Disponíveis</h2>
          <div className="service-categories">
            {servicosOnline.map((categoria, index) => (
              <div key={index} className="category-section">
                <div className="category-header">
                  <h3 className="category-title">{categoria.categoria}</h3>
                  <p className="category-description">{categoria.descricao}</p>
                </div>

                <div className="services-grid">
                  {categoria.servicos.map((servico, servicoIndex) => (
                    <div key={servicoIndex} className="service-card">
                      <div className="service-card__header">
                        <span className="service-card__icon">
                          {servico.icone}
                        </span>
                        <h4 className="service-card__title">
                          {servico.nome}
                        </h4>
                      </div>

                      <p className="service-card__description">
                        {servico.descricao}
                      </p>

                      <a
                        href={servico.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button service-card__link"
                        aria-label={`Acessar serviço externo: ${servico.nome}`}
                      >
                        Acessar Serviço
                        <FiExternalLink size={16} style={{ marginLeft: 4 }} />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--important-notes">
        <div className="container">
          <div className="notes-card">
            <h2>Observações Importantes</h2>
            <div className="notes-list">
              <div className="note-item">
                <FiShield className="note-icon" size={24} />
                <div>
                  <h4>Segurança</h4>
                  <p>
                    Todos os links direcionam para plataformas oficiais dos respectivos
                    órgãos. Sempre verifique a autenticidade do site antes de inserir dados pessoais.
                  </p>
                </div>
              </div>

              <div className="note-item">
                <FiClock className="note-icon" size={24} />
                <div>
                  <h4>Prazo de Entrega</h4>
                  <p>
                    Os prazos variam conforme o tipo de documento e a plataforma utilizada.
                    Consulte as informações específicas em cada serviço.
                  </p>
                </div>
              </div>

              <div className="note-item">
                <FiCheckCircle className="note-icon" size={24} />
                <div>
                  <h4>Dúvidas</h4>
                  <p>
                    Para esclarecimentos sobre documentos específicos ou procedimentos,
                    entre em contato conosco pelos canais tradicionais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cta">
        <div className="container">
          <div className="cta-content">
            <h2>Precisa de ajuda com algum serviço?</h2>
            <p>
              Nossa equipe está disponível para orientá-lo sobre qual documento
              é necessário e como solicitá-lo através das plataformas online.
            </p>
            <div className="cta-buttons">
              <a href="/contato" className="button" aria-label="Ir para página de contato">Entre em Contato</a>
              <a href="/duvidas" className="button button--secondary" aria-label="Ver dúvidas frequentes">Ver Dúvidas Frequentes</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicosOnline;
