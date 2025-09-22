import React from 'react';
import type { IconProps } from '../types';

const Swipeup1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.5 2.004v5.998m0-5.998c-.7 0-2.008 1.993-2.5 2.499m2.5-2.5c.7 0 2.009 1.994 2.5 2.5m-4.106 17.485c-.052-1.913.077-2.143.214-2.569.136-.426 1.093-1.96 1.431-3.057 1.095-3.548.074-4.303-1.286-5.309-1.508-1.115-4.354-1.68-5.765-1.558V3.744a1.744 1.744 0 0 0-3.488 0v10.26l-2.06-2.18c-.64-.694-1.668-.764-2.37-.133a1.722 1.722 0 0 0-.223 2.318l1.292 1.713m0 0c.279.361.59.77.944 1.25m-.944-1.25.944 1.25m-.944-1.25c-.571-.742-1.002-1.281-1.374-1.816M7.87 22l-.02-1.05c.044-1.232-.852-2.035-2.02-3.641a66.75 66.75 0 0 0-.247-.336m0 0 1.17 1.55"/> </svg>
  );
};

export default Swipeup1;
