import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import './Cabecalho.css';

const Cabecalho = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Itens do menu de navegação
  const menuItems = [
    { nome: 'Início', caminho: '/' },
    { nome: 'O Cartório', caminho: '/cartorio' },
    { nome: 'Serviços', caminho: '/servicos' },
    { nome: 'Serviços Online', caminho: '/servicos-online' },
    { nome: 'Emolumentos', caminho: '/emolumentos' },
    { nome: 'Dúvidas', caminho: '/duvidas' },
    { nome: 'Notícias', caminho: '/noticias' },
    { nome: 'Contato', caminho: '/contato' }
  ];

  // Detectar scroll para efeito no cabeçalho
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar menu ao navegar
  useEffect(() => {
    setMenuAberto(false);
  }, [location]);

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className={`cabecalho ${scrolled ? 'cabecalho--scrolled' : ''}`}>
      <div className="container">
        <div className="cabecalho__conteudo">
          {/* Logo */}
          <Link to="/" className="cabecalho__logo">
            <img
              src="/logo-cartorio.png"
              alt="Cartório Loureiro - 1º Ofício de Notas, Protesto e Registros de Boa Vista/RR"
              className="cabecalho__logo-img"
            />
            <div className="cabecalho__logo-texto">
            </div>
          </Link>

          {/* Navegação Desktop */}
          <nav className="cabecalho__nav">
            <ul className="cabecalho__menu">
              {menuItems.map((item) => (
                <li key={item.caminho} className="cabecalho__menu-item">
                  <Link
                    to={item.caminho}
                    className={`cabecalho__menu-link ${
                      location.pathname === item.caminho ? 'cabecalho__menu-link--ativo' : ''
                    }`}
                  >
                    {item.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato rápido */}
          <div className="cabecalho__contato">
            <a href="tel:+5595362430500" className="cabecalho__telefone">
              <FiPhone size={18} />
              <span>(95) 3624-3050</span>
            </a>
          </div>

          {/* Botão do menu mobile */}
          <button
            className="cabecalho__menu-toggle"
            onClick={alternarMenu}
            aria-label="Alternar menu de navegação"
            aria-expanded={menuAberto}
          >
            {menuAberto ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        <nav className={`cabecalho__nav-mobile ${menuAberto ? 'cabecalho__nav-mobile--aberto' : ''}`}>
          <ul className="cabecalho__menu-mobile">
            {menuItems.map((item) => (
              <li key={item.caminho} className="cabecalho__menu-mobile-item">
                <Link
                  to={item.caminho}
                  className={`cabecalho__menu-mobile-link ${
                    location.pathname === item.caminho ? 'cabecalho__menu-mobile-link--ativo' : ''
                  }`}
                >
                  {item.nome}
                </Link>
              </li>
            ))}
            <li className="cabecalho__menu-mobile-item">
              <a href="tel:+5595362430500" className="cabecalho__menu-mobile-link">
                <FiPhone size={18} />
                <span>(95) 3624-3050</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Cabecalho;
