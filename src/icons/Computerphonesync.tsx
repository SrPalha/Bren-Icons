import React from 'react';
import type { IconProps } from '../types';

const Computerphonesync: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M20 17.186C18.843 18 17.21 18 13.946 18H9.964c-3.264 0-4.897 0-6.054-.814a4.49 4.49 0 0 1-1.1-1.105C2 14.92 2 13.28 2 10c0-3.28 0-4.919.81-6.081.3-.43.672-.804 1.1-1.105C5.067 2 6.7 2 9.964 2"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 18v4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M8 22h8m2-20c1.886 0 2.828 0 3.414.586C22 3.172 22 4.114 22 6v4c0 1.886 0 2.828-.586 3.414C20.828 14 19.886 14 18 14h-1c-1.886 0-2.828 0-3.414-.586C13 12.828 13 11.886 13 10V6c0-1.886 0-2.828.586-3.414C14.172 2 15.114 2 17 2h1Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.5 11.5h.009"/> </svg>
  );
};

export default Computerphonesync;
