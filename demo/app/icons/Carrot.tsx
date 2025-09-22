import React from 'react';
import type { IconProps } from '../types';

const Carrot: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M8.2 9.075C6.1 11.177.635 20.002 2.316 21.683c1.682 1.682 10.507-3.782 12.609-5.883 2.1-2.102 3.362-3.362 0-6.725-3.363-3.362-4.623-2.1-6.725 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.5 15.5 13 14m-6-3 1.5 1.5M9 19l-1-1m7-16c.518.519.855 1.633 0 3.111M22 9c-.518-.519-1.633-.856-3.11 0m.388-4.278-1.944 1.944"/> </svg>
  );
};

export default Carrot;
