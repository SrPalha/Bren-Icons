import React from 'react';
import type { IconProps } from '../types';

const Monster: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11.5h.009"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M16.5 11.5c0 1.933-2.015 3.5-4.5 3.5s-4.5-1.567-4.5-3.5S9.515 8 12 8s4.5 1.567 4.5 3.5ZM14 18c-.515.31-1.221.5-2 .5-.779 0-1.485-.19-2-.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 4a8.5 8.5 0 0 0-6.521 13.953c.59.705 1.021 1.559 1.021 2.479 0 .866.702 1.568 1.568 1.568h7.864c.866 0 1.568-.702 1.568-1.568 0-.92.43-1.774 1.021-2.48A8.5 8.5 0 0 0 12 4Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M16 5c.167-.9 1-2.76 3-3M8 5c-.167-.9-1-2.76-3-3"/> </svg>
  );
};

export default Monster;
