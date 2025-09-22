import React from 'react';
import type { IconProps } from '../types';

const Roadwayside1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M15.5 2.5c0 2.828 0 4.243.879 5.121.878.879 2.293.879 5.121.879m-6 13c0-2.828 0-4.243.879-5.121.878-.879 2.293-.879 5.121-.879m-13-13c0 2.828 0 4.243-.879 5.121C6.743 8.5 5.328 8.5 2.5 8.5m6 13c0-2.828 0-4.243-.879-5.121C6.743 15.5 5.328 15.5 2.5 15.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2.5v2m9.5 7.5h-2M12 19.5v2M4.5 12h-2"/> </svg>
  );
};

export default Roadwayside1;
