import React from 'react';
import type { IconProps } from '../types';

const Bendtool: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="bend-tool"> <path id="Vector" d="M19 6C20.1046 6 21 5.10457 21 4C21 2.89543 20.1046 2 19 2C17.8954 2 17 2.89543 17 4C17 5.10457 17.8954 6 19 6Z" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_2" d="M5 22C6.10457 22 7 21.1046 7 20C7 18.8954 6.10457 18 5 18C3.89543 18 3 18.8954 3 20C3 21.1046 3.89543 22 5 22Z" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_3" d="M5 18C5 10 10 4 17 4" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> </g> </svg>
  );
};

export default Bendtool;
