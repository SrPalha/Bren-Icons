import React from 'react';
import type { IconProps } from '../types';

const Handpointingright4: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.485 10.755h3.004m0 0h3.506c.831 0 1.505-.672 1.505-1.502 0-.829-.674-1.501-1.505-1.501h-5.464m1.958 3.003-.027 1.054a1.998 1.998 0 0 1-.978 1.668m-.953-5.725H9.968m4.563 0-2.76-2.594c-1.867-1.572-3.229-.746-3.985-.166L5.348 6.607C3.281 7.832 2.5 9.25 2.5 10.442v4.88c0 2.266 2.382 4.38 4.566 4.38l5.2.047a2.001 2.001 0 0 0 2.004-1.732l.19-1.54m1.024-3c-.3.18-.65.282-1.025.282h-1.004m2.03-.282-.055 1.336a2.002 2.002 0 0 1-2.003 1.95h-1.004"/> </svg>
  );
};

export default Handpointingright4;
