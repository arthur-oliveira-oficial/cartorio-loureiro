import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiSend,
  FiUser,
  FiMessageSquare
} from 'react-icons/fi';
import HeroSection from '../../componentes/ui/HeroSection';
import './Contato.css';

// Schema de validação do formulário
const schema = yup.object({
  nome: yup.string().required('Nome é obrigatório').min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: yup.string().required('E-mail é obrigatório').email('E-mail inválido'),
  telefone: yup.string().required('Telefone é obrigatório'),
  servico: yup.string().required('Selecione um serviço'),
  mensagem: yup.string().required('Mensagem é obrigatória').min(10, 'Mensagem deve ter pelo menos 10 caracteres')
});

const Contato = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: yupResolver(schema)
  });

  const servicos = [
    'Escrituras Públicas',
    'Procurações',
    'Reconhecimento de Firma',
    'Registro Civil',
    'Protesto de Títulos',
    'Testamentos',
    'Atas Notariais',
    'Autenticação de Documentos',
    'Certidões',
    'Outros'
  ];

  const onSubmit = async (data) => {
    try {
      // Simular envio do formulário
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log('Dados do formulário:', data);
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      reset();
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Erro ao enviar mensagem. Tente novamente.');
    }
  };

  return (
    <div className="contato">
      <HeroSection
        titulo="Entre em Contato"
        subtitulo="Estamos aqui para ajudar você"
        descricao="Tire suas dúvidas, solicite informações ou agende um atendimento. Nossa equipe está pronta para atendê-lo com toda a atenção que você merece."
      />

      <section className="secao secao--primeira">
        <div className="container">
          <div className="grid grid--2">
            {/* Informações de Contato */}
            <div className="contato-info">
              <h2>Informações de Contato</h2>
              <p className="contato-info__descricao">
                Entre em contato conosco através dos canais abaixo ou visite nosso cartório
                pessoalmente. Estamos localizados no centro de Boa Vista, com fácil acesso.
              </p>

              <div className="contato-info__lista">
                <div className="contato-info__item">
                  <div className="contato-info__icone">
                    <FiMapPin size={24} />
                  </div>
                  <div className="contato-info__detalhes">
                    <h4>Endereço</h4>
                    <p>
                      Av. Ville Roy, 5636 - Centro<br />
                      Boa Vista - RR, 69301-000
                    </p>
                  </div>
                </div>

                <div className="contato-info__item">
                  <div className="contato-info__icone">
                    <FiPhone size={24} />
                  </div>
                  <div className="contato-info__detalhes">
                    <h4>Telefone</h4>
                    <p>
                      <a href="tel:+5595362430500">(95) 3624-3050</a>
                    </p>
                  </div>
                </div>

                <div className="contato-info__item">
                  <div className="contato-info__icone">
                    <FiMail size={24} />
                  </div>
                  <div className="contato-info__detalhes">
                    <h4>E-mail</h4>
                    <p>
                      <a href="mailto:atendimento@cartorioloureiro.com.br">
                        atendimento@cartorioloureiro.com.br
                      </a>
                    </p>
                  </div>
                </div>

                <div className="contato-info__item">
                  <div className="contato-info__icone">
                    <FiClock size={24} />
                  </div>
                  <div className="contato-info__detalhes">
                    <h4>Horário de Funcionamento</h4>
                    <p>
                      Segunda a Sexta<br />
                      das 8h às 16h
                    </p>
                  </div>
                </div>
              </div>

              <div className="contato-info__observacoes">
                <h4>Observações Importantes:</h4>
                <ul>
                  <li>Atendimento por ordem de chegada</li>
                  <li>Para serviços complexos, recomenda-se agendar horário</li>
                  <li>Documentos necessários podem variar conforme o serviço</li>
                  <li>Consulte nossa seção de dúvidas frequentes</li>
                </ul>
              </div>
            </div>

            {/* Formulário de Contato */}
            <div className="contato-formulario">
              <div className="card">
                <h2>Envie sua Mensagem</h2>
                <p>
                  Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="formulario">
                  <div className="formulario__grupo">
                    <label htmlFor="nome" className="formulario__label">
                      <FiUser size={18} />
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      className={`input ${errors.nome ? 'input--erro' : ''}`}
                      placeholder="Digite seu nome completo"
                      {...register('nome')}
                    />
                    {errors.nome && (
                      <span className="formulario__erro">{errors.nome.message}</span>
                    )}
                  </div>

                  <div className="formulario__grupo">
                    <label htmlFor="email" className="formulario__label">
                      <FiMail size={18} />
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={`input ${errors.email ? 'input--erro' : ''}`}
                      placeholder="Digite seu e-mail"
                      {...register('email')}
                    />
                    {errors.email && (
                      <span className="formulario__erro">{errors.email.message}</span>
                    )}
                  </div>

                  <div className="formulario__grupo">
                    <label htmlFor="telefone" className="formulario__label">
                      <FiPhone size={18} />
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      className={`input ${errors.telefone ? 'input--erro' : ''}`}
                      placeholder="(00) 0000-0000"
                      {...register('telefone')}
                    />
                    {errors.telefone && (
                      <span className="formulario__erro">{errors.telefone.message}</span>
                    )}
                  </div>

                  <div className="formulario__grupo">
                    <label htmlFor="servico" className="formulario__label">
                      Serviço de Interesse *
                    </label>
                    <select
                      id="servico"
                      className={`select ${errors.servico ? 'input--erro' : ''}`}
                      {...register('servico')}
                    >
                      <option value="">Selecione um serviço</option>
                      {servicos.map((servico) => (
                        <option key={servico} value={servico}>
                          {servico}
                        </option>
                      ))}
                    </select>
                    {errors.servico && (
                      <span className="formulario__erro">{errors.servico.message}</span>
                    )}
                  </div>

                  <div className="formulario__grupo">
                    <label htmlFor="mensagem" className="formulario__label">
                      <FiMessageSquare size={18} />
                      Mensagem *
                    </label>
                    <textarea
                      id="mensagem"
                      className={`textarea ${errors.mensagem ? 'input--erro' : ''}`}
                      placeholder="Descreva sua solicitação ou dúvida"
                      rows="5"
                      {...register('mensagem')}
                    />
                    {errors.mensagem && (
                      <span className="formulario__erro">{errors.mensagem.message}</span>
                    )}
                  </div>

                  <div className="formulario__grupo">
                    <button
                      type="submit"
                      className="botao botao--full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Enviando...'
                      ) : (
                        <>
                          <FiSend size={18} />
                          Enviar Mensagem
                        </>
                      )}
                    </button>
                  </div>
                </form>

                <div className="formulario__observacao">
                  <p>
                    <strong>Política de Privacidade:</strong> Seus dados pessoais são tratados
                    conforme nossa política de privacidade e a Lei Geral de Proteção de Dados (LGPD).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
