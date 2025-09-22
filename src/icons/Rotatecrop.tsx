import React from 'react';
import type { IconProps } from '../types';

const Rotatecrop: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="rotate-crop"> <path id="Vector" d="M2 15C2 18.87 5.13 22 9 22L7.95001 20.25" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_2" d="M22 9C22 5.13 18.87 2 15 2L16.05 3.75" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_3" d="M7 5V12C7 14.357 7 15.5355 7.73223 16.2678C8.46447 17 9.64298 17 12 17H19" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_4" d="M17 19V12C17 9.64298 17 8.46447 16.2678 7.73223C15.5355 7 14.357 7 12 7H5" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Rotatecrop;
