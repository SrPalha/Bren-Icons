import React from 'react';
import type { IconProps } from '../types';

const Notificationblock03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 2.411A7.742 7.742 0 0 0 11.5 2C7.344 2 3.975 5.26 3.975 9.28c0 1.04-.062 2.018-.69 2.914-.478.676-1.124 1.368-1.255 2.2-.213 1.353.738 2.292 1.902 2.76 4.463 1.795 10.673 1.795 15.136 0 1.164-.468 2.115-1.407 1.902-2.76-.08-.507-.351-.963-.66-1.394"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m15.05 5.05 4.9 4.9M21 7.5a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.5 21c.796.622 1.848 1 3 1s2.204-.378 3-1"/> </svg>
  );
};

export default Notificationblock03;
