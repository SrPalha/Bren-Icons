import React from 'react';
import type { IconProps } from '../types';

const Mushroom01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="mushroom-01"> <path id="Vector" d="M17 15C19.412 14.6082 21 13.9411 21 13.1839C21 11.9778 16.9706 11 12 11C7.02944 11 3 11.9778 3 13.1839C3 13.9411 4.58803 14.6082 7 15" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_2" d="M21 13C21 6.92487 16.9706 2 12 2C7.02944 2 3 6.92487 3 13" stroke="#1B1C1B" strokeWidth="1.5"/> <path id="Vector_3" d="M18 4.76514C17.5348 5.50377 16.671 6 15.6823 6C14.2009 6 13 4.88603 13 3.51187C13 2.94318 13.2057 2.41905 13.5518 2" stroke="#1B1C1B" strokeWidth="1.5"/> <path id="Vector_4" d="M10 11.5C9.99527 14.9495 9.90043 20.1752 8 22M14 11.5C14.0047 14.9495 14.0996 20.1752 16 22" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_5" d="M9.00782 7H8.99884" stroke="#1B1C1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Mushroom01;
