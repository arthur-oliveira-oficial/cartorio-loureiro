# Prompt para Desenvolvimento do Site "Cartório Loureiro" com React + Vite

## Visão Geral do Projeto

Desenvolvimento de um site moderno e profissional para o Cartório Loureiro (1º Ofício de Notas, Protesto e Registros de Boa Vista/RR), utilizando React e Vite. O site deve transmitir confiabilidade, segurança e profissionalismo, representando adequadamente a natureza oficial da instituição.

## Detalhes da Instituição

- **Nome Oficial**: Cartório Loureiro - 1º Ofício de Notas, Protesto e Registros de Boa Vista/RR
- **CNPJ**: 24.38.378/6000-13
- **Código Nacional de Serventia (CNS)**: 15.834-5
- **Endereço**: Av. Ville Roy, 5636 - Centro, Boa Vista - RR, 69301-000
- **Telefone Principal**: (95) 3624-3050
- **E-mail Oficial**: atendimento@cartorioloureiro.com.br
- **Horário de Funcionamento**: Segunda a Sexta, das 8h às 16h
- **Tabelião Titular**: Joziel Silva Wariss Loureiro
- **Tabelião Substituto**: Israel Ramos de Oliveira

## Arquitetura e Estrutura do Projeto

### Estrutura de Diretórios
```
src/
├── assets/           # Imagens, ícones, fontes
├── componentes/      # Componentes reutilizáveis
│   ├── layout/       # Componentes estruturais (Cabeçalho, Rodape, etc.)
│   ├── ui/           # Componentes de interface (Botao, Card, etc.)
│   └── formularios/  # Componentes de formulários
├── paginas/          # Componentes de página
├── contextos/        # Context API
├── hooks/            # Hooks personalizados
├── servicos/         # Serviços e APIs
├── utils/            # Funções utilitárias
└── estilos/          # Configurações globais de estilo
```

### Nomenclatura
- Todos os nomes de arquivos, componentes, variáveis e comentários devem estar em português.
- Componentes devem usar PascalCase (ex: `CabecalhoNavegacao.jsx`)
- Arquivos de utilitários e hooks devem usar camelCase (ex: `useForms.js`)

## Estrutura de Páginas

1. **Início** (página inicial)
2. **O Cartório** (informações institucionais, história, equipe)
3. **Serviços** (hub central)
   - Páginas específicas para cada serviço (Escrituras, Procurações, etc.)
4. **Serviços Online** (links para plataformas oficiais)
5. **Tabela de Emolumentos** (custos dos serviços)
6. **Dúvidas Frequentes** (FAQ)
7. **Notícias e Avisos**
8. **Contato** (formulário, mapa e informações)
9. **Páginas Legais** (Política de Privacidade, Termos de Uso)

## Paleta de Cores

| Elemento | Cor | Código HEX |
|-----|-----|-----|
| **Fundo principal** | Preto | `#000000` |
| **Texto principal (títulos)** | Creme / Bege claro | `#FDEBC9` |
| **Texto secundário / corpo** | Cinza claro | `#D8D3CC` |
| **Botão** | Dourado / Amarelo Mostarda | `#E3A936` |
| **Ícones e títulos dos serviços** | Bege claro | `#FDEBC9` |
| **Rodapé (texto)** | Cinza claro | `#D8D3CC` |
| **Links do topo e rodapé** | Branco ou cinza bem claro | `#F0F0F0` |
| **Botão (borda)** | Branco | `#FFFFFF` |

## Requisitos Técnicos

### Tecnologias Base
- React 18+
- Vite como bundler
- React Router para navegação
- Biblioteca de estilização (Styled Components, Emotion ou TailwindCSS)
- Gerenciamento de formulários (Formik ou React Hook Form + Yup/Zod)

### Otimização e Performance
- Implementar code-splitting via React.lazy e Suspense
- Lazy loading para imagens e componentes pesados
- Otimização de renderização com React.memo, useCallback e useMemo
- Bundle analysis e otimização de tamanho final

### SEO e Acessibilidade
- Implementar React Helmet para meta tags
- Seguir diretrizes WCAG 2.1 AA ou superior
- Garantir hierarquia semântica adequada (H1, H2, etc.)
- Implementar atributos ARIA quando necessário
- Garantir contraste adequado entre texto e fundo

### Responsividade
- Abordagem mobile-first
- Breakpoints bem definidos para diferentes dispositivos
- Testes em múltiplos tamanhos de tela e dispositivos

## Detalhes de Componentes e Funcionalidades

### Cabeçalho
- Logo do cartório
- Menu de navegação principal
- Contato rápido (telefone)
- Menu responsivo com toggle para dispositivos móveis

### Página Inicial
- Hero section com chamada clara para os principais serviços
- Seções para serviços em destaque
- Informações de contato e localização
- Notícias ou avisos recentes

### Seção de Serviços
- Categorização clara por tipo (Notas, Protesto, Registro Civil, etc.)
- Cada serviço deve incluir:
  - Descrição clara e acessível
  - Passo a passo do procedimento
  - Lista de documentos necessários
  - Custos estimados (link para tabela de emolumentos)
  - Prazo estimado
  - Perguntas frequentes específicas

### Serviços Online
- Links para plataformas oficiais:
  - Certidão de Registro de Imóveis: https://www.registrodeimoveis.org.br/
  - Certidão de Registro Civil: https://www.registrocivil.org.br/
  - Certidão Notas: https://www.e-notariado.org.br/notary
  - Certidão Selo: https://cidadao.portalselorr.com.br/#/
  - Consulta Testamento: https://buscatestamento.org.br/
  - Consulta Protesto: https://site.cenprotnacional.org.br/
  - Registro de Títulos e Documentos: www.rtdbrasil.org.br

### Formulário de Contato
- Campos: Nome, Email, Telefone, Serviço de interesse, Mensagem
- Validação de dados
- Confirmação de envio
- Mensagem clara sobre tratamento de dados (LGPD)

### Rodapé
- Informações de contato completas
- Mapa do site
- Links para redes sociais
- Informações legais e regulatórias
- Créditos e copyright

## Detalhes Específicos dos Serviços

### Serviços Notariais (Notas)
- Escrituras públicas
- Procurações públicas
- Testamentos
- Reconhecimento de firma
- Abertura de firma
- Autenticação de documentos
- Atas notariais

### Registro Civil de Pessoas Naturais
- Nascimento
- Casamento
- Óbito
- Averbações (divórcio, adoção, mudança de nome, etc.)
- Interdições e tutelas
- Emancipações
- Certidões de inteiro teor

### Protesto de Títulos
- Protesto de cheques, notas promissórias, duplicatas
- Cancelamento de protesto
- Emissão de certidões

### Pessoas Jurídicas, Títulos e Documentos
- Constituição, alteração e extinção de empresas
- Registro de contratos e documentos diversos
- Notificações extrajudiciais
- Certidões de atos registrados

## Conformidade e Regulação

- Todo o conteúdo deve estar em conformidade com:
  - Código Nacional de Normas (Provimento CNJ nº 149/2023)
  - Provimento nº 74/2018 (Segurança de TI)
  - Código de Normas dos Serviços Notariais e de Registro do Estado de Roraima
  - Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)

- O site deve incluir:
  - Política de Privacidade completa
  - Termos de Uso
  - Tabela atualizada de emolumentos
  - Link para consulta do Selo Digital

## Entregáveis Esperados

1. Código-fonte completo organizado conforme a estrutura definida
2. README detalhado com instruções de instalação e desenvolvimento
3. Documentação dos componentes criados
4. Design responsivo e testado em múltiplos dispositivos
5. Otimizações de SEO implementadas
6. Conformidade com diretrizes de acessibilidade

## Inspirações e Referências

Considerar elementos de design e organização de conteúdo dos seguintes sites:
- Sites de outros cartórios de referência
- Sites jurídicos modernos e elegantes
- Plataformas de serviços governamentais bem avaliadas

## Considerações Finais

- O código deve ser limpo, bem documentado e seguir as melhores práticas de React
- Manter foco na acessibilidade e usabilidade para todos os públicos
- Garantir que o site represente adequadamente a seriedade e profissionalismo esperados de um cartório oficial
- Priorizar a clareza da informação sobre elementos decorativos
- Garantir que o design escuro mantenha excelente legibilidade e não prejudique a acessibilidade
