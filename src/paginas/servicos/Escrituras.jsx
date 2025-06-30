import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaFileContract, FaHome, FaHandshake, FaInfoCircle, FaClock, FaMoneyBillWave, FaFileAlt } from 'react-icons/fa';
import './Escrituras.css';

const Escrituras = () => {
  const tiposEscrituras = [
    {
      titulo: "Escritura de Compra e Venda",
      descricao: "Formalização da transferência de propriedade de imóveis",
      icone: <FaHome />,
      detalhes: [
        "Imóveis residenciais e comerciais",
        "Verificação de documentação",
        "Cálculo de impostos",
        "Registro no cartório de imóveis"
      ]
    },
    {
      titulo: "Escritura de Doação",
      descricao: "Transferência gratuita de bens entre familiares ou terceiros",
      icone: <FaHandshake />,
      detalhes: [
        "Doação pura e simples",
        "Doação com encargo",
        "Doação com cláusula de reversão",
        "Orientação sobre impostos"
      ]
    },
    {
      titulo: "Escritura de Permuta",
      descricao: "Troca de imóveis entre proprietários",
      icone: <FaFileContract />,
      detalhes: [
        "Avaliação dos imóveis",
        "Análise de documentação",
        "Cálculo de eventuais diferenças",
        "Formalização da troca"
      ]
    }
  ];

  const documentosNecessarios = [
    "RG e CPF das partes",
    "Comprovante de estado civil",
    "Certidão de nascimento/casamento",
    "Comprovante de residência",
    "Matrícula do imóvel",
    "IPTU quitado",
    "Certidões negativas"
  ];

  const processoEscritura = [
    {
      etapa: "1",
      titulo: "Análise Prévia",
      descricao: "Verificação da documentação e viabilidade do ato"
    },
    {
      etapa: "2",
      titulo: "Preparação",
      descricao: "Elaboração da minuta e conferência dos dados"
    },
    {
      etapa: "3",
      titulo: "Assinatura",
      descricao: "Comparecimento das partes para assinatura do documento"
    },
    {
      etapa: "4",
      titulo: "Registro",
      descricao: "Encaminhamento para registro no cartório competente"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Escrituras - Cartório Loureiro | 1º Ofício de Notas de Boa Vista/RR</title>
        <meta name="description" content="Serviços de escrituras públicas em Boa Vista/RR. Compra e venda, doação, permuta e outros atos notariais com segurança jurídica." />
        <meta name="keywords" content="escrituras, compra e venda, doação, permuta, cartório, Boa Vista, Roraima" />
        <link rel="canonical" href="https://cartorioloureiro.com.br/servicos/escrituras" />
      </Helmet>

      <div className="escrituras-page">
        <section className="escrituras-hero">
          <div className="container">
            <div className="hero-content">
              <h1>
                <FaFileContract className="hero-icon" />
                Escrituras Públicas
              </h1>
              <p className="hero-subtitle">
                Formalização de atos jurídicos com segurança e validade legal
              </p>
            </div>
          </div>
        </section>

        <section className="escrituras-tipos">
          <div className="container">
            <h2>Tipos de Escrituras</h2>
            <div className="tipos-grid">
              {tiposEscrituras.map((tipo, index) => (
                <div key={index} className="tipo-card">
                  <div className="tipo-icon">{tipo.icone}</div>
                  <h3>{tipo.titulo}</h3>
                  <p>{tipo.descricao}</p>
                  <ul className="detalhes-lista">
                    {tipo.detalhes.map((detalhe, idx) => (
                      <li key={idx}>{detalhe}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="escrituras-processo">
          <div className="container">
            <h2>Como Funciona o Processo</h2>
            <div className="processo-timeline">
              {processoEscritura.map((etapa, index) => (
                <div key={index} className="processo-item">
                  <div className="processo-numero">{etapa.etapa}</div>
                  <div className="processo-content">
                    <h3>{etapa.titulo}</h3>
                    <p>{etapa.descricao}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="escrituras-documentos">
          <div className="container">
            <div className="documentos-grid">
              <div className="documentos-content">
                <h2>
                  <FaFileAlt className="section-icon" />
                  Documentos Necessários
                </h2>
                <ul className="documentos-lista">
                  {documentosNecessarios.map((doc, index) => (
                    <li key={index}>{doc}</li>
                  ))}
                </ul>
                <div className="documentos-observacao">
                  <FaInfoCircle className="info-icon" />
                  <p>
                    <strong>Importante:</strong> A documentação pode variar conforme o tipo de escritura e particularidades do caso.
                    Entre em contato conosco para orientação específica.
                  </p>
                </div>
              </div>

              <div className="documentos-info">
                <div className="info-card">
                  <FaClock className="info-icon" />
                  <h3>Prazo de Execução</h3>
                  <p>3 a 5 dias úteis após apresentação de toda documentação</p>
                </div>

                <div className="info-card">
                  <FaMoneyBillWave className="info-icon" />
                  <h3>Valores</h3>
                  <p>Consulte nossa tabela de emolumentos ou entre em contato para orçamento</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="escrituras-cta">
          <div className="container">
            <div className="cta-content">
              <h2>Precisa de uma Escritura?</h2>
              <p>Nossa equipe especializada está pronta para orientá-lo em todo o processo</p>
              <div className="cta-buttons">
                <a href="/contato" className="btn btn-primary">Entre em Contato</a>
                <a href="/servicos-online" className="btn btn-secondary">Agende Online</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Escrituras;
