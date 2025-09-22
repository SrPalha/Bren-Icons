import React from 'react';
import type { IconProps } from '../types';

const Filmroll01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M4 4.5h9V22H4V4.5Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m6 4 .33-.658a4.36 4.36 0 0 1 .235-.441A2 2 0 0 1 8 2.014C8.118 2 8.245 2 8.5 2s.382 0 .5.014a2 2 0 0 1 1.435.887c.065.099.122.213.236.44L11 4m-8 .5h11M3 22h11"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M13 7.5h5c1.414 0 2.121 0 2.56.461.44.462.44 1.207.44 2.697 0 1.015 0 1.523-.25 1.918-.25.396-.693.593-1.58.988l-.887.394c-.592.263-.888.394-1.054.658-.166.263-.166.602-.166 1.279 0 .993 0 1.49-.293 1.797-.293.308-.765.308-1.707.308H13V7.5Z"/> </svg>
  );
};

export default Filmroll01;
