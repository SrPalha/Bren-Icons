# 🎨 Bren Icons Demo

Demonstração interativa da biblioteca Bren Icons, criada com Next.js e Tailwind CSS.

## ✨ Funcionalidades

- **Visualização completa** de todos os ícones
- **Busca e filtros** por categoria
- **Cópia de código** com um clique
- **Interface responsiva** para todos os dispositivos
- **Categorização** organizada dos ícones
- **Preview em tempo real** dos ícones

## 🚀 Como Executar

### Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Abrir http://localhost:3000
```

### Build para Produção

```bash
# Criar build otimizado
npm run build

# Executar build
npm start
```

## 🌐 Deploy na Vercel

1. **Conecte seu repositório** na Vercel
2. **Configure as variáveis** de ambiente se necessário
3. **Deploy automático** a cada push para main

### Configuração Automática

O projeto já está configurado para a Vercel com:
- ✅ `vercel.json` configurado
- ✅ Build command otimizado
- ✅ Output directory correto
- ✅ Framework detectado automaticamente

## 🎯 Estrutura do Projeto

```
demo/
├── app/                    # Páginas Next.js 13+
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/             # Componentes React
│   └── IconCard.tsx       # Card de ícone
├── package.json           # Dependências
├── tailwind.config.js     # Configuração Tailwind
├── tsconfig.json          # Configuração TypeScript
└── vercel.json            # Configuração Vercel
```

## 🔧 Tecnologias Utilizadas

- **Next.js 14** - Framework React
- **Tailwind CSS** - Estilização
- **TypeScript** - Tipagem estática
- **Lucide React** - Ícones da interface
- **Bren Icons** - Biblioteca de ícones

## 📱 Responsividade

- ✅ **Mobile First** design
- ✅ **Grid responsivo** para ícones
- ✅ **Navegação otimizada** para touch
- ✅ **Layout adaptativo** para todas as telas

## 🎨 Personalização

### Cores
As cores podem ser personalizadas no `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: {
        500: '#3b82f6', // Cor principal
        600: '#2563eb', // Hover
      }
    }
  }
}
```

### Categorias
As categorias dos ícones estão definidas em `app/page.tsx` e podem ser facilmente modificadas.

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte o repositório
2. Deploy automático
3. Domínio personalizado disponível

### Outras Plataformas
- **Netlify**: Compatível com Next.js
- **Railway**: Deploy simples
- **Heroku**: Suporte completo

## 📊 Performance

- **Lazy Loading** de componentes
- **Otimização de imagens** automática
- **Bundle splitting** inteligente
- **Cache otimizado** para produção

## 🔍 SEO

- **Meta tags** configuradas
- **Open Graph** para redes sociais
- **Schema markup** para rich snippets
- **Sitemap** automático

---

**Desenvolvido com ❤️ para a comunidade React**
