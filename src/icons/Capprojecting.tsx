import React from 'react';
import type { IconProps } from '../types';

const Capprojecting: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="cap-projecting"> <path id="Vector" d="M21 5H10C7.19108 5 5.78661 5 4.77772 5.67412C4.34096 5.96596 3.96596 6.34096 3.67412 6.77772C3 7.78661 3 9.19107 3 12C3 14.8089 3 16.2134 3.67412 17.2223C3.96596 17.659 4.34096 18.034 4.77772 18.3259C5.78661 19 7.19108 19 10 19H21" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_2" d="M13 12C13 13.3807 11.8807 14.5 10.5 14.5C9.11929 14.5 8 13.3807 8 12C8 10.6193 9.11929 9.5 10.5 9.5C11.8807 9.5 13 10.6193 13 12Z" stroke="#1B1C1B" strokeWidth="1.5"/> <path id="Vector_3" d="M13 12H21" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> </g> </svg>
  );
};

export default Capprojecting;
