import React from 'react';
import type { IconProps } from '../types';

const Lifttruck: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M7 17.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 4v11.01c0 .933 0 1.4.152 1.768.325.784 1.038 1.18 1.848 1.222M4 9h1.746c.864 0 1.296 0 1.692.11a3 3 0 0 1 1.095.57c.317.26.566.613 1.062 1.32.497.707.745 1.06 1.063 1.32a3 3 0 0 0 1.095.57c.395.11.827.11 1.691.11H15m3 0h2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 15V6a2 2 0 0 1 2-2h2.895a3 3 0 0 1 1.946.717l3.456 2.945A2 2 0 0 1 15 9.184V15m-8 2.5h5"/> </svg>
  );
};

export default Lifttruck;
