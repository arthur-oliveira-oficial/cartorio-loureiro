import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiHelpCircle, FiFileText, FiClock, FiDollarSign } from 'react-icons/fi';
import HeroSection from '../componentes/ui/HeroSection';
import './DuvidasFrequentes.css';

const DuvidasFrequentes = () => {
  const [expandido, setExpandido] = useState({});

  const toggleExpansao = (id) => {
    setExpandido(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const categorias = [
    {
      titulo: "Documentos Necessários",
      icone: FiFileText,
      duvidas: [
        {
          id: "doc-escritura",
          pergunta: "Quais documentos preciso para fazer uma escritura de compra e venda?",
          resposta: `Para escritura de compra e venda de imóvel, você precisará de:

          **Do Vendedor:**
          • RG e CPF (originais e cópias)
          • Certidão de casamento ou nascimento
          • Escritura anterior ou registro do imóvel
          • Certidão negativa de débitos do IPTU
          • Certidão negativa de débitos estaduais

          **Do Comprador:**
          • RG e CPF (originais e cópias)
          • Certidão de casamento ou nascimento
          • Comprovante de renda (se financiado)

          **Outros:**
          • Matrícula atualizada do imóvel (emitida há no máximo 30 dias)`
        },
        {
          id: "doc-procuracao",
          pergunta: "O que é necessário para fazer uma procuração?",
          resposta: `Para elaboração de procuração pública, são necessários:

          **Do Outorgante (quem dá o poder):**
          • RG e CPF (originais e cópias)
          • Certidão de nascimento ou casamento

          **Do Outorgado (quem recebe o poder):**
          • Nome completo
          • RG e CPF
          • Endereço completo

          **Observações:**
          • É necessário especificar claramente quais poderes estão sendo outorgados
          • O outorgante deve comparecer pessoalmente ao cartório`
        },
        {
          id: "doc-reconhecimento",
          pergunta: "Como funciona o reconhecimento de firma?",
          resposta: `O reconhecimento de firma pode ser feito de duas formas:

          **Por Semelhança:**
          • Apenas apresentação do documento a ser reconhecido
          • Comparação com ficha de firma cadastrada no cartório
          • Mais rápido e econômico

          **Por Autenticidade:**
          • Pessoa deve comparecer pessoalmente ao cartório
          • Assinar na presença do escrevente
          • Maior segurança jurídica

          **Para cadastrar firma:**
          • RG e CPF originais
          • Assinatura em ficha própria do cartório`
        }
      ]
    },
    {
      titulo: "Prazos e Procedimentos",
      icone: FiClock,
      duvidas: [
        {
          id: "prazo-escritura",
          pergunta: "Qual o prazo para elaboração de uma escritura?",
          resposta: `Os prazos variam conforme o tipo e complexidade do documento:

          **Escrituras simples:** 3 a 5 dias úteis
          **Escrituras complexas:** 7 a 10 dias úteis
          **Casos urgentes:** Podem ser priorizados mediante taxa adicional

          **Fatores que influenciam o prazo:**
          • Complexidade do documento
          • Necessidade de consultas adicionais
          • Volume de trabalho do cartório
          • Completude da documentação apresentada`
        },
        {
          id: "prazo-certidao",
          pergunta: "Quanto tempo demora para emitir uma certidão?",
          resposta: `**Certidões de registro civil:** Até 48 horas
          **Certidões de protesto:** Até 24 horas
          **Certidões notariais:** 1 a 3 dias úteis
          **Certidões com buscas especiais:** 3 a 5 dias úteis

          **Certidões urgentes:** Podem ser emitidas no mesmo dia mediante taxa adicional de urgência.`
        },
        {
          id: "horario-funcionamento",
          pergunta: "Qual o horário de funcionamento do cartório?",
          resposta: `**Horário normal:**
          Segunda a Sexta: 8h às 16h

          **Observações:**
          • Não funcionamos aos sábados, domingos e feriados
          • Atendimento por ordem de chegada
          • Recomenda-se chegar com antecedência para procedimentos complexos
          • Alguns serviços podem ter horários específicos para atendimento`
        }
      ]
    },
    {
      título: "Custos e Pagamentos",
      icone: FiDollarSign,
      duvidas: [
        {
          id: "custo-escritura",
          pergunta: "Como é calculado o valor de uma escritura?",
          resposta: `O valor da escritura é calculado com base na **Tabela de Emolumentos** oficial, considerando:

          **Valor do imóvel/negócio:**
          • Faixas de valores progressivos
          • Percentual sobre o valor declarado

          **Tipos de atos:**
          • Compra e venda
          • Doação
          • Permuta
          • Outros atos

          **Taxas adicionais:**
          • Certidões necessárias
          • Buscas em cartórios
          • Selo e registros obrigatórios

          Para valores exatos, consulte nossa tabela de emolumentos atualizada.`
        },
        {
          id: "formas-pagamento",
          pergunta: "Quais as formas de pagamento aceitas?",
          resposta: `Aceitamos as seguintes formas de pagamento:

          **À vista:**
          • Dinheiro
          • PIX
          • Cartão de débito
          • Cartão de crédito (à vista)

          **Parcelado:**
          • Cartão de crédito (até 12x para valores acima de R$ 1.000)

          **Observações:**
          • Pagamento deve ser efetuado antes da entrega do documento
          • Para valores altos, preferencial PIX ou transferência bancária`
        },
        {
          id: "desconto-estudante",
          pergunta: "Existe desconto para estudantes ou idosos?",
          resposta: `**Descontos disponíveis:**

          **Estudantes:** 50% de desconto em certidões mediante apresentação de:
          • Carteira de estudante válida
          • Declaração da instituição de ensino

          **Idosos (60+ anos):** 50% de desconto em certidões mediante apresentação de:
          • RG que comprove a idade

          **Pessoas de baixa renda:**
          • Isenção total mediante comprovação de hipossuficiência
          • Declaração de imposto de renda ou ausência de renda

          Os descontos não se aplicam a escrituras e atos notariais complexos.`
        }
      ]
    },
    {
      titulo: "Serviços Gerais",
      icone: FiHelpCircle,
      duvidas: [
        {
          id: "diferenca-autenticacao",
          pergunta: "Qual a diferença entre autenticação e reconhecimento de firma?",
          resposta: `**Autenticação de Cópia:**
          • Certifica que a cópia confere com o original
          • Original deve ser apresentado junto com a cópia
          • Garante que a reprodução é fiel ao documento original

          **Reconhecimento de Firma:**
          • Certifica a autenticidade da assinatura
          • Confirma que quem assinou é realmente a pessoa
          • Pode ser por semelhança ou por autenticidade

          **Quando usar cada um:**
          • Autenticação: Para comprovar veracidade de documentos
          • Reconhecimento: Para validar assinaturas em contratos e documentos`
        },
        {
          id: "procuracao-exterior",
          pergunta: "Como fazer procuração para o exterior?",
          resposta: `Para procuração com validade no exterior:

          **Documentos necessários:**
          • Mesmos documentos da procuração nacional
          • Especificar o país de destino
          • Poderes específicos para uso no exterior

          **Procedimentos adicionais:**
          • Apostilamento (Convenção de Haia)
          • Tradução juramentada (se necessário)
          • Consulta ao consulado do país de destino

          **Observação importante:**
          Cada país tem suas próprias exigências. Recomenda-se consultar o consulado do país de destino antes de elaborar o documento.`
        },
        {
          id: "segunda-via-certidao",
          pergunta: "Como solicitar segunda via de certidão?",
          resposta: `**Para certidões de registro civil:**
          • Comparecer pessoalmente ao cartório
          • Apresentar RG e CPF
          • Informar dados completos do registro
          • Pagamento da taxa correspondente

          **Via online:**
          • Portal do Registro Civil (registrocivil.org.br)
          • Pagamento por cartão ou PIX
          • Entrega por Correios

          **Documentos necessários:**
          • Dados completos do registro
          • Parentesco (se solicitado por terceiro)
          • Procuração (se representando outra pessoa)`
        }
      ]
    }
  ];

  return (
    <div className="duvidas-frequentes">
      <HeroSection
        titulo="Dúvidas Frequentes"
        subtitulo="Encontre respostas para as principais questões"
        descricao="Reunimos as perguntas mais comuns sobre nossos serviços para ajudar você a esclarecer suas dúvidas rapidamente."
      />

      <section className="secao secao--primeira">
        <div className="container">
          <div className="duvidas-content">
            {categorias.map((categoria, categoriaIndex) => (
              <div key={categoriaIndex} className="categoria-duvidas">
                <div className="categoria-header">
                  <div className="categoria-icone">
                    <categoria.icone size={24} />
                  </div>
                  <h2 className="categoria-titulo">{categoria.titulo}</h2>
                </div>

                <div className="duvidas-lista">
                  {categoria.duvidas.map((duvida) => (
                    <div key={duvida.id} className="duvida-item">
                      <button
                        className="duvida-pergunta"
                        onClick={() => toggleExpansao(duvida.id)}
                        aria-expanded={expandido[duvida.id]}
                      >
                        <span>{duvida.pergunta}</span>
                        {expandido[duvida.id] ? (
                          <FiChevronUp size={20} />
                        ) : (
                          <FiChevronDown size={20} />
                        )}
                      </button>

                      {expandido[duvida.id] && (
                        <div className="duvida-resposta">
                          <div className="resposta-content">
                            {duvida.resposta.split('\n').map((linha, index) => {
                              if (linha.trim().startsWith('**') && linha.trim().endsWith('**')) {
                                return (
                                  <h4 key={index} className="resposta-subtitulo">
                                    {linha.replace(/\*\*/g, '')}
                                  </h4>
                                );
                              } else if (linha.trim().startsWith('•')) {
                                return (
                                  <li key={index} className="resposta-item">
                                    {linha.replace('•', '').trim()}
                                  </li>
                                );
                              } else if (linha.trim()) {
                                return (
                                  <p key={index} className="resposta-texto">
                                    {linha}
                                  </p>
                                );
                              }
                              return null;
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Contato */}
      <section className="secao secao--destaque">
        <div className="container">
          <div className="card contato-duvidas">
            <h2>Não encontrou sua resposta?</h2>
            <p>
              Se sua dúvida não foi esclarecida, nossa equipe está pronta para
              atendê-lo pessoalmente ou por telefone.
            </p>
            <div className="contato-duvidas-info">
              <div className="contato-item">
                <strong>Telefone:</strong>
                <a href="tel:+5595362430500">(95) 3624-3050</a>
              </div>
              <div className="contato-item">
                <strong>E-mail:</strong>
                <a href="mailto:atendimento@cartorioloureiro.com.br">
                  atendimento@cartorioloureiro.com.br
                </a>
              </div>
              <div className="contato-item">
                <strong>Horário:</strong>
                <span>Segunda a Sexta, das 8h às 16h</span>
              </div>
            </div>
            <div className="contato-duvidas-acoes">
              <a href="/contato" className="botao">
                Enviar Mensagem
              </a>
              <a href="/emolumentos" className="botao botao-secundario">
                Ver Tabela de Preços
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DuvidasFrequentes;
