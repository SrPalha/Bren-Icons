import React from 'react';
import type { IconProps } from '../types';

const Factory02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.057 19.874 4.005 4.701C4.183 3.314 4.535 3 5.956 3c1.422 0 1.774.314 1.952 1.7L10 21H3.06c-.535 0-.802 0-.953-.17-.151-.169-.117-.431-.05-.956ZM10.154 21H21c.471 0 .707 0 .854-.146C22 20.707 22 20.47 22 20V7l-4.36 3.633c-.71.592-1.064.887-1.352.752C16 11.25 16 10.79 16 9.865V7l-4.448 3.235c-.522.38-.782.569-1.084.667C10.167 11 9.844 11 9.2 11H9M4 6h4m4 9h2m3 0h2"/> </svg>
  );
};

export default Factory02;
