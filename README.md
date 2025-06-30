# Cartório Loureiro - Site Oficial

Site moderno e profissional do Cartório Loureiro - 1º Ofício de Notas, Protesto e Registros de Boa Vista/RR.

## 🏢 Sobre o Projeto

Este projeto foi desenvolvido seguindo as especificações do prompt fornecido, criando um site institucional completo para o Cartório Loureiro com foco em:

- **Profissionalismo**: Design elegante que transmite confiança e seriedade
- **Acessibilidade**: Seguindo diretrizes WCAG 2.1 AA
- **Responsividade**: Funciona perfeitamente em todos os dispositivos
- **Performance**: Otimizado para carregamento rápido
- **SEO**: Estruturado para melhor indexação pelos buscadores

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 19+** - Biblioteca JavaScript para interface
- **Vite** - Build tool moderna e rápida
- **React Router DOM** - Roteamento SPA
- **React Helmet Async** - Gerenciamento de meta tags
- **React Hook Form** - Gerenciamento de formulários
- **Yup** - Validação de schemas
- **React Icons** - Ícones vetoriais
- **Framer Motion** - Animações (se necessário)

### Estilização
- **CSS Modules/CSS personalizado** - Estilização componetizada
- **CSS Variables** - Sistema de design consistente
- **Flexbox & Grid** - Layout responsivo moderno

## 📁 Estrutura do Projeto

```
src/
├── assets/           # Imagens, ícones, fontes
├── componentes/      # Componentes reutilizáveis
│   ├── layout/       # Componentes estruturais
│   │   ├── Cabecalho.jsx
│   │   ├── Rodape.jsx
│   │   └── Layout.jsx
│   ├── ui/           # Componentes de interface
│   │   ├── CartaoServico.jsx
│   │   └── HeroSection.jsx
│   └── formularios/  # Componentes de formulários
├── paginas/          # Páginas da aplicação
│   ├── Inicio.jsx
│   ├── Cartorio.jsx
│   ├── Servicos.jsx
│   ├── ServicosOnline.jsx
│   ├── DuvidasFrequentes.jsx
│   └── Contato.jsx
├── contextos/        # Context API (para estados globais)
├── hooks/            # Hooks personalizados
├── servicos/         # Serviços e APIs
├── utils/            # Funções utilitárias
└── estilos/          # Configurações globais de estilo
    └── variaveis.css
```

## 🎨 Sistema de Design

### Paleta de Cores
- **Fundo Principal**: `#000000` (Preto)
- **Texto Principal**: `#FDEBC9` (Creme/Bege claro)
- **Texto Secundário**: `#D8D3CC` (Cinza claro)
- **Botão/Destaque**: `#E3A936` (Dourado/Amarelo Mostarda)
- **Links**: `#F0F0F0` (Branco/Cinza bem claro)
- **Bordas**: `#FFFFFF` (Branco)

## 📄 Páginas Implementadas

### ✅ Concluídas
1. **Início** - Página principal com hero section e overview dos serviços
2. **O Cartório** - Informações institucionais, história e equipe
3. **Serviços** - Hub central dos serviços organizados por categoria
4. **Serviços Online** - Links para plataformas oficiais
5. **Dúvidas Frequentes** - FAQ expandível por categorias
6. **Contato** - Formulário funcional e informações de contato

### 🚧 Pendentes (Placeholders criados)
- Tabela de Emolumentos
- Notícias e Avisos
- Páginas específicas de cada serviço
- Páginas legais (Política de Privacidade, Termos)

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js 16+
- npm ou yarn

### Passos para executar

1. **Clone o repositório**
```bash
git clone [url-do-repositorio]
cd cartorio-loureiro
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o servidor de desenvolvimento**
```bash
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:5173
```

### Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Preview do build
- `npm run lint` - Verificação de código

## 📱 Responsividade

### Breakpoints
- **Mobile**: até 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+
- **Large Desktop**: 1200px+

## ♿ Acessibilidade

### Implementações
- Navegação por teclado
- Contraste adequado (WCAG AA)
- Atributos ARIA apropriados
- Textos alternativos em imagens
- Hierarquia semântica (H1-H6)
- Foco visível em elementos interativos

## 📞 Contato e Suporte

**Cartório Loureiro**
- **Endereço**: Av. Ville Roy, 5636 - Centro, Boa Vista - RR, 69301-000
- **Telefone**: (95) 3624-3050
- **E-mail**: atendimento@cartorioloureiro.com.br
- **Horário**: Segunda a Sexta, das 8h às 16h

---

**Desenvolvido com ♥ para o Cartório Loureiro**+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
