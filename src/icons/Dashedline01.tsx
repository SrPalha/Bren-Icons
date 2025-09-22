import React from 'react';
import type { IconProps } from '../types';

const Dashedline01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="dashed-line-01"> <path id="Vector" d="M19 12H21.5" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_2" d="M13.5 12H16" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_3" d="M8 12H10.5" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_4" d="M2.5 12H5" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Dashedline01;
