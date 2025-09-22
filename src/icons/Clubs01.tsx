import React from 'react';
import type { IconProps } from '../types';

const Clubs01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="clubs-01"> <path id="Vector" d="M14 13L12 10L10 13" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_2" d="M14.5 5.5C14.5 8 12 10 12 10C12 10 9.5 8 9.5 5.5C9.5 3 10.6193 2 12 2C13.3807 2 14.5 3 14.5 5.5Z" stroke="#1B1C1B" strokeWidth="1.5" strokeLinejoin="round"/> <path id="Vector_3" d="M18.5 15.5C16 15.5 14 13 14 13C14 13 16 10.5 18.5 10.5C21 10.5 22 11.6193 22 13C22 14.3807 21 15.5 18.5 15.5Z" stroke="#1B1C1B" strokeWidth="1.5" strokeLinejoin="round"/> <path id="Vector_4" d="M5.5 15.5C8 15.5 10 13 10 13C10 13 8 10.5 5.5 10.5C3 10.5 2 11.6193 2 13C2 14.3807 3 15.5 5.5 15.5Z" stroke="#1B1C1B" strokeWidth="1.5" strokeLinejoin="round"/> <path id="Vector_5" d="M16 22C16 22 13 16 10 13" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_6" d="M8 22C8 22 11 16 14 13" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Clubs01;
