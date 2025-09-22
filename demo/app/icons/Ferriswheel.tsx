import React from 'react';
import type { IconProps } from '../types';

const Ferriswheel: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m8 22 2.684-7.648C11.234 12.784 11.51 12 12 12c.49 0 .765.784 1.316 2.352L16 22"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M14 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm5 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM7 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0-8.25a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM21 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/> </svg>
  );
};

export default Ferriswheel;
