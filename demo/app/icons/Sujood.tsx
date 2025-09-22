import React from 'react';
import type { IconProps } from '../types';

const Sujood: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 12.51c0-1.483-.889-3.946-4.444-5.924-4.444-2.473-7.741-1.723-8.888 0-.987 1.483-1.481 3.462 2.963 8.408H7.499c-.942 0-1.414.001-1.707.293-.292.293-.292.764-.292 1.706 0 .941 0 1.412.292 1.705.293.292.765.293 1.707.293H9.5c1.165.078 3.495-.34 3.495-2.631m6.505-3.85c-.5.324-2 1.872-4 1.485l1 2.498c.667.167 2.1 1.3 2.5 2.498h-3.34a2 2 0 0 1-1.736-1.007l-.929-1.625m6.505-3.848h.258a2.742 2.742 0 1 1 0 5.481H18.5m-5.505-1.633-1.505-2.632c-.547-.957-.214-2.18.812-2.584.891-.35 1.908-.646 2.754-.646"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.5 15.5c-1 0-2.203-1.5-3.004-1.5-.827 0-.97.341-.996 2.998C1.49 18.102 1.894 19 3 19"/> </svg>
  );
};

export default Sujood;
