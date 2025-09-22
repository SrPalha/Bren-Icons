import React from 'react';
import type { IconProps } from '../types';

const Kettlebell: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 9c1.212-2.861 1.82-3.849 1.33-4.929a2.833 2.833 0 0 0-.635-.886c-1.672-1.58-9.718-1.58-11.39 0a2.82 2.82 0 0 0-.635.886C5.18 5.151 5.79 6.14 7 9"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M12 8a8 8 0 0 0-6.325 12.898C6.395 21.827 7.064 22 8.22 22h7.558c1.157 0 1.827-.173 2.546-1.102A8 8 0 0 0 12 8Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 16h1.5m-9 0H9"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M12 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/> </svg>
  );
};

export default Kettlebell;
