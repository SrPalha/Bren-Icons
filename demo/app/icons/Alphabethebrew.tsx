import React from 'react';
import type { IconProps } from '../types';

const Alphabethebrew: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="alphabet-hebrew"> <path id="Vector" d="M5 3C8.5 10.7143 14.9167 13.2857 19 21" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_2" d="M15 15C18.7587 12.75 19 8.78846 19 7C19 4.33333 18.3333 3 18.3333 3" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_3" d="M5.72689 21.0002C5.72689 21.0002 5 19.6433 5 16.9294C5 15.1704 5.24577 11.3456 8.96186 9.02393" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Alphabethebrew;
