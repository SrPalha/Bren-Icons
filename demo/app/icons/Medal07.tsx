import React from 'react';
import type { IconProps } from '../types';

const Medal07: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M6 16a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M9.5 16a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2v8m4.667 2 .936-.803c.687-.589 1.031-.883 1.214-1.281C19 9.518 19 9.066 19 8.16V6c0-1.886 0-2.828-.586-3.414C17.828 2 16.886 2 15 2H9c-1.886 0-2.828 0-3.414.586C5 3.172 5 4.114 5 6v2.16c0 .905 0 1.358.183 1.756.183.398.527.692 1.214 1.281l.936.803"/> </svg>
  );
};

export default Medal07;
