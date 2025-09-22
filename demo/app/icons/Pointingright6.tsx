import React from 'react';
import type { IconProps } from '../types';

const Pointingright6: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 4.5h-6m6 0c0-.7-1.995-2.008-2.5-2.5M22 4.5c0 .7-1.995 2.008-2.5 2.5m-6.575 6.005h3.103m0 0h4.468a1.503 1.503 0 1 0 0-3.003h-5.463m.995 3.003-.027 1.055a1.998 1.998 0 0 1-.978 1.667m.01-5.725h-4.561m4.561 0-2.759-2.594c-1.867-1.572-3.228-.746-3.984-.166l-3.973 2.88a2 2 0 0 1-1.173.381H2.011m13.012 5.224c-.3.18-.65.282-1.024.282h-1.004m2.029-.282-.055 1.336a1.997 1.997 0 0 1-.89 1.613m0 0a1.997 1.997 0 0 1-1.113.336h-1.003m2.115-.336-.268 1.59A2.002 2.002 0 0 1 11.806 22H8.258c-.604 0-1.21-.049-1.784-.238-.478-.157-1.004-.377-1.347-.647-.74-.582-1.003-.99-1.638-1.095-.508-.085-1.146-.097-1.49-.097"/> </svg>
  );
};

export default Pointingright6;
