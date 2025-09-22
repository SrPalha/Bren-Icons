import React from 'react';
import type { IconProps } from '../types';

const Basketball01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="basketball-01"> <path id="Vector" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#1B1C1B" strokeWidth="1.5"/> <path id="Vector_2" d="M2 12.9506C8.14512 13.5607 13.5577 8.11477 12.9506 2" stroke="#1B1C1B" strokeWidth="1.5"/> <path id="Vector_3" d="M11.0507 22.0002C10.4406 15.8551 15.8866 10.4424 22.0013 11.0496" stroke="#1B1C1B" strokeWidth="1.5"/> <path id="Vector_4" d="M17 20C17 12.8203 11.1797 7 4 7" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> </g> </svg>
  );
};

export default Basketball01;
