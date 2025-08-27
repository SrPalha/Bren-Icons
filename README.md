# Bren Icons

[![npm version](https://badge.fury.io/js/bren-icons.svg)](https://badge.fury.io/js/bren-icons)
[![npm downloads](https://img.shields.io/npm/dm/bren-icons.svg)](https://www.npmjs.com/package/bren-icons)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)

Uma biblioteca de ícones SVG personalizados para React, construída com TypeScript e otimizada para performance.

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
<script src="https://unpkg.com/bren-icons@1.0.0/dist/index.js"></script>
```

## 📖 Uso Básico

```tsx
import { Home, Search, Add } from 'bren-icons';

function App() {
  return (
    <div>
      <Home size={24} color="#007bff" />
      <Search size={32} color="#28a745" />
      <Add size={48} color="#dc3545" />
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

## 📚 Ícones Disponíveis

### Navegação
- `Home` - Ícone de casa
- `Search` - Ícone de busca
- `AccountCircle` - Ícone de perfil

### Ações
- `Add` - Ícone de adicionar

## 🛠️ Desenvolvimento

### Instalar Dependências

```bash
npm install
```

### Build

```bash
npm run build
```

### Desenvolvimento com Watch

```bash
npm run dev
```

### Limpar Build

```bash
npm run clean
```

## 📦 Estrutura do Projeto

```
src/
├── icons/           # Componentes dos ícones
├── types/           # Definições TypeScript
└── index.ts         # Arquivo principal de exportação
```

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🆘 Suporte

Se você encontrar algum problema ou tiver alguma sugestão, por favor abra uma issue no GitHub.
