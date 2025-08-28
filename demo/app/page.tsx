'use client'

import { useState, useMemo } from 'react'
import { Search, Filter, Download, Github, Package } from 'lucide-react'
import IconCard from '../components/IconCard'
import * as Icons from './icons'

// Função para categorizar automaticamente os ícones baseado em seus nomes
const categorizeIcons = (icons: Record<string, any>) => {
  const categories: Record<string, string[]> = {
    'Navegação': [],
    'Ações': [],
    'Mídia': [],
    'Interface': [],
    'Transporte': [],
    'Comunicação': [],
    'Sistema': [],
    'Formulários': [],
    'Criptomoeda': [],
    'Utilitários': []
  }

  Object.keys(icons).forEach(iconName => {
    // Pular o objeto "Icons" que não é um ícone real
    if (iconName === 'Icons') return
    
    const lowerName = iconName.toLowerCase()
    
    if (lowerName.includes('nav') || lowerName.includes('menu') || lowerName.includes('location') || lowerName.includes('mail') || lowerName.includes('house') || lowerName.includes('account')) {
      categories['Navegação'].push(iconName)
    } else if (lowerName.includes('add') || lowerName.includes('delete') || lowerName.includes('edit') || lowerName.includes('share') || lowerName.includes('upload') || lowerName.includes('download') || lowerName.includes('copy') || lowerName.includes('close') || lowerName.includes('check') || lowerName.includes('cancel') || lowerName.includes('scissor') || lowerName.includes('seal') || lowerName.includes('minus')) {
      categories['Ações'].push(iconName)
    } else if (lowerName.includes('camera') || lowerName.includes('play') || lowerName.includes('pause') || lowerName.includes('fast') || lowerName.includes('skip') || lowerName.includes('video') || lowerName.includes('mic') || lowerName.includes('music') || lowerName.includes('photo') || lowerName.includes('gif')) {
      categories['Mídia'].push(iconName)
    } else if (lowerName.includes('star') || lowerName.includes('heart') || lowerName.includes('settings') || lowerName.includes('notification') || lowerName.includes('bookmark') || lowerName.includes('eye') || lowerName.includes('smile') || lowerName.includes('person') || lowerName.includes('group')) {
      categories['Interface'].push(iconName)
    } else if (lowerName.includes('bus') || lowerName.includes('car') || lowerName.includes('taxi') || lowerName.includes('subway') || lowerName.includes('walk')) {
      categories['Transporte'].push(iconName)
    } else if (lowerName.includes('chat') || lowerName.includes('send') || lowerName.includes('inbox')) {
      categories['Comunicação'].push(iconName)
    } else if (lowerName.includes('dark') || lowerName.includes('light') || lowerName.includes('folder') || lowerName.includes('moon') || lowerName.includes('sun') || lowerName.includes('split') || lowerName.includes('tree')) {
      categories['Sistema'].push(iconName)
    } else if (lowerName.includes('checkbox') || lowerName.includes('radio') || lowerName.includes('checklist') || lowerName.includes('checkcircle')) {
      categories['Formulários'].push(iconName)
    } else if (lowerName.includes('bitcoin')) {
      categories['Criptomoeda'].push(iconName)
    } else {
      categories['Utilitários'].push(iconName)
    }
  })

  return categories
}

// Categorias automáticas baseadas nos ícones disponíveis
const iconCategories = categorizeIcons(Icons)

// Debug: verificar quais ícones estão disponíveis
console.log('Ícones disponíveis:', Object.keys(Icons))
console.log('Categorias:', iconCategories)

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  // Filtrar ícones baseado na busca e categoria
  const filteredIcons = useMemo(() => {
    let icons = Object.entries(iconCategories).flatMap(([category, iconNames]) =>
      iconNames.map(name => ({ name, category }))
    )

    if (searchTerm) {
      icons = icons.filter(icon => 
        icon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        icon.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (selectedCategory !== 'Todos') {
      icons = icons.filter(icon => icon.category === selectedCategory)
    }

    return icons
  }, [searchTerm, selectedCategory])

  const handleCopyAll = async () => {
    const allIcons = Object.values(iconCategories).flat()
    const importCode = `import { ${allIcons.join(', ')} } from './icons'`
    
    try {
      await navigator.clipboard.writeText(importCode)
      alert('Código de importação copiado!')
    } catch (err) {
      console.error('Falha ao copiar:', err)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Bren Icons</h1>
              <p className="text-gray-600 mt-1">
                Biblioteca completa de ícones SVG para React - Demo Local
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <a
                href="https://www.npmjs.com/package/bren-icons"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <Package size={16} />
                NPM
              </a>
              <a
                href="https://github.com/SrPalha/Bren-Icons"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Filtros e Busca */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Busca */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Buscar ícones..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Filtro por categoria */}
            <div className="sm:w-48">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="Todos">Todas as categorias</option>
                {Object.keys(iconCategories).map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Botão copiar todos */}
            <button
              onClick={handleCopyAll}
              className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
            >
              <Download size={16} />
              Copiar Todos
            </button>
          </div>

          {/* Estatísticas */}
          <div className="mt-4 text-sm text-gray-600">
            Mostrando {filteredIcons.length} de {Object.values(iconCategories).flat().length} ícones disponíveis
          </div>
        </div>

                 {/* Grid de ícones */}
         {filteredIcons.length > 0 ? (
           <div className="icon-grid">
             {filteredIcons.map(({ name, category }) => {
               const IconComponent = (Icons as any)[name]
               
               // Verificar se o componente é válido
               if (!IconComponent || typeof IconComponent !== 'function') {
                 console.warn(`Ícone inválido: ${name}`, IconComponent)
                 return null
               }
               
               return (
                 <IconCard
                   key={name}
                   name={name}
                   Icon={IconComponent}
                   category={category}
                 />
               )
             })}
           </div>
         ) : (
          <div className="text-center py-12">
            <Search className="mx-auto text-gray-400 mb-4" size={48} />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum ícone encontrado</h3>
            <p className="text-gray-600">
              Tente ajustar os filtros ou termos de busca
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p className="mb-2">
              <strong>Bren Icons</strong> - Biblioteca de ícones SVG para React - Demo
            </p>
            <p className="text-sm">
              Desenvolvido com ❤️ pela Bren
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
