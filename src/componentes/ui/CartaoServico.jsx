import React from 'react';
import './CartaoServico.css';

const CartaoServico = ({
  icone: Icone,
  titulo,
  descricao,
  itens = [],
  linkTexto = "Saiba mais",
  linkUrl = "#",
  destaque = false
}) => {
  return (
    <div className={`cartao-servico ${destaque ? 'cartao-servico--destaque' : ''}`}>
      <div className="cartao-servico__cabecalho">
        {Icone && (
          <div className="cartao-servico__icone">
            <Icone size={32} />
          </div>
        )}
        <h3 className="cartao-servico__titulo">{titulo}</h3>
      </div>

      <div className="cartao-servico__conteudo">
        <p className="cartao-servico__descricao">{descricao}</p>

        {itens.length > 0 && (
          <ul className="cartao-servico__lista">
            {itens.map((item, index) => (
              <li key={index} className="cartao-servico__item">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="cartao-servico__rodape">
        <a href={linkUrl} className="cartao-servico__link">
          {linkTexto}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default CartaoServico;
