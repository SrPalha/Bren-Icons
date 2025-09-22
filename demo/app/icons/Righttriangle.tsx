import React from 'react';
import type { IconProps } from '../types';

const Righttriangle: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8V6.485c0-2.708 0-4.061.79-4.412.792-.351 1.733.584 3.617 2.456l10.877 10.808c1.988 1.976 2.982 2.964 2.654 3.814-.328.849-1.704.849-4.455.849H16m-3 2c0-.943 0-1.414-.293-1.707C12.414 20 11.943 20 11 20H6.606c-1.229 0-1.843 0-2.224-.396C4 19.207 4 18.569 4 17.294V13c0-.943 0-1.414-.293-1.707C3.414 11 2.943 11 2 11"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M4 15h1c1.886 0 2.828 0 3.414.586C9 16.172 9 17.114 9 19v1"/> </svg>
  );
};

export default Righttriangle;
