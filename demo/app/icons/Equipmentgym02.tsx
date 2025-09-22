import React from 'react';
import type { IconProps } from '../types';

const Equipmentgym02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3v18M21 3v18m1-15H2"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M15.5 10c1.105 0 2 .97 2 2.165 0 .283-.05.554-.142.802-.294.798-3.489.617-3.716 0a2.316 2.316 0 0 1-.142-.802c0-1.196.895-2.165 2-2.165Zm-7 0c1.105 0 2 .97 2 2.165 0 .283-.05.554-.142.802-.294.798-3.489.617-3.716 0a2.316 2.316 0 0 1-.142-.802c0-1.196.895-2.165 2-2.165Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.5 10V6m7 4V6"/> </svg>
  );
};

export default Equipmentgym02;
