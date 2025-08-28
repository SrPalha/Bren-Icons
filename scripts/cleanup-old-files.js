const fs = require('fs');
const path = require('path');

// Função para limpar arquivos antigos com hífens
function cleanupOldFiles() {
  const iconsDir = path.join(__dirname, '..', 'src', 'icons');
  
  if (!fs.existsSync(iconsDir)) {
    console.error('Diretório src/icons/ não encontrado!');
    return;
  }

  const files = fs.readdirSync(iconsDir);
  const tsxFiles = files.filter(file => file.endsWith('.tsx'));
  
  console.log(`Encontrados ${tsxFiles.length} arquivos TSX para verificar...`);
  
  let deletedCount = 0;
  let keptCount = 0;
  
  for (const file of tsxFiles) {
    if (file.includes('-')) {
      const filePath = path.join(iconsDir, file);
      try {
        fs.unlinkSync(filePath);
        console.log(`🗑️  Deletado: ${file}`);
        deletedCount++;
      } catch (error) {
        console.error(`❌ Erro ao deletar ${file}:`, error.message);
      }
    } else {
      keptCount++;
    }
  }
  
  console.log(`\n📊 Resumo da limpeza:`);
  console.log(`   - Arquivos deletados: ${deletedCount}`);
  console.log(`   - Arquivos mantidos: ${keptCount}`);
  console.log(`   - Total processado: ${tsxFiles.length}`);
  
  if (deletedCount > 0) {
    console.log(`\n🎉 Limpeza concluída!`);
    console.log(`   Agora execute: npm run generate-icons`);
  }
}

// Executar o script
if (require.main === module) {
  cleanupOldFiles();
}

module.exports = { cleanupOldFiles };
