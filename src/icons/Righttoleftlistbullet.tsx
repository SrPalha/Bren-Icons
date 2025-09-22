import React from 'react';
import type { IconProps } from '../types';

const Righttoleftlistbullet: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="right-to-left-list-bullet"> <path id="Vector" d="M4 5H16" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_2" d="M20 5H20.009" stroke="#1B1C1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_3" d="M20 12H20.009" stroke="#1B1C1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_4" d="M20 19H20.009" stroke="#1B1C1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_5" d="M4 12H16" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_6" d="M4 19H16" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> </g> </svg>
  );
};

export default Righttoleftlistbullet;
