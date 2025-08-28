'use client'

import { useState } from 'react'
import { IconProps } from '../app/types'
import { Copy, Check } from 'lucide-react'

interface IconCardProps {
  name: string
  Icon: React.ComponentType<IconProps>
  category: string
}

export default function IconCard({ name, Icon, category }: IconCardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    const importCode = `import { ${name} } from './icons'`
    const usageCode = `<${name} size={24} color="currentColor" />`
    
    const fullCode = `${importCode}\n\n${usageCode}`
    
    try {
      await navigator.clipboard.writeText(fullCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Falha ao copiar:', err)
    }
  }

  // Verificar se o Icon é válido antes de renderizar
  if (!Icon || typeof Icon !== 'function') {
    console.error(`Ícone inválido para ${name}:`, Icon)
    return (
      <div className="icon-card group">
        <div className="icon-preview text-red-500">
          <div className="text-center">
            <div className="text-2xl">⚠️</div>
            <div className="text-xs">Erro</div>
          </div>
        </div>
        <div className="text-center mb-4">
          <h3 className="font-semibold text-gray-900 text-sm mb-1">{name}</h3>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            {category}
          </span>
        </div>
        <div className="text-xs text-red-600 bg-red-50 p-2 rounded border">
          Componente inválido
        </div>
      </div>
    )
  }

  return (
    <div className="icon-card group">
      <div className="icon-preview">
        <Icon size={48} />
      </div>
      
      <div className="text-center mb-4">
        <h3 className="font-semibold text-gray-900 text-sm mb-1">{name}</h3>
        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
          {category}
        </span>
      </div>
      
      <div className="space-y-2">
        <button
          onClick={handleCopy}
          className="copy-button w-full flex items-center justify-center gap-2"
        >
          {copied ? (
            <>
              <Check size={14} />
              Copiado!
            </>
          ) : (
            <>
              <Copy size={14} />
              Copiar Código
            </>
          )}
        </button>
        
        <div className="text-xs text-gray-600 bg-gray-50 p-2 rounded border">
          <code className="text-xs">
            {`<${name} size={24} />`}
          </code>
        </div>
      </div>
    </div>
  )
}
