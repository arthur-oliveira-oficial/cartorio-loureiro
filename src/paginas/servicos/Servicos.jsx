import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiFileText,
  FiUsers,
  FiShield,
  FiHome,
  FiTrendingUp,
  FiCheckCircle,
  FiBook,
  FiUserCheck,
  FiClipboard
} from 'react-icons/fi';
import HeroSection from '../../componentes/ui/HeroSection';
import CartaoServico from '../../componentes/ui/CartaoServico';

const Servicos = () => {
  const servicosNotariais = [
    {
      icone: FiFileText,
      titulo: "Escrituras Públicas",
      descricao: "Documentos oficiais para compra, venda e transferência de bens imóveis.",
      itens: [
        "Compra e venda de imóveis",
        "Doação de bens",
        "Permuta de propriedades",
        "Constituição de usufruto",
        "Constituição de servidão"
      ],
      linkUrl: "/servicos/escrituras",
      destaque: true
    },
    {
      icone: FiUsers,
      titulo: "Procurações",
      descricao: "Outorga de poderes legais para representação em diversos atos.",
      itens: [
        "Procurações para compra/venda",
        "Representação em órgãos públicos",
        "Poderes para movimentação bancária",
        "Procurações empresariais",
        "Procurações para fins específicos"
      ],
      linkUrl: "/servicos/procuracoes"
    },
    {
      icone: FiShield,
      titulo: "Reconhecimento de Firma",
      descricao: "Autenticação de assinaturas para documentos diversos.",
      itens: [
        "Reconhecimento por semelhança",
        "Reconhecimento por autenticidade",
        "Abertura de firma",
        "Encerramento de firma",
        "Alteração de dados da firma"
      ],
      linkUrl: "/servicos/reconhecimento-firma"
    },
    {
      icone: FiBook,
      titulo: "Testamentos",
      descricao: "Elaboração e registro de testamentos públicos.",
      itens: [
        "Testamento público",
        "Codicilo",
        "Revogação de testamento",
        "Alteração de testamento"
      ],
      linkUrl: "/servicos/testamentos"
    },
    {
      icone: FiUserCheck,
      titulo: "Atas Notariais",
      descricao: "Registro oficial de fatos e ocorrências.",
      itens: [
        "Ata de presença",
        "Ata de assembleia",
        "Ata de constatação",
        "Ata de notificação"
      ],
      linkUrl: "/servicos/atas-notariais"
    },
    {
      icone: FiClipboard,
      titulo: "Autenticação de Documentos",
      descricao: "Conferência e autenticação de cópias de documentos.",
      itens: [
        "Autenticação de cópias",
        "Conferência de documentos",
        "Certificação de autenticidade"
      ],
      linkUrl: "/servicos/autenticacao"
    }
  ];

  const servicosRegistro = [
    {
      icone: FiHome,
      titulo: "Registro Civil de Pessoas Naturais",
      descricao: "Registro de nascimentos, casamentos, óbitos e averbações.",
      itens: [
        "Nascimento",
        "Casamento civil",
        "Óbito",
        "Averbações (divórcio, adoção, etc.)",
        "Interdições e tutelas",
        "Emancipações"
      ],
      linkUrl: "/servicos/registro-civil"
    },
    {
      icone: FiTrendingUp,
      titulo: "Protesto de Títulos",
      descricao: "Formalização de protesto de títulos não pagos.",
      itens: [
        "Protesto de cheques",
        "Protesto de notas promissórias",
        "Protesto de duplicatas",
        "Cancelamento de protestos",
        "Desistência de protesto"
      ],
      linkUrl: "/servicos/protesto"
    },
    {
      icone: FiCheckCircle,
      titulo: "Registro de Títulos e Documentos",
      descricao: "Registro de contratos e documentos diversos.",
      itens: [
        "Contratos em geral",
        "Notificações extrajudiciais",
        "Registro de pessoa jurídica",
        "Atos constitutivos de empresas"
      ],
      linkUrl: "/servicos/registro-titulos"
    }
  ];

  const servicosCertidoes = [
    {
      icone: FiFileText,
      titulo: "Certidões de Registro Civil",
      descricao: "Emissão de certidões de nascimento, casamento e óbito.",
      itens: [
        "Certidão de nascimento",
        "Certidão de casamento",
        "Certidão de óbito",
        "Certidão de inteiro teor"
      ],
      linkUrl: "/servicos/certidoes-registro-civil"
    },
    {
      icone: FiCheckCircle,
      titulo: "Certidões de Protesto",
      descricao: "Certidões positivas e negativas de protesto.",
      itens: [
        "Certidão positiva de protesto",
        "Certidão negativa de protesto",
        "Certidão de cancelamento"
      ],
      linkUrl: "/servicos/certidoes-protesto"
    },
    {
      icone: FiBook,
      titulo: "Certidões Notariais",
      descricao: "Certidões de atos praticados no cartório de notas.",
      itens: [
        "Certidão de escritura",
        "Certidão de procuração",
        "Certidão de testamento"
      ],
      linkUrl: "/servicos/certidoes-notariais"
    }
  ];

  return (
    <div className="servicos">
      <HeroSection
        titulo="Nossos Serviços"
        subtitulo="Soluções completas em serviços notariais e de registro"
        descricao="Oferecemos uma ampla gama de serviços com segurança jurídica, agilidade e atendimento personalizado para pessoas físicas e jurídicas."
        botaoPrimario={{
          texto: "Contate-nos",
          url: "/contato",
          icone: FiUsers
        }}
        botaoSecundario={{
          texto: "Ver Emolumentos",
          url: "/emolumentos",
          icone: FiFileText
        }}
      />

      {/* Serviços Notariais */}
      <section className="secao secao--primeira">
        <div className="container">
          <h2 className="secao__titulo">Serviços Notariais</h2>
          <p className="secao__subtitulo">
            Atos notariais com fé pública, conferindo autenticidade e segurança jurídica
          </p>

          <div className="grid grid--3">
            {servicosNotariais.map((servico, index) => (
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

      {/* Serviços de Registro */}
      <section className="secao secao--destaque">
        <div className="container">
          <h2 className="secao__titulo">Serviços de Registro</h2>
          <p className="secao__subtitulo">
            Registro de pessoas naturais, protestos e títulos diversos
          </p>

          <div className="grid grid--3">
            {servicosRegistro.map((servico, index) => (
              <CartaoServico
                key={index}
                icone={servico.icone}
                titulo={servico.titulo}
                descricao={servico.descricao}
                itens={servico.itens}
                linkUrl={servico.linkUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Certidões */}
      <section className="secao">
        <div className="container">
          <h2 className="secao__titulo">Certidões</h2>
          <p className="secao__subtitulo">
            Emissão de certidões e documentos oficiais
          </p>

          <div className="grid grid--3">
            {servicosCertidoes.map((servico, index) => (
              <CartaoServico
                key={index}
                icone={servico.icone}
                titulo={servico.titulo}
                descricao={servico.descricao}
                itens={servico.itens}
                linkUrl={servico.linkUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Informações Adicionais */}
      <section className="secao">
        <div className="container">
          <div className="grid grid--2">
            <div className="card">
              <h3>Documentos Necessários</h3>
              <p>
                Para agilizar o atendimento, consulte a lista de documentos necessários
                para cada tipo de serviço em nossa seção de dúvidas frequentes.
              </p>
              <Link to="/duvidas" className="botao botao-secundario">
                Ver Documentos
              </Link>
            </div>

            <div className="card">
              <h3>Tabela de Emolumentos</h3>
              <p>
                Consulte os valores atualizados de todos os nossos serviços
                conforme a tabela oficial de emolumentos.
              </p>
              <Link to="/emolumentos" className="botao botao-secundario">
                Ver Preços
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicos;
