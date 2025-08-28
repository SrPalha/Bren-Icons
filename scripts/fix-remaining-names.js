const fs = require('fs');
const path = require('path');

// Função para converter kebab-case para camelCase
function kebabToCamelCase(str) {
  return str.replace(/-([a-z0-9])/g, (match, letter) => letter.toUpperCase());
}

// Função para renomear arquivos restantes
function fixRemainingNames() {
  const iconesDir = path.join(__dirname, '..', 'icones');
  
  if (!fs.existsSync(iconesDir)) {
    console.error('Diretório icones/ não encontrado!');
    return;
  }

  const files = fs.readdirSync(iconesDir);
  const svgFiles = files.filter(file => file.endsWith('.svg'));
  
  console.log(`Encontrados ${svgFiles.length} arquivos SVG para verificar...`);
  
  let renamedCount = 0;
  let skippedCount = 0;
  
  for (const file of svgFiles) {
    if (file.includes('-')) {
      const newName = kebabToCamelCase(file);
      const oldPath = path.join(iconesDir, file);
      const newPath = path.join(iconesDir, newName);
      
      try {
        // Verificar se o arquivo de destino já existe
        if (fs.existsSync(newPath)) {
          console.log(`⚠️  Arquivo já existe: ${newName} (ignorando ${file})`);
          skippedCount++;
          continue;
        }
        
        fs.renameSync(oldPath, newPath);
        console.log(`✅ ${file} → ${newName}`);
        renamedCount++;
      } catch (error) {
        console.error(`❌ Erro ao renomear ${file}:`, error.message);
      }
    } else {
      skippedCount++;
    }
  }
  
  console.log(`\n📊 Resumo:`);
  console.log(`   - Arquivos renomeados: ${renamedCount}`);
  console.log(`   - Arquivos ignorados: ${skippedCount}`);
  console.log(`   - Total processado: ${svgFiles.length}`);
  
  if (renamedCount > 0) {
    console.log(`\n🎉 Arquivos renomeados com sucesso!`);
    console.log(`   Agora execute: npm run generate-icons`);
  }
}

// Executar o script
if (require.main === module) {
  fixRemainingNames();
}

module.exports = { fixRemainingNames, kebabToCamelCase };
