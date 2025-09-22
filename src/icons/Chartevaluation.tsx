import React from 'react';
import type { IconProps } from '../types';

const Chartevaluation: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M21 21H10c-3.3 0-4.95 0-5.975-1.025C3 18.95 3 17.3 3 14V3"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m17.705 9.333-2.874 4.652c-.419.677-.894 1.701-1.756 1.55-1.014-.179-1.5-1.69-2.372-2.19-.71-.408-1.223.083-1.638.655M21 4l-1.854 3M5 20l2.526-3.733"/> </svg>
  );
};

export default Chartevaluation;
