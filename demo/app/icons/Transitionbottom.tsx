import React from 'react';
import type { IconProps } from '../types';

const Transitionbottom: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M18 2c1.4 0 2.1 0 2.635.272a2.5 2.5 0 0 1 1.092 1.093C22 3.9 22 4.6 22 6c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.093C20.1 10 19.4 10 18 10H6c-1.4 0-2.1 0-2.635-.272a2.5 2.5 0 0 1-1.093-1.093C2 8.1 2 7.4 2 6c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C3.9 2 4.6 2 6 2h12Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18v-8m0 8c-.7 0-2.008-1.994-2.5-2.5M12 18c.7 0 2.008-1.994 2.5-2.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M2 16c0 2.339 0 3.508.536 4.362a3.5 3.5 0 0 0 1.102 1.102C4.492 22 5.66 22 8 22h8c2.339 0 3.508 0 4.362-.537a3.5 3.5 0 0 0 1.102-1.1C22 19.507 22 18.338 22 16"/> </svg>
  );
};

export default Transitionbottom;
