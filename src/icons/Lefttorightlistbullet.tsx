import React from 'react';
import type { IconProps } from '../types';

const Lefttorightlistbullet: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="left-to-right-list-bullet"> <path id="Vector" d="M8 5H20" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_2" d="M4 5H4.00898" stroke="#1B1C1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_3" d="M4 12H4.00898" stroke="#1B1C1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_4" d="M4 19H4.00898" stroke="#1B1C1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_5" d="M8 12H20" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_6" d="M8 19H20" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> </g> </svg>
  );
};

export default Lefttorightlistbullet;
