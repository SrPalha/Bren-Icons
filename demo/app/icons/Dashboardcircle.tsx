import React from 'react';
import type { IconProps } from '../types';

const Dashboardcircle: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M17.75 10.5a4.25 4.25 0 1 0 0-8.5 4.25 4.25 0 0 0 0 8.5Zm-11.5 0a4.25 4.25 0 1 0 0-8.5 4.25 4.25 0 0 0 0 8.5ZM17.75 22a4.25 4.25 0 1 0 0-8.5 4.25 4.25 0 0 0 0 8.5Zm-11.5 0a4.25 4.25 0 1 0 0-8.5 4.25 4.25 0 0 0 0 8.5Z"/> </svg>
  );
};

export default Dashboardcircle;
