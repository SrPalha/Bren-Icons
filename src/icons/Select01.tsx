import React from 'react';
import type { IconProps } from '../types';

const Select01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="select-01"> <path id="Vector" d="M5 2V8M2 5H8" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_2" d="M12 5H15M12 22H15M18 5H18.5C20.433 5 22 6.567 22 8.5V9M22 18V18.5C22 20.433 20.433 22 18.5 22H18M9 22H8.5C6.567 22 5 20.433 5 18.5V18M22 12V15M5 12V15" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> </g> </svg>
  );
};

export default Select01;
