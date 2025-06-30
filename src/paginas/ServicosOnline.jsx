import React from 'react';
import { FiExternalLink, FiShield, FiClock, FiCheckCircle } from 'react-icons/fi';
import HeroSection from '../componentes/ui/HeroSection';
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
    <div className="servicos-online">
      <HeroSection
        titulo="Serviços Online"
        subtitulo="Acesse certidões e documentos oficiais pela internet"
        descricao="Através das plataformas digitais oficiais, você pode solicitar diversos tipos de certidões e documentos com segurança e praticidade."
      />

      {/* Benefícios */}
      <section className="secao secao--primeira">
        <div className="container">
          <h2 className="secao__titulo">Vantagens dos Serviços Online</h2>
          <div className="grid grid--3">
            {beneficios.map((beneficio, index) => (
              <div key={index} className="card beneficio-card">
                <div className="beneficio-card__icone">
                  <beneficio.icone size={32} />
                </div>
                <h3 className="beneficio-card__titulo">{beneficio.titulo}</h3>
                <p className="beneficio-card__descricao">{beneficio.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços por Categoria */}
      <section className="secao">
        <div className="container">
          <h2 className="secao__titulo">Plataformas Disponíveis</h2>
          <div className="servicos-categorias">
            {servicosOnline.map((categoria, index) => (
              <div key={index} className="categoria-section">
                <div className="categoria-header">
                  <h3 className="categoria-titulo">{categoria.categoria}</h3>
                  <p className="categoria-descricao">{categoria.descricao}</p>
                </div>

                <div className="servicos-grid">
                  {categoria.servicos.map((servico, servicoIndex) => (
                    <div key={servicoIndex} className="card servico-online-card">
                      <div className="servico-online-card__header">
                        <span className="servico-online-card__icone">
                          {servico.icone}
                        </span>
                        <h4 className="servico-online-card__titulo">
                          {servico.nome}
                        </h4>
                      </div>

                      <p className="servico-online-card__descricao">
                        {servico.descricao}
                      </p>

                      <a
                        href={servico.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="botao servico-online-card__link"
                      >
                        Acessar Serviço
                        <FiExternalLink size={16} />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Observações Importantes */}
      <section className="secao secao--destaque">
        <div className="container">
          <div className="card observacoes-card">
            <h2>Observações Importantes</h2>
            <div className="observacoes-lista">
              <div className="observacao-item">
                <FiShield className="observacao-icone" />
                <div>
                  <h4>Segurança</h4>
                  <p>
                    Todos os links direcionam para plataformas oficiais dos respectivos
                    órgãos. Sempre verifique a autenticidade do site antes de inserir dados pessoais.
                  </p>
                </div>
              </div>

              <div className="observacao-item">
                <FiClock className="observacao-icone" />
                <div>
                  <h4>Prazo de Entrega</h4>
                  <p>
                    Os prazos variam conforme o tipo de documento e a plataforma utilizada.
                    Consulte as informações específicas em cada serviço.
                  </p>
                </div>
              </div>

              <div className="observacao-item">
                <FiCheckCircle className="observacao-icone" />
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

      {/* Call to Action */}
      <section className="secao">
        <div className="container">
          <div className="cta-section">
            <h2>Precisa de ajuda com algum serviço?</h2>
            <p>
              Nossa equipe está disponível para orientá-lo sobre qual documento
              é necessário e como solicitá-lo através das plataformas online.
            </p>
            <div className="cta-buttons">
              <a href="/contato" className="botao">Entre em Contato</a>
              <a href="/duvidas" className="botao botao-secundario">Ver Dúvidas Frequentes</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicosOnline;
