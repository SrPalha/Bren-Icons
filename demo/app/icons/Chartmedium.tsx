import React from 'react';
import type { IconProps } from '../types';

const Chartmedium: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3h.009M12 6h.009M12 9h.009M12 12h.009M12 15h.009M12 18h.009"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M6 7c.673-1.122 1.587-2 2.993-2 5.943 0 2.602 12 8.989 12 1.416 0 2.324-.884 3.018-2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M21 21H10c-3.3 0-4.95 0-5.975-1.025C3 18.95 3 17.3 3 14V3"/> </svg>
  );
};

export default Chartmedium;
