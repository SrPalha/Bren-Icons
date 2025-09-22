import React from 'react';
import type { IconProps } from '../types';

const Tableround: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 9.5c5.523 0 10-1.343 10-3s-4.477-3-10-3-10 1.343-10 3 4.477 3 10 3Z"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M12 20.5a3.89 3.89 0 0 0 2.19-.654.73.73 0 0 0 .229-.93C14.073 18.258 13.33 17.5 12 17.5s-2.073.76-2.419 1.415a.73.73 0 0 0 .229.93c.6.41 1.362.655 2.19.655Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 17.5v-8"/> </svg>
  );
};

export default Tableround;
