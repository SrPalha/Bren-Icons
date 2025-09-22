import React from 'react';
import type { IconProps } from '../types';

const Sortingaz01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m15.937 2 .48.459c.43.41.644.614.568.788-.075.174-.379.174-.986.174H8.566C5.491 3.421 2.886 5.345 2 8m6.021 14-.438-.42c-.43-.413-.644-.618-.568-.793.075-.175.379-.175.985-.175h7.432c3.078 0 5.685-1.938 6.568-4.612m-7-6.5h2.947c.62 0 .93 0 1.013.2.083.2-.128.44-.55.92l-2.425 2.76c-.422.48-.633.72-.55.92.082.2.392.2 1.012.2H19m-16 0 1.755-3.912C5.08 9.863 5.242 9.5 5.5 9.5s.42.363.745 1.088L8 14.5m3-2.5h1"/> </svg>
  );
};

export default Sortingaz01;
