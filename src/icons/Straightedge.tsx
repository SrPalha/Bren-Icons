import React from 'react';
import type { IconProps } from '../types';

const Straightedge: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="straight-edge"> <path id="Vector" d="M6.49902 17.5008L10.5 13.5M13.5 10.5L17.5 6.5" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_2" d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" stroke="#1B1C1B" strokeWidth="1.5"/> <path id="Vector_3" d="M21 5C21 6.10457 20.1046 7 19 7C17.8954 7 17 6.10457 17 5C17 3.89543 17.8954 3 19 3C20.1046 3 21 3.89543 21 5Z" stroke="#1B1C1B" strokeWidth="1.5"/> <path id="Vector_4" d="M7 19C7 20.1046 6.10457 21 5 21C3.89543 21 3 20.1046 3 19C3 17.8954 3.89543 17 5 17C6.10457 17 7 17.8954 7 19Z" stroke="#1B1C1B" strokeWidth="1.5"/> </g> </svg>
  );
};

export default Straightedge;
