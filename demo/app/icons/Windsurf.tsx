import React from 'react';
import type { IconProps } from '../types';

const Windsurf: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="wind-surf"> <path id="Vector" d="M8 21L7 22" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_2" d="M22 19H2C7 20.7143 12.9751 22 17 22C20 22 22 19.7347 22 19Z" stroke="#1B1C1B" strokeWidth="1.5" strokeLinejoin="round"/> <path id="Vector_3" d="M16.0103 2C18.1781 7 16.2964 16.3438 15 19" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_4" d="M16.2024 3.91879C15.8029 3.54155 15.0108 3.01128 14.9346 3.00177C14.0744 2.89451 13.9624 3.41804 12.9636 4.88797C11.6984 6.5487 8.80852 10.0524 7.79639 10.911M7.79639 10.911C8.36954 12.6904 9.30761 15.5156 15.0924 16.9358M7.79639 10.911C9.07642 12.6395 13.9337 13.0313 16.2024 13.0111" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Windsurf;
