import React from 'react';
import type { IconProps } from '../types';

const Lefttorightblockquote: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="left-to-right-block-quote"> <path id="Vector" d="M9 6H17" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_2" d="M9 12H19" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_3" d="M9 18H17" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_4" d="M5 3V21" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Lefttorightblockquote;
