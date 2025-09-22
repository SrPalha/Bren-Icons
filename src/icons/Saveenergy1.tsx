import React from 'react';
import type { IconProps } from '../types';

const Saveenergy1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M20 7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.375 4.5 13.5 7h3l-1.875 2.5M4 14h2.395c.294 0 .584.066.847.194l2.042.988c.263.127.553.193.848.193h1.042c1.008 0 1.826.791 1.826 1.767 0 .04-.027.074-.066.085l-2.541.703a1.952 1.952 0 0 1-1.368-.124L6.842 16.75M13 16.5l4.593-1.411a1.985 1.985 0 0 1 2.204.753c.369.51.219 1.242-.319 1.552l-7.515 4.337a1.994 1.994 0 0 1-1.568.187L4 20.02"/> </svg>
  );
};

export default Saveenergy1;
