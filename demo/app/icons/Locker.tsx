import React from 'react';
import type { IconProps } from '../types';

const Locker: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M2 11c0-4.243 0-6.364 1.172-7.682C4.343 2 6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.318C22 4.636 22 6.758 22 11c0 4.243 0 6.364-1.172 7.682C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.318C2 17.364 2 15.242 2 11Zm4 9v2m12-2v2M12 7v13m-3-7v1m6-1v1"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M2 7h20"/> </svg>
  );
};

export default Locker;
