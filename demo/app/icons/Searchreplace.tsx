import React from 'react';
import type { IconProps } from '../types';

const Searchreplace: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="search-replace"> <path id="Vector" d="M17.5 17.5L22 22" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_2" d="M20 11C20 15.9706 15.9706 20 11 20C7.46628 20 4.40822 17.9634 2.93552 15M2.93552 15V20M2.93552 15H7.5M2 11C2 6.02944 6.02944 2 11 2C14.5337 2 17.5918 4.03656 19.0645 7M19.0645 7V2M19.0645 7H14.5" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Searchreplace;
