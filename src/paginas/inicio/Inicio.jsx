import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiFileText,
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiExternalLink,
  FiUsers,
  FiShield,
  FiHome,
  FiTrendingUp,
  FiCheckCircle
} from 'react-icons/fi';
import HeroSection from '../../componentes/ui/HeroSection';
import CartaoServico from '../../componentes/ui/CartaoServico';
import './Inicio.css';

// Dados das notícias em destaque
const noticias = [
  {
    titulo: "Nova Tabela de Emolumentos 2024",
    resumo: "Confira os novos valores dos serviços notariais e de registro para o ano de 2024.",
    data: "15 de Janeiro de 2024",
    link: "/noticias/nova-tabela-emolumentos-2024"
  },
  {
    titulo: "Horário Especial de Funcionamento",
    resumo: "Informamos sobre alterações no horário de funcionamento durante o período de obras.",
    data: "08 de Janeiro de 2024",
    link: "/noticias/horario-especial-funcionamento"
  },
  {
    titulo: "Novos Serviços Digitais Disponíveis",
    resumo: "Agora você pode solicitar diversos serviços online através de nossas plataformas digitais.",
    data: "03 de Janeiro de 2024",
    link: "/noticias/novos-servicos-digitais"
  }
];

// Links para serviços online externos
const servicosOnline = [
  { nome: "Certidão de Registro de Imóveis", url: "https://www.registrodeimoveis.org.br/" },
  { nome: "Certidão de Registro Civil", url: "https://www.registrocivil.org.br/" },
  { nome: "Certidão Notas", url: "https://www.e-notariado.org.br/notary" },
  { nome: "Consulta Protesto", url: "https://site.cenprotnacional.org.br/" }
];

// Configuração dos principais serviços oferecidos
const servicos = [
  {
    icone: FiFileText,
    titulo: "Escrituras Públicas",
    descricao: "Documentos oficiais para compra, venda e transferência de bens imóveis com total segurança jurídica.",
    itens: [
      "Compra e venda de imóveis",
      "Doação de bens",
      "Permuta de propriedades",
      "Constituição de usufruto"
    ],
    linkUrl: "/servicos/escrituras",
    destaque: true
  },
  {
    icone: FiUsers,
    titulo: "Procurações",
    descricao: "Outorga de poderes legais para representação em diversos atos jurídicos e comerciais.",
    itens: [
      "Procurações para compra/venda",
      "Representação em órgãos públicos",
      "Poderes para movimentação bancária",
      "Procurações empresariais"
    ],
    linkUrl: "/servicos/procuracoes"
  },
  {
    icone: FiShield,
    titulo: "Reconhecimento de Firma",
    descricao: "Autenticação de assinaturas para documentos diversos com validade legal.",
    itens: [
      "Reconhecimento por semelhança",
      "Reconhecimento por autenticidade",
      "Abertura de firma",
      "Encerramento de firma"
    ],
    linkUrl: "/servicos/reconhecimento-firma"
  },
  {
    icone: FiHome,
    titulo: "Registro Civil",
    descricao: "Registro de nascimentos, casamentos, óbitos e demais atos do estado civil.",
    itens: [
      "Nascimento",
      "Casamento civil",
      "Óbito",
      "Averbações diversas"
    ],
    linkUrl: "/servicos/registro-civil"
  },
  {
    icone: FiTrendingUp,
    titulo: "Protesto de Títulos",
    descricao: "Formalização de protesto de títulos não pagos e cancelamento de protestos.",
    itens: [
      "Protesto de cheques",
      "Protesto de notas promissórias",
      "Protesto de duplicatas",
      "Cancelamento de protestos"
    ],
    linkUrl: "/servicos/protesto"
  },
  {
    icone: FiCheckCircle,
    titulo: "Certidões Diversas",
    descricao: "Emissão de certidões e documentos oficiais para diversos fins.",
    itens: [
      "Certidões de nascimento",
      "Certidões de casamento",
      "Certidões de óbito",
      "Certidões de protestos"
    ],
    linkUrl: "/servicos/certidoes"
  }
];

const Inicio = () => {
  return (
    <div className="inicio">
      {/* Seção Hero - Banner principal */}
      <HeroSection
        titulo="Cartório Loureiro"
        subtitulo="1º Ofício de Notas, Protesto e Registros de Boa Vista/RR"
        descricao="Oferecemos serviços notariais, de registro civil e protesto de títulos com segurança, agilidade e qualidade. Mais de 30 anos servindo a comunidade de Roraima."
        botaoPrimario={{
          texto: "Nossos Serviços",
          url: "/servicos",
          icone: FiFileText
        }}
        botaoSecundario={{
          texto: "Entre em Contato",
          url: "/contato",
          icone: FiPhone
        }}
        gradiente={true}
      />

      {/* Seção de Serviços Principais */}
      <section className="secao secao--primeira">
        <div className="container">
          <h2 className="secao__titulo">Nossos Serviços</h2>
          <p className="secao__subtitulo">
            Prestamos serviços notariais e de registro com excelência, segurança e agilidade
          </p>

          <div className="grid grid--3">
            {servicos.map((servico, index) => (
              <CartaoServico
                key={index}
                icone={servico.icone}
                titulo={servico.titulo}
                descricao={servico.descricao}
                itens={servico.itens}
                linkUrl={servico.linkUrl}
                destaque={servico.destaque}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Serviços Online */}
      <section className="secao secao--destaque">
        <div className="container">
          <h2 className="secao__titulo">Serviços Online</h2>
          <p className="secao__subtitulo">
            Acesse certidões e documentos oficiais através das plataformas digitais
          </p>

          <div className="servicos-online">
            {servicosOnline.map((servico, index) => (
              <a
                key={index}
                href={servico.url}
                target="_blank"
                rel="noopener noreferrer"
                className="servico-online"
              >
                <span className="servico-online__nome">{servico.nome}</span>
                <FiExternalLink className="servico-online__icone" />
              </a>
            ))}
          </div>

          <div className="texto-centro mt-5">
            <Link to="/servicos-online" className="botao botao-secundario">
              Ver Todos os Serviços Online
            </Link>
          </div>
        </div>
      </section>

      {/* Seção de Informações Institucionais */}
      <section className="secao">
        <div className="container">
          <h2 className="secao__titulo">Sobre e Contato</h2>
          <p className="secao__subtitulo">
            Informações essenciais sobre o Cartório Loureiro e como nos contatar
          </p>
          <div className="grid grid--2">
            {/* Card 1: Sobre o Cartório Loureiro */}
            <div className="card info-card info-card--destaque">
              <h3 className="info-card__titulo">Sobre o Cartório Loureiro</h3>

              <p className="info-card__texto">
                Com mais de três décadas de tradição em Boa Vista/RR, o Cartório Loureiro é
                reconhecido pela excelência na prestação de serviços notariais e de registro.
                Nossa equipe especializada garante segurança jurídica e agilidade em todos os
                procedimentos.
              </p>

              <div className="info-card__dados">
                <div className="info-card__dado">
                  <strong>CNPJ</strong> 24.383.786/0001-13
                </div>
                <div className="info-card__dado">
                  <strong>CNS</strong> 15.834-5
                </div>
              </div>

              <Link to="/cartorio" className="botao botao-secundario">
                Conheça Nossa História
              </Link>
            </div>

            {/* Card 2: Contato e Localização */}
            <div className="card info-card">
              <h3 className="info-card__titulo">Contato e Localização</h3>

              <div className="contato-rapido">
                {/* Endereço */}
                <div className="contato-rapido__item">
                  <FiMapPin className="contato-rapido__icone" />
                  <div>
                    <strong>Endereço:</strong><br />
                    Av. Ville Roy, 5636 - Centro<br />
                    Boa Vista - RR, CEP 69301-000
                  </div>
                </div>

                {/* Telefone */}
                <div className="contato-rapido__item">
                  <FiPhone className="contato-rapido__icone" />
                  <div>
                    <strong>Telefone:</strong><br />
                    <a href="tel:+5595362430500">(95) 3624-3050</a>
                  </div>
                </div>

                {/* E-mail */}
                <div className="contato-rapido__item">
                  <FiMail className="contato-rapido__icone" />
                  <div>
                    <strong>E-mail:</strong><br />
                    <a href="mailto:atendimento@cartorioloureiro.com.br">
                      atendimento@cartorioloureiro.com.br
                    </a>
                  </div>
                </div>

                {/* Horário de Funcionamento */}
                <div className="contato-rapido__item">
                  <FiClock className="contato-rapido__icone" />
                  <div>
                    <strong>Horário de Funcionamento:</strong><br />
                    Segunda a Sexta-feira das 8h às 16h
                  </div>
                </div>
              </div>

              <Link to="/contato" className="botao">
                <FiMail size={18} />
                Enviar Mensagem
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Notícias e Avisos */}
      <section className="secao">
        <div className="container">
          <h2 className="secao__titulo">Notícias e Avisos</h2>
          <p className="secao__subtitulo">
            Fique por dentro das últimas novidades e informações importantes
          </p>

          <div className="grid grid--3">
            {noticias.map((noticia, index) => (
              <article key={index} className="card noticia-card">
                <h4 className="noticia-card__titulo">{noticia.titulo}</h4>
                <p className="noticia-card__resumo">{noticia.resumo}</p>
                <div className="noticia-card__meta">
                  <span className="noticia-card__data">{noticia.data}</span>
                  <Link to={noticia.link} className="noticia-card__link">
                    Leia mais
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="texto-centro mt-5">
            <Link to="/noticias" className="botao botao-secundario">
              Ver Todas as Notícias
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
