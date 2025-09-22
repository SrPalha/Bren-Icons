import React from 'react';
import type { IconProps } from '../types';

const Dashboardcirclesettings: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M6.25 10.5a4.25 4.25 0 1 0 0-8.5 4.25 4.25 0 0 0 0 8.5Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M18 9.357V10.5m0-1.143a2.93 2.93 0 0 1-2.427-1.272M18 9.357a2.93 2.93 0 0 0 2.427-1.272m-4.854 0-1.073.7m1.073-.7a2.803 2.803 0 0 1-.49-1.585 2.8 2.8 0 0 1 .49-1.585m4.854 3.17 1.073.7m-1.073-.7a2.803 2.803 0 0 0 0-3.17M18 3.643a2.93 2.93 0 0 1 2.427 1.272M18 3.643a2.93 2.93 0 0 0-2.427 1.272M18 3.643V2.5m2.427 2.415 1.073-.7m-5.927.7-1.073-.7"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M17.75 22a4.25 4.25 0 1 0 0-8.5 4.25 4.25 0 0 0 0 8.5Zm-11.5 0a4.25 4.25 0 1 0 0-8.5 4.25 4.25 0 0 0 0 8.5Z"/> </svg>
  );
};

export default Dashboardcirclesettings;
