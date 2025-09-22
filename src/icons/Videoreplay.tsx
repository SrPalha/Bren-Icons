import React from 'react';
import type { IconProps } from '../types';

const Videoreplay: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.7 21.335c-1.172.165-2.7.165-4.75.165h-1.9c-4.03 0-6.046 0-7.298-1.252C2.5 18.996 2.5 16.98 2.5 12.95v-1.9c0-4.03 0-6.046 1.252-7.298C5.004 2.5 7.02 2.5 11.05 2.5h1.9c4.03 0 6.046 0 7.298 1.252C21.5 5.004 21.5 7.02 21.5 11.05v1.9c0 1.208 0 2.235-.034 3.115-.027.705-.04 1.058-.307 1.19-.267.131-.566-.08-1.163-.503L18.65 15.8"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M14.945 12.395c-.176.627-1.012 1.07-2.682 1.955-1.615.856-2.422 1.285-3.073 1.113a1.655 1.655 0 0 1-.712-.393C8 14.62 8 13.746 8 12c0-1.746 0-2.62.478-3.07.198-.186.443-.321.712-.392.65-.173 1.458.256 3.073 1.112 1.67.886 2.506 1.329 2.682 1.955.073.259.073.531 0 .79Z"/> </svg>
  );
};

export default Videoreplay;
