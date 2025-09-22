import React from 'react';
import type { IconProps } from '../types';

const Summationcircle2: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 14.499c-.002.528-.017.815-.15 1.03-.326.532-.976.469-1.526.469H10.8c-1.107 0-1.661 0-1.78-.327-.118-.326.303-.694 1.144-1.432l1.69-1.48c.402-.353.604-.53.604-.759 0-.23-.202-.406-.604-.759l-1.69-1.48c-.84-.737-1.262-1.106-1.143-1.432.118-.327.672-.327 1.78-.327h2.524c.55 0 1.2-.063 1.526.468.133.216.148.503.15 1.031"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"/> </svg>
  );
};

export default Summationcircle2;
