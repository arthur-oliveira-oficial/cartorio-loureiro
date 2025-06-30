import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiFacebook,
  FiInstagram,
  FiExternalLink
} from 'react-icons/fi';
import './Rodape.css';

const Rodape = () => {
  const servicos = [
    { nome: 'Escrituras Públicas', caminho: '/servicos/escrituras' },
    { nome: 'Procurações', caminho: '/servicos/procuracoes' },
    { nome: 'Reconhecimento de Firma', caminho: '/servicos/reconhecimento-firma' },
    { nome: 'Registro Civil', caminho: '/servicos/registro-civil' },
    { nome: 'Protesto de Títulos', caminho: '/servicos/protesto' },
    { nome: 'Registro de Imóveis', caminho: '/servicos/registro-imoveis' }
  ];

  const linkesRapidos = [
    { nome: 'O Cartório', caminho: '/cartorio' },
    { nome: 'Tabela de Emolumentos', caminho: '/emolumentos' },
    { nome: 'Dúvidas Frequentes', caminho: '/duvidas' },
    { nome: 'Notícias e Avisos', caminho: '/noticias' },
    { nome: 'Política de Privacidade', caminho: '/politica-privacidade' },
    { nome: 'Termos de Uso', caminho: '/termos-uso' }
  ];

  const servicosOnline = [
    { nome: 'Certidão de Registro de Imóveis', url: 'https://www.registrodeimoveis.org.br/' },
    { nome: 'Certidão de Registro Civil', url: 'https://www.registrocivil.org.br/' },
    { nome: 'Certidão Notas', url: 'https://www.e-notariado.org.br/notary' },
    { nome: 'Consulta Protesto', url: 'https://site.cenprotnacional.org.br/' }
  ];

  return (
    <footer className="rodape">
      <div className="container">
        {/* Seção principal do rodapé */}
        <div className="rodape__principal">
          <div className="rodape__grid">
            {/* Informações do Cartório */}
            <div className="rodape__coluna">
              <div className="rodape__logo">
                <img
                  src="/logo-cartorio.png"
                  alt="Cartório Loureiro"
                  className="rodape__logo-img"
                />
                <div className="rodape__logo-texto">
                  <h3 className="rodape__titulo">Cartório Loureiro</h3>
                  <span className="rodape__subtitulo">1º Ofício de Notas, Protesto e Registros</span>
                </div>
              </div>

              <div className="rodape__info">
                <p className="rodape__cnpj">CNPJ: 24.383.786/0001-13</p>
                <p className="rodape__cns">CNS: 15.834-5</p>
              </div>

              <div className="rodape__responsaveis">
                <p><strong>Tabelião Titular:</strong> Joziel Silva Wariss Loureiro</p>
                <p><strong>Tabelião Substituto:</strong> Israel Ramos de Oliveira</p>
              </div>
            </div>

            {/* Contato */}
            <div className="rodape__coluna">
              <h4 className="rodape__coluna-titulo">Contato</h4>
              <div className="rodape__contatos">
                <div className="rodape__contato-item">
                  <FiMapPin className="rodape__icone" />
                  <div>
                    <p>Av. Ville Roy, 5636 - Centro</p>
                    <p>Boa Vista - RR, 69301-000</p>
                  </div>
                </div>

                <div className="rodape__contato-item">
                  <FiPhone className="rodape__icone" />
                  <a href="tel:+5595362430500">(95) 3624-3050</a>
                </div>

                <div className="rodape__contato-item">
                  <FiMail className="rodape__icone" />
                  <a href="mailto:atendimento@cartorioloureiro.com.br">
                    atendimento@cartorioloureiro.com.br
                  </a>
                </div>

                <div className="rodape__contato-item">
                  <FiClock className="rodape__icone" />
                  <div>
                    <p>Segunda a Sexta</p>
                    <p>das 8h às 16h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Serviços */}
            <div className="rodape__coluna">
              <h4 className="rodape__coluna-titulo">Serviços</h4>
              <ul className="rodape__lista">
                {servicos.map((servico) => (
                  <li key={servico.caminho}>
                    <Link to={servico.caminho} className="rodape__link">
                      {servico.nome}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links Rápidos */}
            <div className="rodape__coluna">
              <h4 className="rodape__coluna-titulo">Links Rápidos</h4>
              <ul className="rodape__lista">
                {linkesRapidos.map((link) => (
                  <li key={link.caminho}>
                    <Link to={link.caminho} className="rodape__link">
                      {link.nome}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Serviços Online */}
            <div className="rodape__coluna">
              <h4 className="rodape__coluna-titulo">Serviços Online</h4>
              <ul className="rodape__lista">
                {servicosOnline.map((servico) => (
                  <li key={servico.url}>
                    <a
                      href={servico.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rodape__link rodape__link--externo"
                    >
                      {servico.nome}
                      <FiExternalLink size={14} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="rodape__divisor"></div>

        {/* Rodapé inferior */}
        <div className="rodape__inferior">
          <div className="rodape__inferior-conteudo">
            <div className="rodape__copyright">
              <p>© {new Date().getFullYear()} Cartório Loureiro. Todos os direitos reservados.</p>
              <p className="rodape__disclaimer">
                Este site está em conformidade com as normas do CNJ e LGPD.
              </p>
            </div>

            <div className="rodape__redes-sociais">
              <span>Siga-nos:</span>
              <div className="rodape__redes-links">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rodape__rede-social"
                  aria-label="Facebook do Cartório Loureiro"
                >
                  <FiFacebook size={20} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rodape__rede-social"
                  aria-label="Instagram do Cartório Loureiro"
                >
                  <FiInstagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Rodape;
