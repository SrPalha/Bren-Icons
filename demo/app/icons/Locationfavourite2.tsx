import React from 'react';
import type { IconProps } from '../types';

const Locationfavourite2: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 2c4.87 0 9 4.033 9 8.926 0 4.97-4.197 8.459-8.073 10.83a1.886 1.886 0 0 1-1.854 0C7.203 19.363 3 15.915 3 10.927 3 6.033 7.13 2 12 2Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M9.015 7.387c1.073-.64 2.009-.382 2.571.028.23.169.346.253.414.253s.183-.084.414-.253c.562-.41 1.498-.668 2.571-.028 1.408.84 1.726 3.609-1.52 5.945-.62.445-.928.668-1.465.668s-.846-.223-1.464-.668c-3.247-2.336-2.929-5.106-1.521-5.945Z"/> </svg>
  );
};

export default Locationfavourite2;
