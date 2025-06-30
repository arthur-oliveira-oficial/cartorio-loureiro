import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import './InfoSection.css';

const InfoSection = () => {
  return (
    <section className="secao">
      <div className="container">
        <div className="grid grid--2">
          {/* Sobre o Cartório */}
          <div className="card info-card">
            <h3 className="info-card__titulo">Sobre o Cartório Loureiro</h3>
            <p className="info-card__texto">
              Com mais de três décadas de tradição em Boa Vista/RR, o Cartório Loureiro
              é reconhecido pela excelência na prestação de serviços notariais e de registro.
              Nossa equipe especializada garante segurança jurídica e agilidade em todos os procedimentos.
            </p>
            <div className="info-card__dados">
              <div className="info-card__dado">
                <strong>CNPJ:</strong> 24.383.786/0001-13
              </div>
              <div className="info-card__dado">
                <strong>CNS:</strong> 15.834-5
              </div>
            </div>
            <Link to="/cartorio" className="botao botao-secundario">
              Conheça Nossa História
            </Link>
          </div>

          {/* Contato Rápido */}
          <div className="card info-card">
            <h3 className="info-card__titulo">Contato e Localização</h3>
            <div className="contato-rapido">
              <div className="contato-rapido__item">
                <FiMapPin className="contato-rapido__icone" />
                <div>
                  <strong>Endereço:</strong><br />
                  Av. Ville Roy, 5636 - Centro<br />
                  Boa Vista - RR, 69301-000
                </div>
              </div>

              <div className="contato-rapido__item">
                <FiPhone className="contato-rapido__icone" />
                <div>
                  <strong>Telefone:</strong><br />
                  <a href="tel:+5595362430500">(95) 3624-3050</a>
                </div>
              </div>

              <div className="contato-rapido__item">
                <FiMail className="contato-rapido__icone" />
                <div>
                  <strong>E-mail:</strong><br />
                  <a href="mailto:atendimento@cartorioloureiro.com.br">
                    atendimento@cartorioloureiro.com.br
                  </a>
                </div>
              </div>

              <div className="contato-rapido__item">
                <FiClock className="contato-rapido__icone" />
                <div>
                  <strong>Horário:</strong><br />
                  Segunda a Sexta, das 8h às 16h
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
  );
};

export default InfoSection;
