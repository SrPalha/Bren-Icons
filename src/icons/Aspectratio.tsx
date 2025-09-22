import React from 'react';
import type { IconProps } from '../types';

const Aspectratio: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="aspect-ratio"> <path id="Vector" d="M2 12C2 7.75736 2 5.63604 3.17157 4.31802C4.34315 3 6.22876 3 10 3H14C17.7712 3 19.6569 3 20.8284 4.31802C22 5.63604 22 7.75736 22 12C22 16.2426 22 18.364 20.8284 19.682C19.6569 21 17.7712 21 14 21H10C6.22876 21 4.34315 21 3.17157 19.682C2 18.364 2 16.2426 2 12Z" stroke="#1B1C1B" strokeWidth="1.5"/> <path id="Vector_2" d="M2 9H10C12.8284 9 14.2426 9 15.1213 9.87868C16 10.7574 16 12.1716 16 15V21" stroke="#1B1C1B" strokeWidth="1.5"/> <path id="Vector_3" d="M10 21V9" stroke="#1B1C1B" strokeWidth="1.5"/> </g> </svg>
  );
};

export default Aspectratio;
