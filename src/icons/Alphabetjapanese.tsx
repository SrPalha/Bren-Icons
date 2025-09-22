import React from 'react';
import type { IconProps } from '../types';

const Alphabetjapanese: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="alphabet-japanese"> <path id="Vector" d="M11.0078 3C9.59128 7 7.06959 14 11.5 21" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_2" d="M3 5.31913C6.70588 6.19855 15.1765 6.63826 21 4" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_3" d="M16.0034 10C16.4981 13 12.5403 19.5 7.15287 19.9565C0.93478 20.4834 4.62421 11 12.0451 11.5C18.2926 11.921 22.0322 16.8261 15.7923 21" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> </g> </svg>
  );
};

export default Alphabetjapanese;
