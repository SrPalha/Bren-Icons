import React from 'react';
import type { IconProps } from '../types';

const Eggs: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 4.318c2.246-1.973 5.019-2.983 7.175-1.834 3.357 1.788 3.54 7.917 1.509 12.08-.853 1.749-1.98 2.861-3.242 3.436"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M15 15.5c0 4.418-2.91 6.5-6.5 6.5S2 19.918 2 15.5 4.786 6 8.5 6s6.5 5.082 6.5 9.5Z"/> </svg>
  );
};

export default Eggs;
