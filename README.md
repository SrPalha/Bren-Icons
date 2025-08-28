# 🎨 Bren Icons

[![npm version](https://badge.fury.io/js/bren-icons.svg)](https://badge.fury.io/js/bren-icons)
[![npm downloads](https://img.shields.io/npm/dm/bren-icons.svg)](https://www.npmjs.com/package/bren-icons)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)

Uma biblioteca completa de **116+ ícones SVG personalizados** para React, construída com TypeScript e otimizada para performance.

## ✨ Características

- **116+ ícones SVG** organizados por categoria
- **Componentes React TypeScript** totalmente tipados
- **Props personalizáveis** (size, color, className)
- **Tree-shaking** suportado para bundles otimizados
- **Acessibilidade integrada** com atributos ARIA
- **Suporte a CommonJS e ES Modules**
- **Zero dependências** externas
- **Bundle size otimizado**

## 🚀 Instalação

### NPM
```bash
npm install bren-icons
```

### Yarn
```bash
yarn add bren-icons
```

### PNPM
```bash
pnpm add bren-icons
```

### CDN (para uso direto no browser)
```html
<script src="https://unpkg.com/bren-icons@1.0.1/dist/index.js"></script>
```

## 📖 Uso Básico

```tsx
import { Home, Search, Add, Star } from 'bren-icons';

function App() {
  return (
    <div>
      <Home size={24} color="#007bff" />
      <Search size={32} color="#28a745" />
      <Add size={48} color="#dc3545" />
      <Star size={36} color="gold" />
    </div>
  );
}
```

## 🎨 Props Disponíveis

Todos os ícones aceitam as seguintes props:

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `size` | `number \| string` | `24` | Tamanho do ícone em pixels |
| `color` | `string` | `currentColor` | Cor do ícone |
| `className` | `string` | `''` | Classes CSS adicionais |
| `...props` | `SVGProps` | - | Todas as props padrão de SVG |

## 🔧 Uso Avançado

### Uso Dinâmico

```tsx
import { Icons } from 'bren-icons';

function IconRenderer({ iconName, ...props }) {
  const IconComponent = Icons[iconName];
  
  if (!IconComponent) {
    return <span>Ícone não encontrado</span>;
  }
  
  return <IconComponent {...props} />;
}

// Uso
<IconRenderer iconName="Home" size={32} color="blue" />
```

### Customização com CSS

```tsx
import { Home } from 'bren-icons';

function CustomIcon() {
  return (
    <Home 
      className="my-custom-icon hover:scale-110 transition-transform"
      size={24}
    />
  );
}
```

### Ícones com Estados

```tsx
import { Home } from 'bren-icons';

function NavigationIcon({ isActive }) {
  return (
    <Home 
      color={isActive ? '#007bff' : '#6c757d'}
      className={`transition-colors ${isActive ? 'scale-110' : ''}`}
    />
  );
}
```

## 📚 Ícones Disponíveis (116 Total)

### 🧭 Navegação (12 ícones)
- `AccountCircle` - Ícone de perfil de usuário
- `House` - Ícone de casa
- `HouseFilled` - Ícone de casa preenchido
- `LocationOn` - Ícone de localização
- `LocationOnFilled` - Ícone de localização preenchido
- `Mail` - Ícone de email
- `MailOpen` - Ícone de email aberto
- `Menu` - Ícone de menu hambúrguer
- `Menu3dot` - Ícone de menu com 3 pontos
- `NavigateBefore` - Ícone de navegação anterior
- `NavigateNext` - Ícone de navegação próxima
- `Search` - Ícone de busca

### ⚡ Ações (26 ícones)
- `Add` - Ícone de adicionar
- `AddCircle` - Ícone de adicionar em círculo
- `Cancel` - Ícone de cancelar
- `CancelCircleRed` - Ícone de cancelar em círculo vermelho
- `Check` - Ícone de verificação
- `CheckCircleGreen` - Ícone de verificação em círculo verde
- `CheckList` - Ícone de lista de verificação
- `CheckSmall` - Ícone de verificação pequeno
- `Checkbox` - Ícone de checkbox
- `Checkboxfilled` - Ícone de checkbox preenchido
- `Checkboxoutlineblank` - Ícone de checkbox vazio
- `Checkboxoutlineblankminus` - Ícone de checkbox vazio com menos
- `Checkboxoutlineblankminusfilled` - Ícone de checkbox vazio com menos preenchido
- `Close` - Ícone de fechar
- `Copy` - Ícone de copiar
- `Delete` - Ícone de deletar
- `Download` - Ícone de download
- `Edit` - Ícone de editar
- `Eyeclosed` - Ícone de olho fechado
- `Eyeopen` - Ícone de olho aberto
- `InboxDownload` - Ícone de caixa de entrada para download
- `InboxUpload` - Ícone de caixa de entrada para upload
- `RadioButtonChecked` - Ícone de botão de rádio marcado
- `RadioButtonUnchecked` - Ícone de botão de rádio desmarcado
- `Scissor` - Ícone de tesoura
- `Seal` - Ícone de selo
- `Share` - Ícone de compartilhar
- `Upload` - Ícone de upload

### 🎬 Mídia (17 ícones)
- `Camera` - Ícone de câmera
- `FastForwardFilled` - Ícone de avançar rápido preenchido
- `Fastbackrewind` - Ícone de voltar rápido
- `Fastbackrewindfilled` - Ícone de voltar rápido preenchido
- `Fastfoward` - Ícone de avançar rápido
- `GIF` - Ícone de GIF
- `Mic` - Ícone de microfone
- `MusicNote` - Ícone de nota musical
- `Pause` - Ícone de pausar
- `Photo` - Ícone de foto
- `Play` - Ícone de reproduzir
- `Playfilled` - Ícone de reproduzir preenchido
- `Skip` - Ícone de pular
- `Skipfilled` - Ícone de pular preenchido
- `Skippreviousback` - Ícone de pular para anterior
- `Skippreviousbackfilled` - Ícone de pular para anterior preenchido
- `Videocam` - Ícone de câmera de vídeo

### 💫 Interface (13 ícones)
- `AlertCircleYellow` - Ícone de alerta amarelo
- `Bookmark` - Ícone de marcador
- `BookmarkFilled` - Ícone de marcador preenchido
- `Eyeopen` - Ícone de olho aberto
- `Groups` - Ícone de grupos
- `Heart` - Ícone de coração
- `Notifications` - Ícone de notificações
- `Person` - Ícone de pessoa
- `Settings` - Ícone de configurações
- `Settingsfilled` - Ícone de configurações preenchido
- `Smile` - Ícone de sorriso
- `Star` - Ícone de estrela
- `StarFilled` - Ícone de estrela preenchida

### 🚗 Transporte (6 ícones)
- `Bus` - Ícone de ônibus
- `Car` - Ícone de carro
- `CarParking` - Ícone de estacionamento
- `DirectionsWalk` - Ícone de direções para caminhada
- `Subway` - Ícone de metrô
- `Taxi` - Ícone de táxi

### 💬 Comunicação (3 ícones)
- `ChatBubble` - Ícone de balão de chat
- `Inbox` - Ícone de caixa de entrada
- `Send` - Ícone de enviar

### ⚙️ Sistema (9 ícones)
- `Darkmode` - Ícone de modo escuro
- `Folder` - Ícone de pasta
- `FolderFilled` - Ícone de pasta preenchida
- `Lightmode` - Ícone de modo claro
- `Moon` - Ícone de lua
- `SplitSceneRounded` - Ícone de cena dividida arredondada
- `SplitSceneRoundedFilled` - Ícone de cena dividida arredondada preenchida
- `Sun` - Ícone de sol
- `Treedothorizontal` - Ícone de árvore horizontal

### 📝 Formulário (0 ícones)
*Nenhum ícone específico de formulário ainda*

### ₿ Criptomoeda (2 ícones)
- `Bitcoin` - Ícone de Bitcoin
- `Bitcoinfilled` - Ícone de Bitcoin preenchido

### 🛠️ Utilitários (38 ícones)
- `AlertCircle` - Ícone de alerta
- `ArrowSquareIn` - Ícone de seta para dentro do quadrado
- `ArrowSquareOut` - Ícone de seta para fora do quadrado
- `Arrowleft` - Ícone de seta para esquerda
- `Arrowright` - Ícone de seta para direita
- `AttachFile` - Ícone de anexar arquivo
- `Calendar` - Ícone de calendário
- `Clock` - Ícone de relógio
- `DotsSixVertical` - Ícone de 6 pontos verticais
- `Internet` - Ícone de internet
- `Keyboard` - Ícone de teclado
- `KeyboardReturn` - Ícone de tecla return
- `Keyboardarrowdown` - Ícone de seta do teclado para baixo
- `Keyboardarrowup` - Ícone de seta do teclado para cima
- `Keyboardleft` - Ícone de seta do teclado para esquerda
- `Keyboardright` - Ícone de seta do teclado para direita
- `LetterSpacing` - Ícone de espaçamento de letras
- `LinkForward` - Ícone de link para frente
- `Minikeydown` - Ícone de tecla mini para baixo
- `Minikeyright` - Ícone de tecla mini para direita
- `Minikeyup` - Ícone de tecla mini para cima
- `MinusSign` - Ícone de sinal de menos
- `MobileFriendly` - Ícone de mobile friendly
- `Ticket` - Ícone de ingresso
- `TicketFilled` - Ícone de ingresso preenchido
- `Translation` - Ícone de tradução

## 🎨 Demo Interativo

**Visite nosso demo online:** [Demo Bren Icons](https://bren-icons-demo.vercel.app)

### ✨ Funcionalidades do Demo

- **Visualização completa** de todos os 116 ícones
- **Busca em tempo real** por nome ou categoria
- **Filtros por categoria** organizados
- **Cópia de código** com um clique
- **Interface responsiva** para todos os dispositivos
- **Preview em tempo real** dos ícones

### 🚀 Tecnologias do Demo

- **Next.js 14** - Framework React moderno
- **Tailwind CSS** - Estilização responsiva
- **TypeScript** - Tipagem estática
- **Vercel** - Deploy automático

## 🛠️ Desenvolvimento

### Pré-requisitos

- Node.js 16+
- npm/yarn/pnpm

### Setup Local

```bash
# Clone o repositório
git clone https://github.com/SrPalha/Bren-Icons.git
cd Bren-Icons

# Instale dependências
npm install

# Gere componentes de ícones
npm run generate-icons

# Build do projeto
npm run build

# Desenvolvimento
npm run dev
```

### Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run build` | Build de produção |
| `npm run dev` | Modo desenvolvimento |
| `npm run generate-icons` | Gera componentes de ícones |
| `npm run clean` | Limpa arquivos de build |
| `npm run publish:check` | Verifica se pode publicar |

## 📁 Estrutura do Projeto

```
src/
├── icons/           # Componentes dos ícones
├── types/           # Definições TypeScript
└── index.ts         # Arquivo principal de exportação

scripts/
├── generate-icons.js # Script para gerar componentes
└── publish.js       # Script de publicação

examples/
└── index.html       # Exemplo interativo

demo/                 # Demo Next.js para Vercel
├── app/             # Páginas Next.js
├── components/      # Componentes React
└── package.json     # Dependências do demo
```

## 🌐 Deploy

### Demo na Vercel

O demo está configurado para deploy automático na Vercel:

1. **Conecte o repositório** na Vercel
2. **Deploy automático** a cada push para main
3. **Domínio personalizado** disponível
4. **Build otimizado** para produção

### Configuração Automática

- ✅ `vercel.json` configurado
- ✅ Build command otimizado
- ✅ Output directory correto
- ✅ Framework detectado automaticamente

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor, leia nosso [Guia de Contribuição](.github/CONTRIBUTING.md) antes de submeter um Pull Request.

### Como Contribuir

1. **Fork** o projeto
2. **Crie** uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. **Abra** um Pull Request

### Adicionando Novos Ícones

1. Adicione o arquivo SVG na pasta `icones/`
2. Execute `npm run generate-icons`
3. Teste se o ícone aparece corretamente
4. Faça commit das mudanças

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🙏 Agradecimentos

- **React** pela base sólida
- **TypeScript** pela tipagem estática
- **SVG** pelos ícones vetoriais
- **Vercel** pelo hosting do demo
- **Comunidade** pelo feedback e contribuições

## 📞 Suporte

- **Issues**: [GitHub Issues](https://github.com/SrPalha/Bren-Icons/issues)
- **Documentação**: [README.md](README.md)
- **Demo**: [Demo Online](https://bren-icons-demo.vercel.app)
- **NPM**: [bren-icons](https://www.npmjs.com/package/bren-icons)

---

**Desenvolvido com ❤️ pela Bren para a comunidade React**
