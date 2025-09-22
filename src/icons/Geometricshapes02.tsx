import React from 'react';
import type { IconProps } from '../types';

const Geometricshapes02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M6.5 11a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M11 6h7.276c2.258 0 3.387 0 3.669.678.28.679-.518 1.477-2.115 3.074L9.752 19.83c-1.597 1.597-2.395 2.396-3.074 2.115C6 21.663 6 20.535 6 18.276V11"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M17.5 12h.5c1.886 0 2.828 0 3.414.586C22 13.172 22 14.114 22 16v1c0 1.886 0 2.828-.586 3.414C20.828 21 19.886 21 18 21h-1c-1.886 0-2.828 0-3.414-.586C13 19.828 13 18.886 13 17v-.5"/> </svg>
  );
};

export default Geometricshapes02;
