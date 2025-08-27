const fs = require('fs');
const path = require('path');

// Função para converter nome do arquivo para nome do componente
function toComponentName(filename) {
  let name = filename.replace('.svg', '');
  
  // Se o nome começa com número, adicionar prefixo
  if (/^\d/.test(name)) {
    name = 'Icon' + name;
  }
  
  return name
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

// Função para ler e processar o conteúdo SVG
function processSvgContent(svgPath) {
  try {
    const svgContent = fs.readFileSync(svgPath, 'utf8');
    
    // Extrair apenas o conteúdo interno do SVG (sem as tags <svg> e </svg>)
    const innerContent = svgContent
      .replace(/<svg[^>]*>/g, '')
      .replace(/<\/svg>/g, '')
      .trim();
    
    return innerContent;
  } catch (error) {
    console.error(`Erro ao ler SVG ${svgPath}:`, error.message);
    return '';
  }
}

// Função para gerar o conteúdo do componente
function generateIconComponent(componentName, svgPath, svgContent) {
  return `import React from 'react';
import { IconProps } from '../types';

const ${componentName}: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  className = '',
  ...props 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      ${svgContent}
    </svg>
  );
};

export default ${componentName};
`;
}

// Função principal
function generateIcons() {
  const iconsDir = path.join(__dirname, '../icones');
  const srcIconsDir = path.join(__dirname, '../src/icons');
  
  // Criar diretório src/icons se não existir  .
  if (!fs.existsSync(srcIconsDir)) {
    fs.mkdirSync(srcIconsDir, { recursive: true });
  }
  
  // Ler todos os arquivos SVG
  const svgFiles = fs.readdirSync(iconsDir).filter(file => file.endsWith('.svg'));
  
  console.log(`Encontrados ${svgFiles.length} arquivos SVG`);
  
  // Gerar componentes para cada SVG
  svgFiles.forEach(svgFile => {
    const componentName = toComponentName(svgFile);
    const componentPath = path.join(srcIconsDir, `${componentName}.tsx`);
    const svgFilePath = path.join(iconsDir, svgFile);
    
    // Ler o conteúdo SVG
    const svgContent = processSvgContent(svgFilePath);
    
    if (svgContent) {
      // Gerar o componente com o conteúdo SVG real
      const componentContent = generateIconComponent(componentName, svgFile, svgContent);
      fs.writeFileSync(componentPath, componentContent);
      console.log(`✅ Atualizado: ${componentName}.tsx com conteúdo SVG`);
    } else {
      console.log(`❌ Erro: Não foi possível ler o SVG ${svgFile}`);
    }
  });
  
  // Atualizar o arquivo de índice
  updateIndexFile(svgFiles);
  
  console.log('\n🎉 Geração de ícones concluída!');
  console.log('📝 Todos os componentes foram criados com o conteúdo SVG real');
}

// Função para atualizar o arquivo de índice
function updateIndexFile(svgFiles) {
  const indexPath = path.join(__dirname, '../src/icons/index.ts');
  const componentNames = svgFiles.map(file => toComponentName(file));
  
  let indexContent = '// Ícones de Navegação\n';
  
  // Agrupar por categoria (você pode ajustar essa lógica)
  const navigationIcons = ['Home', 'Search', 'AccountCircle', 'LocationOn', 'Mail', 'Phone'];
  const actionIcons = ['Add', 'Edit', 'Delete', 'Download', 'Upload', 'Share'];
  const mediaIcons = ['Play', 'Pause', 'Stop', 'Volume', 'Camera', 'Image'];
  
  // Adicionar ícones de navegação
  const navIcons = componentNames.filter(name => navigationIcons.includes(name));
  if (navIcons.length > 0) {
    indexContent += navIcons.map(name => `export { default as ${name} } from './${name}';`).join('\n') + '\n\n';
  }
  
  // Adicionar ícones de ação
  const actIcons = componentNames.filter(name => actionIcons.includes(name));
  if (actIcons.length > 0) {
    indexContent += '// Ícones de Ação\n';
    indexContent += actIcons.map(name => `export { default as ${name} } from './${name}';`).join('\n') + '\n\n';
  }
  
  // Adicionar ícones de mídia
  const medIcons = componentNames.filter(name => mediaIcons.includes(name));
  if (medIcons.length > 0) {
    indexContent += '// Ícones de Mídia\n';
    indexContent += medIcons.map(name => `export { default as ${name} } from './${name}';`).join('\n') + '\n\n';
  }
  
  // Adicionar outros ícones
  const otherIcons = componentNames.filter(name => 
    !navigationIcons.includes(name) && 
    !actionIcons.includes(name) && 
    !mediaIcons.includes(name)
  );
  
  if (otherIcons.length > 0) {
    indexContent += '// Outros Ícones\n';
    indexContent += otherIcons.map(name => `export { default as ${name} } from './${name}';`).join('\n') + '\n\n';
  }
  
  // Adicionar re-exportação dos tipos
  indexContent += '// Re-exportação dos tipos\n';
  indexContent += 'export type { IconProps, IconComponent, IconMetadata } from \'../types\';\n';
  
  fs.writeFileSync(indexPath, indexContent);
  console.log('📝 Arquivo de índice atualizado');
}

// Executar se chamado diretamente
if (require.main === module) {
  generateIcons();
}

module.exports = { generateIcons, toComponentName };
