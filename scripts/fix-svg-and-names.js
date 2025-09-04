const fs = require('fs');
const path = require('path');

// Função para converter kebab-case e snake_case para camelCase
function toCamelCase(str) {
  return str
    .replace(/[-_]([a-z0-9])/g, (match, letter) => letter.toUpperCase())
    .replace(/^[a-z]/, letter => letter.toUpperCase());
}

// Função para corrigir propriedades SVG inválidas
function fixSvgProperties(svgContent) {
  return svgContent
    // Corrigir propriedades com hífen para camelCase
    .replace(/stroke-width/g, 'strokeWidth')
    .replace(/stroke-linecap/g, 'strokeLinecap')
    .replace(/stroke-linejoin/g, 'strokeLinejoin')
    .replace(/stroke-miterlimit/g, 'strokeMiterlimit')
    .replace(/stroke-dasharray/g, 'strokeDasharray')
    .replace(/stroke-dashoffset/g, 'strokeDashoffset')
    .replace(/fill-rule/g, 'fillRule')
    .replace(/clip-path/g, 'clipPath')
    .replace(/clip-rule/g, 'clipRule')
    .replace(/font-family/g, 'fontFamily')
    .replace(/font-size/g, 'fontSize')
    .replace(/font-weight/g, 'fontWeight')
    .replace(/font-style/g, 'fontStyle')
    .replace(/text-anchor/g, 'textAnchor')
    .replace(/dominant-baseline/g, 'dominantBaseline')
    .replace(/baseline-shift/g, 'baselineShift')
    .replace(/alignment-baseline/g, 'alignmentBaseline')
    .replace(/vector-effect/g, 'vectorEffect')
    .replace(/paint-order/g, 'paintOrder')
    .replace(/color-interpolation/g, 'colorInterpolation')
    .replace(/color-interpolation-filters/g, 'colorInterpolationFilters')
    .replace(/flood-color/g, 'floodColor')
    .replace(/flood-opacity/g, 'floodOpacity')
    .replace(/lighting-color/g, 'lightingColor')
    .replace(/stop-color/g, 'stopColor')
    .replace(/stop-opacity/g, 'stopOpacity')
    .replace(/marker-start/g, 'markerStart')
    .replace(/marker-mid/g, 'markerMid')
    .replace(/marker-end/g, 'markerEnd')
    .replace(/marker-width/g, 'markerWidth')
    .replace(/marker-height/g, 'markerHeight')
    .replace(/marker-units/g, 'markerUnits')
    .replace(/refX/g, 'refX')
    .replace(/refY/g, 'refY')
    .replace(/viewBox/g, 'viewBox') // Manter viewBox como está
    .replace(/preserveAspectRatio/g, 'preserveAspectRatio')
    .replace(/gradientUnits/g, 'gradientUnits')
    .replace(/gradientTransform/g, 'gradientTransform')
    .replace(/spreadMethod/g, 'spreadMethod')
    .replace(/xlink:href/g, 'xlinkHref')
    .replace(/xmlns:xlink/g, 'xmlnsXlink');
}

// Função para renomear arquivos SVG e corrigir propriedades
function fixSvgFilesAndNames() {
  const iconesDir = path.join(__dirname, '..', 'icones');
  
  if (!fs.existsSync(iconesDir)) {
    console.error('Pasta icones não encontrada!');
    return;
  }

  const files = fs.readdirSync(iconesDir);
  const svgFiles = files.filter(file => file.endsWith('.svg'));
  
  console.log(`Encontrados ${svgFiles.length} arquivos SVG para processar...`);
  
  const renamedFiles = [];
  const errors = [];

  svgFiles.forEach(file => {
    try {
      const oldPath = path.join(iconesDir, file);
      const fileContent = fs.readFileSync(oldPath, 'utf8');
      
      // Corrigir propriedades SVG
      const fixedContent = fixSvgProperties(fileContent);
      
      // Converter nome do arquivo para camelCase
      const baseName = path.basename(file, '.svg');
      const newBaseName = toCamelCase(baseName);
      const newFileName = `${newBaseName}.svg`;
      const newPath = path.join(iconesDir, newFileName);
      
      // Se o nome mudou, renomear o arquivo
      if (file !== newFileName) {
        // Verificar se já existe um arquivo com o novo nome
        if (fs.existsSync(newPath)) {
          console.warn(`⚠️  Arquivo ${newFileName} já existe, pulando ${file}`);
          return;
        }
        
        fs.renameSync(oldPath, newPath);
        renamedFiles.push({ from: file, to: newFileName });
      }
      
      // Escrever o conteúdo corrigido
      fs.writeFileSync(newPath, fixedContent, 'utf8');
      
      console.log(`✅ Processado: ${file} → ${newFileName}`);
      
    } catch (error) {
      errors.push({ file, error: error.message });
      console.error(`❌ Erro ao processar ${file}:`, error.message);
    }
  });

  console.log('\n📊 Resumo:');
  console.log(`✅ Arquivos processados: ${svgFiles.length - errors.length}`);
  console.log(`🔄 Arquivos renomeados: ${renamedFiles.length}`);
  console.log(`❌ Erros: ${errors.length}`);

  if (renamedFiles.length > 0) {
    console.log('\n🔄 Arquivos renomeados:');
    renamedFiles.forEach(({ from, to }) => {
      console.log(`  ${from} → ${to}`);
    });
  }

  if (errors.length > 0) {
    console.log('\n❌ Erros encontrados:');
    errors.forEach(({ file, error }) => {
      console.log(`  ${file}: ${error}`);
    });
  }

  console.log('\n🎉 Processamento concluído!');
  console.log('💡 Execute "npm run generate-icons" para gerar os componentes React.');
}

if (require.main === module) {
  fixSvgFilesAndNames();
}

module.exports = { fixSvgFilesAndNames, toCamelCase, fixSvgProperties };
