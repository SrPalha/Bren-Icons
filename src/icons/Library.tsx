import React from 'react';
import type { IconProps } from '../types';

const Library: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 7c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C3.9 3 4.6 3 6 3c1.4 0 2.1 0 2.635.272a2.5 2.5 0 0 1 1.093 1.093C10 4.9 10 5.6 10 7v10c0 1.4 0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.092C8.1 21 7.4 21 6 21c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C2 19.1 2 18.4 2 17V7Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 17h.009"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 7h8m1.449 1.268c-.355-1.33-.533-1.995-.41-2.572a2.46 2.46 0 0 1 .756-1.316c.437-.395 1.1-.573 2.424-.93 1.324-.356 1.987-.534 2.561-.411a2.44 2.44 0 0 1 1.31.76c.394.438.572 1.103.927 2.433l2.534 9.5c.355 1.33.533 1.995.41 2.572a2.46 2.46 0 0 1-.756 1.316c-.437.395-1.1.573-2.424.93-1.324.356-1.986.534-2.561.411a2.447 2.447 0 0 1-1.31-.76c-.394-.438-.572-1.103-.927-2.433l-2.534-9.5Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m17.781 16.695.009-.002"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m12 8 6.5-2"/> </svg>
  );
};

export default Library;
