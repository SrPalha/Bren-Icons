import React from 'react';
import type { IconProps } from '../types';

const Locationuser04: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.533 17c-1.422 2.006-1.78 3.065-1.38 3.916.04.084.086.165.14.243C4.862 22 6.34 22 9.295 22h5.408c2.955 0 4.432 0 5.004-.841.053-.078.1-.16.139-.243.4-.85.042-1.91-1.38-3.916"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12.998 7h-1.996c-2.87 0-4.805 3.07-3.674 5.828a1 1 0 0 0 .918.633h.703c.237 0 .444.17.501.41l.905 3.786c.189.79.867 1.343 1.645 1.343s1.456-.554 1.645-1.343l.905-3.786a.521.521 0 0 1 .5-.41h.704a1 1 0 0 0 .918-.633C17.803 10.069 15.868 7 12.998 7Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M14.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/> </svg>
  );
};

export default Locationuser04;
