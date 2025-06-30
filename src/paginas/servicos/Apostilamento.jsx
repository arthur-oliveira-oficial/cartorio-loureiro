import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaStamp, FaGlobeAmericas, FaFileExport, FaCheckCircle } from 'react-icons/fa';
import './Apostilamento.css'; // Criaremos este arquivo a seguir

const Apostilamento = () => {
  return (
    <>
      <Helmet>
        <title>Apostilamento de Haia - Cartório Loureiro</title>
        <meta name="description" content="Apostilamento de Haia em Boa Vista/RR. Valide seus documentos brasileiros para uso no exterior com agilidade e segurança." />
      </Helmet>

      <div className="apostilamento-page">
        <section className="apostilamento-hero">
          <div className="container">
            <div className="hero-content">
              <h1>
                <FaStamp className="hero-icon" />
                Apostilamento de Haia
              </h1>
              <p className="hero-subtitle">
                Autenticidade de documentos brasileiros para uso internacional.
              </p>
            </div>
          </div>
        </section>

        <section className="container secao">
            <h2 style={{textAlign: 'center', marginBottom: '2rem'}}>Página em Construção</h2>
            <p style={{textAlign: 'center'}}>Esta seção está sendo desenvolvida e será disponibilizada em breve.</p>
        </section>
      </div>
    </>
  );
};

export default Apostilamento;
