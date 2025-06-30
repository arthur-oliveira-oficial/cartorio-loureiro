import React from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Cabecalho from './Cabecalho';
import Rodape from './Rodape';
import './Layout.css';

const Layout = ({
  titulo = 'Cartório Loureiro',
  descricao = 'Cartório Loureiro - 1º Ofício de Notas, Protesto e Registros de Boa Vista/RR. Serviços notariais, registros civis, protestos de títulos e muito mais.',
  palavrasChave = 'cartório, notas, protesto, registro civil, Boa Vista, Roraima, escrituras, procurações, certidões'
}) => {
  return (
    <>
      <Helmet>
        <title>{titulo}</title>
        <meta name="description" content={descricao} />
        <meta name="keywords" content={palavrasChave} />
        <meta name="author" content="Cartório Loureiro" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={titulo} />
        <meta property="og:description" content={descricao} />
        <meta property="og:site_name" content="Cartório Loureiro" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={titulo} />
        <meta name="twitter:description" content={descricao} />

        {/* Estruturação de dados JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NotaryPublic",
            "name": "Cartório Loureiro - 1º Ofício de Notas, Protesto e Registros",
            "description": "Cartório oficial em Boa Vista/RR oferecendo serviços notariais, registros civis e protestos de títulos",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Av. Ville Roy, 5636",
              "addressLocality": "Boa Vista",
              "addressRegion": "RR",
              "postalCode": "69301-000",
              "addressCountry": "BR"
            },
            "telephone": "+55-95-3624-3050",
            "email": "atendimento@cartorioloureiro.com.br",
            "openingHours": "Mo-Fr 08:00-16:00",
            "sameAs": [
              "https://www.facebook.com/cartorioloureiro",
              "https://www.instagram.com/cartorioloureiro"
            ]
          })}
        </script>
      </Helmet>

      <div className="layout">
        <Cabecalho />

        <main className="layout__main">
          <Outlet />
        </main>

        <Rodape />
      </div>
    </>
  );
};

export default Layout;
