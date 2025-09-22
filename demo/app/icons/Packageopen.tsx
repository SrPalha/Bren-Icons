import React from 'react';
import type { IconProps } from '../types';

const Packageopen: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22c-.818 0-1.6-.335-3.163-1.006C4.946 19.324 3 18.489 3 17.085V7.747M12 22c.818 0 1.6-.335 3.163-1.006C19.054 19.324 21 18.489 21 17.085V7.747M12 22v-9.83M3 7.748c0 .604.802.986 2.405 1.748l2.92 1.39c1.804.857 2.705 1.286 3.675 1.286M3 7.748c0-.604.802-.986 2.405-1.748M21 7.747c0 .604-.802.986-2.405 1.748l-2.92 1.39C13.87 11.741 12.97 12.17 12 12.17m9-4.423c0-.604-.802-.986-2.405-1.748M6.332 13.311l1.994.948"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 2v2m4-1-1.5 2M8 3l1.5 2"/> </svg>
  );
};

export default Packageopen;
