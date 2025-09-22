import React from 'react';
import type { IconProps } from '../types';

const Touch1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.893 21.988c-.052-1.913.077-2.143.214-2.569.137-.426 1.093-1.96 1.431-3.057 1.095-3.548.075-4.303-1.285-5.309-1.509-1.115-4.354-1.68-5.765-1.558V3.744a1.744 1.744 0 0 0-3.489 0v10.26l-2.06-2.18c-.64-.694-1.668-.764-2.37-.133a1.722 1.722 0 0 0-.222 2.318l1.292 1.713m0 0c.278.361.59.77.944 1.25m-.944-1.25.944 1.25m-.944-1.25c-.572-.742-1.003-1.281-1.375-1.816M8.87 22l-.02-1.05c.043-1.232-.853-2.035-2.021-3.641a66.75 66.75 0 0 0-.246-.336m0 0 1.17 1.55"/> </svg>
  );
};

export default Touch1;
