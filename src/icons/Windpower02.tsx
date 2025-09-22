import React from 'react';
import type { IconProps } from '../types';

const Windpower02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M14.5 9a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 2.85a2.78 2.78 0 0 1 4 0l3.593 3.683a2.502 2.502 0 0 0-2.05 2L4 2.848Zm16 12.3a2.78 2.78 0 0 1-4 0l-3.594-3.683a2.502 2.502 0 0 0 2.05-2L20 15.152Zm0-12.3a2.78 2.78 0 0 0-4 0l-3.593 3.683a2.502 2.502 0 0 1 2.05 2L20 2.848ZM4 15.15a2.78 2.78 0 0 0 4 0l3.594-3.683a2.502 2.502 0 0 1-2.05-2L4 15.152Zm9.45.85.32 2.521c.226 1.604.34 2.406.085 2.942C13.6 22 13.107 22 12.12 22h-.24c-.987 0-1.48 0-1.735-.537-.254-.536-.141-1.338.085-2.942L10.55 16"/> </svg>
  );
};

export default Windpower02;
