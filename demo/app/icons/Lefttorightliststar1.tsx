import React from 'react';
import type { IconProps } from '../types';

const Lefttorightliststar1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="left-to-right-list-star-1"> <path id="Vector" opacity="0.4" d="M12 5.5H21" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_2" opacity="0.4" d="M12 12H21" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_3" opacity="0.4" d="M12 18.5H21" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_4" d="M8 5.5H3M4.04167 8L6.95833 3M6.95833 8L4.04167 3" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_5" d="M8 18.5H3M4.04167 21L6.95833 16M6.95833 21L4.04167 16" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Lefttorightliststar1;
