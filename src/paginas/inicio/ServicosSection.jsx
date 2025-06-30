import React from 'react';
import CartaoServico from '../../componentes/ui/CartaoServico';
import { FiFileText, FiUsers, FiShield, FiHome, FiTrendingUp, FiCheckCircle } from 'react-icons/fi';
import './ServicosSection.css';

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

const ServicosSection = () => {
  return (
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
  );
};

export default ServicosSection;
