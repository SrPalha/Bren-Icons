# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [2.1.0] - 2025-09-22

### Adicionado
- Catálogo expandido para 3.000+ ícones
- Objeto `Icons` exportado para uso dinâmico

### Alterado
- Nomes de ícones padronizados em `PascalCase` apenas com letras/números
- Removidos hífens e underscores dos nomes e arquivos

### Correções
- Normalização de `fill`/`stroke` para `currentColor` quando aplicável
- Ajustes de atributos SVG para React (camelCase)

---

## [1.0.2] - 2024-12-19

### Adicionado
- README completamente atualizado com lista completa de todos os 116 ícones
- Documentação detalhada de cada ícone organizado por categoria
- Seção do demo interativo com funcionalidades e tecnologias
- Informações de deploy na Vercel
- Guia de contribuição detalhado
- Estrutura completa do projeto documentada
- Scripts disponíveis com descrições

### Melhorado
- Descrição do pacote NPM mais detalhada e atrativa
- Organização visual com emojis e formatação melhorada
- Exemplos de uso mais completos e práticos
- Documentação de desenvolvimento mais clara

## [1.0.1] - 2024-12-19

### Adicionado
- Configuração completa do GitHub (CI/CD, templates de issues, workflows)
- Templates para bug reports e feature requests
- Guia de contribuição detalhado
- Workflows automatizados para build e publicação

## [1.0.0] - 2024-12-19

### Adicionado
- Biblioteca completa de ícones SVG personalizados
- Componentes React TypeScript para todos os ícones
- Sistema de props para personalização (size, color, className)
- Suporte a CommonJS e ES Modules
- Tipos TypeScript completos
- Script automatizado para geração de componentes
- Build com Rollup e Vite
- Documentação completa em português
- Exemplo interativo HTML

### Ícones incluídos
- **Navegação**: Home, Search, AccountCircle, LocationOn, Mail
- **Ações**: Add, Delete, Download, Edit, Share, Upload
- **Mídia**: Camera, Pause, Play
- **Interface**: Star, Heart, Settings, Notifications
- **Transporte**: Bus, Car, CarParking
- **Comunicação**: ChatBubble, Send, Mic
- **Sistema**: Darkmode, Lightmode, Folder, Inbox
- **Formulário**: Checkbox, RadioButton, Check
- **Criptomoeda**: Bitcoin
- **Utilitários**: AlertCircle, Clock, Copy, Close
- E muito mais...

### Características técnicas
- React 16.8+ compatível
- TypeScript nativo
- SVG inline otimizado
- Tree-shaking suportado
- Bundle size otimizado
- Acessibilidade integrada
