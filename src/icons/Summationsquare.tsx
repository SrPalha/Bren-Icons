import React from 'react';
import type { IconProps } from '../types';

const Summationsquare: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109C18.717 21.5 16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391C2.5 18.717 2.5 16.479 2.5 12Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 14.499c-.002.528-.017.815-.15 1.03-.326.532-.976.469-1.526.469H10.8c-1.107 0-1.661 0-1.78-.327-.118-.326.303-.694 1.144-1.432l1.69-1.48c.402-.353.604-.53.604-.759 0-.23-.202-.406-.604-.759l-1.69-1.48c-.84-.737-1.262-1.106-1.143-1.432.118-.327.672-.327 1.78-.327h2.524c.55 0 1.2-.063 1.526.468.133.216.148.503.15 1.031"/> </svg>
  );
};

export default Summationsquare;
