#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Preparando publicação do Bren Icons...\n');

// Verificar se estamos no diretório correto
if (!fs.existsSync('package.json')) {
    console.error('❌ package.json não encontrado. Execute este script na raiz do projeto.');
    process.exit(1);
}

// Verificar se o build foi feito
if (!fs.existsSync('dist')) {
    console.log('📦 Fazendo build do projeto...');
    try {
        execSync('npm run build', { stdio: 'inherit' });
    } catch (error) {
        console.error('❌ Erro no build. Verifique se todas as dependências estão instaladas.');
        process.exit(1);
    }
}

// Verificar se há mudanças não commitadas
try {
    const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' });
    if (gitStatus.trim()) {
        console.log('⚠️  Há mudanças não commitadas no git:');
        console.log(gitStatus);
        console.log('\n💡 Recomendo fazer commit das mudanças antes de publicar.\n');
    }
} catch (error) {
    console.log('⚠️  Não foi possível verificar o status do git.');
}

// Verificar se o usuário está logado no npm
try {
    execSync('npm whoami', { stdio: 'pipe' });
} catch (error) {
    console.error('❌ Você não está logado no npm. Execute "npm login" primeiro.');
    process.exit(1);
}

// Mostrar informações do pacote
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
console.log('📋 Informações do pacote:');
console.log(`   Nome: ${packageJson.name}`);
console.log(`   Versão: ${packageJson.version}`);
console.log(`   Descrição: ${packageJson.description}`);
console.log(`   Autor: ${packageJson.author}`);
console.log(`   Licença: ${packageJson.license}\n`);

// Perguntar se quer continuar
console.log('❓ Deseja continuar com a publicação? (y/N)');
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
    const input = data.trim().toLowerCase();
    
    if (input === 'y' || input === 'yes') {
        console.log('\n🚀 Publicando no npm...\n');
        
        try {
            execSync('npm publish', { stdio: 'inherit' });
            console.log('\n✅ Pacote publicado com sucesso!');
            console.log(`🌐 Visualize em: https://www.npmjs.com/package/${packageJson.name}`);
        } catch (error) {
            console.error('\n❌ Erro na publicação. Verifique se:');
            console.error('   - A versão é única');
            console.error('   - Você tem permissão para publicar');
            console.error('   - O nome do pacote está disponível');
        }
    } else {
        console.log('\n❌ Publicação cancelada.');
    }
    
    process.exit(0);
});
