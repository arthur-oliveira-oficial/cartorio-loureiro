import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './componentes/layout/Layout';
import Inicio from './paginas/Inicio';
import Cartorio from './paginas/Cartorio';
import Servicos from './paginas/Servicos';
import Contato from './paginas/Contato';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Inicio />} />
              <Route path="cartorio" element={<Cartorio />} />
              <Route path="servicos" element={<Servicos />} />
              <Route path="contato" element={<Contato />} />

              {/* Páginas de serviços específicos (serão criadas posteriormente) */}
              <Route path="servicos/*" element={<Servicos />} />

              {/* Páginas adicionais (placeholders por enquanto) */}
              <Route path="servicos-online" element={<div className="container"><h1>Serviços Online</h1><p>Página em desenvolvimento...</p></div>} />
              <Route path="emolumentos" element={<div className="container"><h1>Tabela de Emolumentos</h1><p>Página em desenvolvimento...</p></div>} />
              <Route path="duvidas" element={<div className="container"><h1>Dúvidas Frequentes</h1><p>Página em desenvolvimento...</p></div>} />
              <Route path="noticias" element={<div className="container"><h1>Notícias e Avisos</h1><p>Página em desenvolvimento...</p></div>} />

              {/* Página 404 */}
              <Route path="*" element={
                <div className="container" style={{textAlign: 'center', padding: '4rem 0'}}>
                  <h1>Página não encontrada</h1>
                  <p>A página que você está procurando não existe.</p>
                  <a href="/" className="botao">Voltar ao Início</a>
                </div>
              } />
            </Route>
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
