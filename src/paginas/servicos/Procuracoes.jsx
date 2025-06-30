import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaUserTie, FaHandshake, FaFileSignature, FaShieldAlt, FaClock, FaMoneyBillWave, FaInfoCircle } from 'react-icons/fa';
import './Procuracoes.css';

const Procuracoes = () => {
  const tiposProcuracoes = [
    {
      titulo: "Procuração Ad Judicia",
      descricao: "Para representação em processos judiciais",
      icone: <FaShieldAlt />,
      poderes: "Poderes para atuar em todas as fases do processo judicial"
    },
    {
      titulo: "Procuração Ad Negotia",
      descricao: "Para atos administrativos e negócios em geral",
      icone: <FaHandshake />,
      poderes: "Poderes específicos para transações comerciais e administrativas"
    },
    {
      titulo: "Procuração para Compra e Venda",
      descricao: "Específica para transações imobiliárias",
      icone: <FaFileSignature />,
      poderes: "Poderes para comprar, vender e assinar escrituras"
    },
    {
      titulo: "Procuração Especial",
      descricao: "Para atos específicos determinados pelo outorgante",
      icone: <FaUserTie />,
      poderes: "Poderes limitados conforme especificação do outorgante"
    }
  ];

  const caracteristicas = [
    {
      titulo: "Segurança Jurídica",
      descricao: "Fé pública garantida pelo tabelião",
      icone: <FaShieldAlt />
    },
    {
      titulo: "Validade Nacional",
      descricao: "Reconhecida em todo território brasileiro",
      icone: <FaFileSignature />
    },
    {
      titulo: "Personalização",
      descricao: "Poderes específicos conforme necessidade",
      icone: <FaUserTie />
    }
  ];

  const documentosNecessarios = [
    "RG e CPF do outorgante (original)",
    "Comprovante de residência",
    "RG e CPF do procurador",
    "Certidão de casamento (se casado)",
    "Documentos específicos do ato (se houver)"
  ];

  return (
    <>
      <Helmet>
        <title>Procurações - Cartório Loureiro | 1º Ofício de Notas de Boa Vista/RR</title>
        <meta name="description" content="Procurações públicas em Boa Vista/RR. Ad judicia, ad negotia, especiais e para compra e venda com segurança jurídica garantida." />
        <meta name="keywords" content="procuração, procurações, ad judicia, ad negotia, cartório, Boa Vista, Roraima" />
        <link rel="canonical" href="https://cartorioloureiro.com.br/servicos/procuracoes" />
      </Helmet>

      <div className="procuracoes-page">
        <section className="procuracoes-hero">
          <div className="container">
            <div className="hero-content">
              <h1>
                <FaUserTie className="hero-icon" />
                Procurações Públicas
              </h1>
              <p className="hero-subtitle">
                Representação legal com segurança jurídica e fé pública
              </p>
            </div>
          </div>
        </section>

        <section className="procuracoes-intro">
          <div className="container">
            <div className="intro-content">
              <h2>O que é uma Procuração Pública?</h2>
              <p>
                A procuração pública é um documento legal que confere poderes a uma pessoa (procurador)
                para representar outra (outorgante) em atos jurídicos específicos. Lavrada por tabelião,
                possui fé pública e validade em todo território nacional.
              </p>
            </div>
          </div>
        </section>

        <section className="procuracoes-tipos">
          <div className="container">
            <h2>Tipos de Procurações</h2>
            <div className="tipos-grid">
              {tiposProcuracoes.map((tipo, index) => (
                <div key={index} className="tipo-card">
                  <div className="tipo-icon">{tipo.icone}</div>
                  <h3>{tipo.titulo}</h3>
                  <p>{tipo.descricao}</p>
                  <div className="poderes-info">
                    <strong>Poderes:</strong> {tipo.poderes}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="procuracoes-caracteristicas">
          <div className="container">
            <h2>Características das Procurações Públicas</h2>
            <div className="caracteristicas-grid">
              {caracteristicas.map((carac, index) => (
                <div key={index} className="caracteristica-card">
                  <div className="carac-icon">{carac.icone}</div>
                  <h3>{carac.titulo}</h3>
                  <p>{carac.descricao}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="procuracoes-processo">
          <div className="container">
            <div className="processo-grid">
              <div className="processo-content">
                <h2>Como Fazer uma Procuração</h2>
                <div className="processo-steps">
                  <div className="step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h3>Agendamento</h3>
                      <p>Agende um horário em nosso cartório</p>
                    </div>
                  </div>

                  <div className="step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h3>Documentação</h3>
                      <p>Traga os documentos necessários</p>
                    </div>
                  </div>

                  <div className="step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h3>Comparecimento</h3>
                      <p>O outorgante deve comparecer pessoalmente</p>
                    </div>
                  </div>

                  <div className="step">
                    <div className="step-number">4</div>
                    <div className="step-content">
                      <h3>Assinatura</h3>
                      <p>Assinatura do documento na presença do tabelião</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="documentos-necessarios">
                <h3>
                  <FaInfoCircle className="section-icon" />
                  Documentos Necessários
                </h3>
                <ul className="documentos-lista">
                  {documentosNecessarios.map((doc, index) => (
                    <li key={index}>{doc}</li>
                  ))}
                </ul>

                <div className="info-cards">
                  <div className="info-card">
                    <FaClock className="info-icon" />
                    <h4>Prazo</h4>
                    <p>No mesmo dia com agendamento prévio</p>
                  </div>

                  <div className="info-card">
                    <FaMoneyBillWave className="info-icon" />
                    <h4>Valores</h4>
                    <p>Conforme tabela de emolumentos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="procuracoes-importante">
          <div className="container">
            <div className="importante-content">
              <h2>⚠️ Informações Importantes</h2>
              <div className="importantes-grid">
                <div className="importante-item">
                  <h3>Comparecimento Pessoal</h3>
                  <p>O outorgante (quem dá a procuração) deve comparecer pessoalmente ao cartório</p>
                </div>

                <div className="importante-item">
                  <h3>Identidade do Procurador</h3>
                  <p>É necessário informar os dados completos da pessoa que receberá os poderes</p>
                </div>

                <div className="importante-item">
                  <h3>Poderes Específicos</h3>
                  <p>Os poderes devem ser claramente definidos no documento</p>
                </div>

                <div className="importante-item">
                  <h3>Validade</h3>
                  <p>A procuração pode ter prazo determinado ou indeterminado</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="procuracoes-cta">
          <div className="container">
            <div className="cta-content">
              <h2>Precisa de uma Procuração?</h2>
              <p>Nossa equipe está pronta para orientá-lo sobre o melhor tipo de procuração para sua necessidade</p>
              <div className="cta-buttons">
                <a href="/contato" className="btn btn-primary">Fale Conosco</a>
                <a href="/servicos-online" className="btn btn-secondary">Agende Online</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Procuracoes;
