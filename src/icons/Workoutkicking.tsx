import React from 'react';
import type { IconProps } from '../types';

const Workoutkicking: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M7 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.948 14H8.14c-.813 0-1.22 0-1.5-.237-.282-.237-.348-.636-.482-1.434l-.077-.459c-.072-.428-.108-.643-.055-.847.052-.204.187-.375.457-.717l1.25-1.582m0 0L8.696 7.5 9.786 6M7.73 8.724l5.236 3.776M9.786 6l2.177-3M9.786 6l4.5 3.5m0 0L20 3m-5.714 6.5-1.319 3m0 0V21"/> </svg>
  );
};

export default Workoutkicking;
