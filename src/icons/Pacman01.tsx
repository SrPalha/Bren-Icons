import React from 'react';
import type { IconProps } from '../types';

const Pacman01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="pacman-01"> <path id="Vector" d="M22 12H21.991M18.009 12H18" stroke="#1B1C1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_2" d="M10.5119 7.5H10.5029" stroke="#1B1C1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_3" d="M2 12C2 16.9706 5.94274 21 10.8064 21C13.2733 21 15.5033 19.9634 17.102 18.2931C17.7426 17.6238 18.0629 17.2892 17.9897 16.7418C17.9166 16.1945 17.4528 15.9208 16.525 15.3735L15.7671 14.9264C13.5637 13.6266 12.462 12.9767 12.462 12C12.462 11.0233 13.5637 10.3734 15.7671 9.07358L16.525 8.62647C17.4528 8.07919 17.9166 7.80555 17.9897 7.25817C18.0629 6.71078 17.7426 6.37617 17.102 5.70695C15.5033 4.03665 13.2733 3 10.8064 3C5.94274 3 2 7.02944 2 12Z" stroke="#1B1C1B" strokeWidth="1.5"/> </g> </svg>
  );
};

export default Pacman01;
