import React from 'react';
import type { IconProps } from '../types';

const Nthrootcircle: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.505 8.484h-5.251c-.817 0-.77.154-.93.978l-1.31 5.05c-.332 1.328-.725.958-.725.958-.36-.12-.415-.261-1.025-1.514l-.41-.883c-.263-.54-.592-.476-.772-.394 0 0-.277.1-.584.3m6.499-1.474c.42-.014.867-.037 1.093.417.343.693.86 1.89 1.061 2.34.101.173.417.227.417.227.27.035.573.023.573.023m.192-3.007c-.846 0-1.345.975-1.82 1.568-.608.907-1.053 1.416-1.709 1.44"/> </svg>
  );
};

export default Nthrootcircle;
