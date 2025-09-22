import React from 'react';
import type { IconProps } from '../types';

const Swiperight1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 4.5h-6m6 0c0-.7-1.994-2.009-2.5-2.5M21 4.5c0 .699-1.994 2.007-2.5 2.498m-1.606 14.99c-.052-1.913.077-2.143.214-2.569.136-.425 1.093-1.96 1.431-3.057 1.095-3.548.074-4.302-1.286-5.309-1.508-1.115-4.354-1.68-5.765-1.558V3.744a1.744 1.744 0 0 0-3.488 0v10.26l-2.06-2.18c-.64-.694-1.668-.764-2.37-.133a1.722 1.722 0 0 0-.223 2.318l1.292 1.713m0 0c.279.361.59.77.944 1.251m-.944-1.251.944 1.251m-.944-1.251c-.571-.742-1.002-1.28-1.374-1.816M7.87 22l-.02-1.05c.044-1.232-.852-2.035-2.02-3.641a66.872 66.872 0 0 0-.247-.336m0 0 1.17 1.55"/> </svg>
  );
};

export default Swiperight1;
