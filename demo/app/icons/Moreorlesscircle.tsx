import React from 'react';
import type { IconProps } from '../types';

const Moreorlesscircle: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M7.5 12h9m.003-2.698h-7.04c-.986 0-1.82.047-1.943-.287-.096-.261.4-.915.88-1.515m-.895 7.198h7.04c.986 0 1.82-.048 1.943.286.096.261-.4.915-.88 1.515"/> </svg>
  );
};

export default Moreorlesscircle;
