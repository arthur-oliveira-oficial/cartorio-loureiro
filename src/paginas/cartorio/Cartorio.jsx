import React from 'react';
import { FiAward, FiUsers, FiShield, FiClock, FiCheckCircle, FiHeart } from 'react-icons/fi';
import HeroSection from '../../componentes/ui/HeroSection';
import './Cartorio.css';

const Cartorio = () => {
  const valores = [
    {
      icone: FiShield,
      titulo: "Segurança Jurídica",
      descricao: "Garantimos a legalidade e autenticidade de todos os atos praticados."
    },
    {
      icone: FiClock,
      titulo: "Agilidade",
      descricao: "Processos otimizados para atender com rapidez e eficiência."
    },
    {
      icone: FiHeart,
      titulo: "Atendimento Humanizado",
      descricao: "Tratamento personalizado e respeitoso para cada cliente."
    },
    {
      icone: FiCheckCircle,
      titulo: "Excelência",
      descricao: "Comprometimento com a qualidade em todos os serviços prestados."
    }
  ];

  const diferenciais = [
    "Mais de 30 anos de experiência",
    "Equipe altamente qualificada",
    "Tecnologia de ponta",
    "Atendimento personalizado",
    "Localização privilegiada",
    "Conformidade com normas do CNJ"
  ];

  return (
    <div className="cartorio">
      <HeroSection
        titulo="Sobre o Cartório Loureiro"
        subtitulo="Tradição, Confiança e Excelência"
        descricao="Há mais de três décadas servindo a comunidade de Boa Vista e Roraima com serviços notariais e de registro de alta qualidade."
      />

      {/* História */}
      <section className="secao secao--primeira">
        <div className="container">
          <div className="grid grid--2">
            <div className="historia-texto">
              <h2>Nossa História</h2>
              <p>
                O Cartório Loureiro foi estabelecido com o objetivo de oferecer serviços
                notariais e de registro com excelência e segurança jurídica para a
                comunidade de Boa Vista e todo o estado de Roraima.
              </p>
              <p>
                Ao longo dos anos, construímos uma reputação sólida baseada na confiança,
                profissionalismo e dedicação aos nossos clientes. Nossa equipe é composta
                por profissionais experientes e altamente qualificados, sempre atualizados
                com as mais recentes normas e regulamentações.
              </p>
              <p>
                Como 1º Ofício de Notas, Protesto e Registros de Boa Vista, temos o
                compromisso de manter os mais altos padrões de qualidade e ética
                profissional em todos os nossos serviços.
              </p>
            </div>

            <div className="historia-dados">
              <div className="card">
                <h3>Dados Institucionais</h3>
                <div className="dados-grid">
                  <div className="dado-item">
                    <strong>Razão Social:</strong>
                    <span>Cartório Loureiro</span>
                  </div>
                  <div className="dado-item">
                    <strong>CNPJ:</strong>
                    <span>24.383.786/0001-13</span>
                  </div>
                  <div className="dado-item">
                    <strong>CNS:</strong>
                    <span>15.834-5</span>
                  </div>
                  <div className="dado-item">
                    <strong>Endereço:</strong>
                    <span>Av. Ville Roy, 5636 - Centro<br />Boa Vista - RR, 69301-000</span>
                  </div>
                  <div className="dado-item">
                    <strong>Telefone:</strong>
                    <span>(95) 3624-3050</span>
                  </div>
                  <div className="dado-item">
                    <strong>E-mail:</strong>
                    <span>atendimento@cartorioloureiro.com.br</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="secao secao--destaque">
        <div className="container">
          <h2 className="secao__titulo">Nossa Equipe</h2>
          <div className="grid grid--2">
            <div className="card equipe-card">
              <div className="equipe-card__header">
                <FiUsers className="equipe-card__icone" />
                <h3>Tabelião Titular</h3>
              </div>
              <div className="equipe-card__content">
                <h4>Joziel Silva Wariss Loureiro</h4>
                <p>
                  Profissional com vasta experiência em direito notarial e registral,
                  responsável pela direção e supervisão de todos os atos praticados no cartório.
                </p>
              </div>
            </div>

            <div className="card equipe-card">
              <div className="equipe-card__header">
                <FiUsers className="equipe-card__icone" />
                <h3>Tabelião Substituto</h3>
              </div>
              <div className="equipe-card__content">
                <h4>Israel Ramos de Oliveira</h4>
                <p>
                  Profissional qualificado que atua como substituto do tabelião titular,
                  garantindo a continuidade dos serviços com a mesma qualidade e segurança.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="secao">
        <div className="container">
          <h2 className="secao__titulo">Nossos Valores</h2>
          <div className="grid grid--4">
            {valores.map((valor, index) => (
              <div key={index} className="card valor-card">
                <div className="valor-card__icone">
                  <valor.icone size={32} />
                </div>
                <h4 className="valor-card__titulo">{valor.titulo}</h4>
                <p className="valor-card__descricao">{valor.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="secao secao--destaque">
        <div className="container">
          <h2 className="secao__titulo">Nossos Diferenciais</h2>
          <div className="grid grid--2">
            <div className="diferenciais-lista">
              <ul>
                {diferenciais.map((diferencial, index) => (
                  <li key={index} className="diferencial-item">
                    <FiCheckCircle className="diferencial-icone" />
                    <span>{diferencial}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="diferenciais-texto">
              <h3>Por que escolher o Cartório Loureiro?</h3>
              <p>
                Somos reconhecidos pela excelência na prestação de serviços notariais
                e de registro. Nossa experiência, aliada ao uso de tecnologia moderna
                e ao atendimento personalizado, nos torna a escolha ideal para suas
                necessidades documentais.
              </p>
              <p>
                Trabalhamos com transparência, seguindo rigorosamente todas as normas
                estabelecidas pelo Conselho Nacional de Justiça (CNJ) e mantendo nossos
                processos sempre atualizados com as mais recentes regulamentações.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Localização */}
      <section className="secao">
        <div className="container">
          <h2 className="secao__titulo">Localização</h2>
          <div className="card">
            <div className="localizacao-info">
              <h3>Endereço e Contato</h3>
              <p>
                <strong>Endereço:</strong> Av. Ville Roy, 5636 - Centro, Boa Vista - RR, 69301-000
              </p>
              <p>
                <strong>Telefone:</strong> (95) 3624-3050
              </p>
              <p>
                <strong>E-mail:</strong> atendimento@cartorioloureiro.com.br
              </p>
              <p>
                <strong>Horário de Funcionamento:</strong> Segunda a Sexta, das 8h às 16h
              </p>
            </div>

            <div className="localizacao-mapa">
              <div className="mapa-placeholder">
                <FiAward size={64} />
                <p>Localização privilegiada no centro de Boa Vista</p>
                <p>Fácil acesso por transporte público e particular</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cartorio;
