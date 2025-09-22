import React from 'react';
import type { IconProps } from '../types';

const Alphacircle: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M15.001 8c.107.864 0 2.232-.4 3.828-.346 1.14-1.439 4.429-4.277 4.153-2.452-.324-3.479-2.724-3.305-4.297.066-1.32 1.052-3.648 3.678-3.684 2.358.204 2.958 2.208 3.291 3.9.36 1.56.32 2.329.92 3.397.36.588 1.04.804 1.586.66.44-.18.506-.564.506-.852"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"/> </svg>
  );
};

export default Alphacircle;
