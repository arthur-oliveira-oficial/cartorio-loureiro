import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaScroll, FaUserClock, FaBalanceScale, FaShieldAlt, FaInfoCircle } from 'react-icons/fa';
import './Testamentos.css'; // Criaremos este arquivo a seguir

const Testamentos = () => {
  return (
    <>
      <Helmet>
        <title>Testamentos - Cartório Loureiro</title>
        <meta name="description" content="Saiba como fazer seu testamento público no Cartório Loureiro. Garanta que suas vontades sejam cumpridas com segurança jurídica." />
      </Helmet>

      <div className="testamentos-page">
        <section className="testamentos-hero">
          <div className="container">
            <div className="hero-content">
              <h1>
                <FaScroll className="hero-icon" />
                Testamentos Públicos
              </h1>
              <p className="hero-subtitle">
                Planejamento sucessório com segurança e validade legal.
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

export default Testamentos;
