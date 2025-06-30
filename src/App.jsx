import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './componentes/layout/Layout';
import Inicio from './paginas/Inicio';
import Cartorio from './paginas/Cartorio';
import Servicos from './paginas/Servicos';
import ServicosOnline from './paginas/ServicosOnline';
import DuvidasFrequentes from './paginas/DuvidasFrequentes';
import Contato from './paginas/Contato';
import Escrituras from './paginas/servicos/Escrituras';
import Procuracoes from './paginas/servicos/Procuracoes';
import Testamentos from './paginas/servicos/Testamentos';
import Apostilamento from './paginas/servicos/Apostilamento';
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
              <Route path="servicos/escrituras" element={<Escrituras />} />
              <Route path="servicos/procuracoes" element={<Procuracoes />} />
              <Route path="servicos/testamentos" element={<Testamentos />} />
              <Route path="servicos/apostilamento" element={<Apostilamento />} />
              <Route path="servicos-online" element={<ServicosOnline />} />
              <Route path="duvidas" element={<DuvidasFrequentes />} />
              <Route path="contato" element={<Contato />} />

              {/* Rota genérica para outros serviços (pode ser removida ou ajustada) */}
              <Route path="servicos/*" element={<Servicos />} />

              {/* Páginas adicionais (placeholders por enquanto) */}
              <Route path="emolumentos" element={<div className="container secao"><h1>Tabela de Emolumentos</h1><p>Página em desenvolvimento...</p></div>} />
              <Route path="noticias" element={<div className="container secao"><h1>Notícias e Avisos</h1><p>Página em desenvolvimento...</p></div>} />

              {/* Página 404 */}
              <Route path="*" element={
                <div className="container secao" style={{textAlign: 'center', padding: '4rem 0'}}>
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
