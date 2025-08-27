import React, { useState } from 'react';
import { Home, Search, Add, AccountCircle, Icons } from '../src';

function App() {
  const [selectedIcon, setSelectedIcon] = useState('Home');
  const [iconSize, setIconSize] = useState(24);
  const [iconColor, setIconColor] = useState('#007bff');

  const iconNames = Object.keys(Icons).filter(key => key !== 'IconProps');

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Bren Icons - Demonstração
        </h1>

        {/* Controles */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Controles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ícone
              </label>
              <select
                value={selectedIcon}
                onChange={(e) => setSelectedIcon(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {iconNames.map(name => (
                  <option key={name} value={name}>{name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tamanho: {iconSize}px
              </label>
              <input
                type="range"
                min="16"
                max="64"
                value={iconSize}
                onChange={(e) => setIconSize(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cor
              </label>
              <input
                type="color"
                value={iconColor}
                onChange={(e) => setIconColor(e.target.value)}
                className="w-full h-10 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Preview do Ícone */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Preview</h2>
          
          <div className="flex items-center justify-center p-8 bg-gray-100 rounded-lg">
            {React.createElement(Icons[selectedIcon as keyof typeof Icons], {
              size: iconSize,
              color: iconColor,
              className: 'transition-all duration-200'
            })}
          </div>

          <div className="mt-4 text-center">
            <code className="bg-gray-800 text-green-400 px-3 py-1 rounded text-sm">
              {`<${selectedIcon} size={${iconSize}} color="${iconColor}" />`}
            </code>
          </div>
        </div>

        {/* Galeria de Ícones */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Galeria de Ícones</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {iconNames.map(name => (
              <div
                key={name}
                className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-pointer"
                onClick={() => setSelectedIcon(name)}
              >
                {React.createElement(Icons[name as keyof typeof Icons], {
                  size: 32,
                  color: selectedIcon === name ? '#007bff' : '#6c757d',
                  className: 'mb-2'
                })}
                <span className="text-sm text-gray-600 text-center">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Código de Exemplo */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <h2 className="text-2xl font-semibold mb-4">Código de Exemplo</h2>
          
          <div className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm">
{`import { ${iconNames.join(', ')} } from 'bren-icons';

function MyComponent() {
  return (
    <div>
      {/* Uso básico */}
      <${selectedIcon} size={${iconSize}} color="${iconColor}" />
      
      {/* Com classes CSS */}
      <${selectedIcon} 
        size={${iconSize}} 
        color="${iconColor}"
        className="hover:scale-110 transition-transform" 
      />
      
      {/* Uso dinâmico */}
      <IconRenderer iconName="${selectedIcon}" size={${iconSize}} />
    </div>
  );
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
