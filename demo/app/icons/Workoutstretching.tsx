import React from 'react';
import type { IconProps } from '../types';

const Workoutstretching: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M16 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m14.36 15 .944-.546c1.075-.622 1.612-.933 1.684-1.376a.866.866 0 0 0 .01-.209c-.036-.446-.546-.79-1.565-1.478l-4.707-3.177C8.877 6.966 8.452 4.69 9.75 3"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.726 8.214C8.226 10.714 7 17.632 7 21m3.726-12.786C8.877 6.966 8.452 4.69 9.75 3m.975 5.214L13.372 10m0 0 2.06 1.39c1.02.689 1.53 1.033 1.565 1.48.006.07.003.14-.009.208-.072.443-.61.754-1.684 1.376L14.36 15m-.987-5a15.585 15.585 0 0 0-1.77 2.894c-.44.927-.659 1.39-.618 1.92M15 21c-.973-1.135-1.974-2.7-2.95-4.142-.683-1.01-1.025-1.516-1.066-2.045m0 0L8 14"/> </svg>
  );
};

export default Workoutstretching;
