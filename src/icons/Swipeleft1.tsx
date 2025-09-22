import React from 'react';
import type { IconProps } from '../types';

const Swipeleft1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.003 4.499h6m-6 0c0-.7 1.994-2.008 2.5-2.499m-2.5 2.499c0 .7 1.994 2.008 2.5 2.499m-.613 14.99c-.052-1.913.077-2.143.214-2.569.137-.426 1.093-1.96 1.431-3.057 1.095-3.548.074-4.303-1.286-5.309-1.508-1.115-4.353-1.68-5.764-1.558V3.744a1.744 1.744 0 0 0-3.488 0v10.26l-2.06-2.18c-.639-.694-1.667-.764-2.368-.133a1.723 1.723 0 0 0-.224 2.318l1.293 1.713m0 0c.278.361.59.77.943 1.25m-.943-1.25.943 1.25m-.943-1.25c-.572-.742-1.003-1.281-1.375-1.816M7.868 22l-.02-1.05c.043-1.232-.852-2.035-2.02-3.641a66.795 66.795 0 0 0-.247-.336m0 0 1.17 1.55"/> </svg>
  );
};

export default Swipeleft1;
