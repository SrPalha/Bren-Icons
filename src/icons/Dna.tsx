import React from 'react';
import type { IconProps } from '../types';

const Dna: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M22 8.443A4.556 4.556 0 1 1 15.557 2M2 15.557A4.556 4.556 0 1 1 8.443 22"/> </svg>
  );
};

export default Dna;
