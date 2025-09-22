import React from 'react';
import type { IconProps } from '../types';

const Alien01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M7.333 10H6.5a.5.5 0 0 0-.5.5v.833A2.667 2.667 0 0 0 8.667 14H9.5a.5.5 0 0 0 .5-.5v-.833A2.667 2.667 0 0 0 7.333 10Zm9.334 0H17c.471 0 .707 0 .854.146.146.147.146.383.146.854v.333A2.667 2.667 0 0 1 15.333 14H15c-.471 0-.707 0-.854-.146C14 13.707 14 13.47 14 13v-.333A2.667 2.667 0 0 1 16.667 10Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 18h2m8-7c0 5.523-6 11-9 11s-9-5.477-9-11 4.03-9 9-9 9 3.477 9 9Z"/> </svg>
  );
};

export default Alien01;
