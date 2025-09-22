import React from 'react';
import type { IconProps } from '../types';

const Mappin1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 9.002c-2.175.013-3.353.118-4.121.95C2 10.904 2 12.436 2 15.5s0 4.596.879 5.548C3.757 22 5.172 22 8 22h8c2.828 0 4.243 0 5.121-.952C22 20.096 22 18.564 22 15.5s0-4.596-.879-5.548c-.768-.832-1.946-.937-4.121-.95M6 12l4.5 2.625m0 0 3.3 1.925m-3.3-1.925L6 17.6M18 19l-4.2-2.45m0 0 4.2-2.8"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0 0v4"/> </svg>
  );
};

export default Mappin1;
