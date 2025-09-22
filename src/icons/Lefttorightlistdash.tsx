import React from 'react';
import type { IconProps } from '../types';

const Lefttorightlistdash: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="left-to-right-list-dash"> <path id="Vector" d="M9 5H21" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_2" d="M3 5H5" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_3" d="M9 12H21" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_4" d="M3 12H5" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_5" d="M9 19H21" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_6" d="M3 19H5" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> </g> </svg>
  );
};

export default Lefttorightlistdash;
