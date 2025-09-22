import React from 'react';
import type { IconProps } from '../types';

const Paintboard: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10c.842 0 2 .116 2-1 0-.609-.317-1.079-.631-1.546-.46-.683-.917-1.359-.369-2.454.667-1.333 1.778-1.333 3.482-1.333.851 0 1.851 0 3.018-.167 2.101-.3 2.5-1.592 2.5-3.5Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 15.002 7.009 15"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M9.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm7 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/> </svg>
  );
};

export default Paintboard;
