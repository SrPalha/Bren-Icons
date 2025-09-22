import React from 'react';
import type { IconProps } from '../types';

const Handpointingright1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 8.834h.949a3 3 0 0 0 1.792-.595L9.643 4.58c.566-.422 1.267-.759 1.915-.48 1.049.45 1.73 1.723.158 3.28l-1.71 1.598H20.43c2.044.056 2.145 3.345 0 3.486h-5.94c.191 1.48-.852 8.454-5.272 7.437l-.634-.143c-.918-.206-2.556-.814-3.513-1.485-.997-.698-1.99-.451-3.07-.451"/> </svg>
  );
};

export default Handpointingright1;
