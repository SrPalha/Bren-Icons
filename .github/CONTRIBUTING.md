# 🤝 Contribuindo para Bren Icons

Obrigado por considerar contribuir para o Bren Icons! Este documento fornece diretrizes para contribuições.

## 📋 Como Contribuir

### 1. **Fork o Projeto**
- Faça um fork do repositório
- Clone seu fork localmente
- Crie uma branch para sua feature

### 2. **Desenvolvimento**
```bash
# Clone seu fork
git clone https://github.com/SEU_USUARIO/Bren-Icons.git

# Instale dependências
npm install

# Crie uma branch
git checkout -b feature/nova-feature

# Faça suas mudanças
# ...

# Teste o build
npm run build

# Commit suas mudanças
git commit -m "feat: adiciona nova feature"
```

### 3. **Adicionando Novos Ícones**
- Coloque o arquivo SVG na pasta `icones/`
- Execute `npm run generate-icons` para gerar os componentes
- Teste se o ícone aparece corretamente no exemplo HTML

### 4. **Padrões de Commit**
Use o padrão [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` para novas features
- `fix:` para correções de bugs
- `docs:` para documentação
- `style:` para formatação
- `refactor:` para refatoração
- `test:` para testes
- `chore:` para tarefas de manutenção

### 5. **Pull Request**
- Descreva claramente as mudanças
- Inclua screenshots se aplicável
- Certifique-se de que o build passa
- Atualize a documentação se necessário

## 🧪 Testando

### Build Local
```bash
npm run build
```

### Exemplo HTML
```bash
# Abra examples/index.html no navegador
# Verifique se os ícones aparecem corretamente
```

## 📚 Estrutura do Projeto

```
src/
├── icons/           # Componentes dos ícones
├── types/           # Definições TypeScript
└── index.ts         # Arquivo principal de exportação

scripts/
└── generate-icons.js # Script para gerar componentes

examples/
└── index.html       # Exemplo interativo
```

## 🐛 Reportando Bugs

- Use o template de bug report
- Inclua passos para reproduzir
- Adicione screenshots se aplicável
- Especifique o ambiente (OS, navegador, versões)

## 💡 Sugerindo Features

- Use o template de feature request
- Descreva o problema que resolve
- Explique como seria implementado
- Considere alternativas

## 📄 Licença

Ao contribuir, você concorda que suas contribuições serão licenciadas sob a licença MIT.

## 🆘 Precisa de Ajuda?

- Abra uma issue para discussão
- Entre em contato através do GitHub
- Consulte a documentação no README.md

---

**Obrigado por contribuir para o Bren Icons! 🎉**
