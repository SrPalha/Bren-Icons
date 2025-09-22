import React from 'react';
import type { IconProps } from '../types';

const Flag02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v14m7.758-17.091c-3.306-1.684-5.907-.698-7.204.31-.234.182-.35.273-.452.48C4 4.909 4 5.102 4 5.49v9.243c.97-1.098 3.879-2.8 7.758-.823 3.466 1.765 6.416 1.033 7.812.27.193-.105.29-.158.36-.276.07-.118.07-.246.07-.502V5.874c0-.829 0-1.243-.197-1.393-.198-.15-.66-.022-1.583.234-1.58.438-3.878.51-6.462-.806Z"/> </svg>
  );
};

export default Flag02;
