import React from 'react';
import type { IconProps } from '../types';

const Whisk: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M20.02 11.02c-2.332 2.334-5.8 2.65-7.745.705-1.945-1.944-1.63-5.412.704-7.746 2.334-2.333 5.802-2.649 7.746-.704 1.945 1.944 1.63 5.412-.704 7.746Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M17.923 8.923c-2.357 2.357-4.905 3.63-5.69 2.845-.787-.786.487-3.334 2.844-5.69 2.357-2.358 4.905-3.632 5.69-2.846.787.786-.487 3.334-2.844 5.69Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7.548 18.636-2.912 2.912a1.544 1.544 0 1 1-2.184-2.184l2.912-2.912a1.544 1.544 0 1 1 2.184 2.184ZM8 16l4-4"/> </svg>
  );
};

export default Whisk;
