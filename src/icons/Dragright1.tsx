import React from 'react';
import type { IconProps } from '../types';

const Dragright1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M8.668 8.488a3.488 3.488 0 0 1-1.702-2.994 3.502 3.502 0 0 1 3.511-3.493 3.502 3.502 0 0 1 3.51 3.493c0 1.27-.681 2.383-1.7 2.994"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m18.013 2.99 1.747 1.441c.255.272.298.477.172.778a.786.786 0 0 1-.212.28L18.013 7m-3.598-2.024h4.416M8.56 21.933l.026-.63a2.922 2.922 0 0 0-.481-1.742c-1.352-2.025-2.385-3.178-3.801-5.153a1.482 1.482 0 0 1-.262-.51c-.341-1.442 1.423-3.32 3.057-1.157l1.596 1.63V6.34c.211-1.646 2.81-1.972 3.249 0v3.738c1.621-.147 8.175.977 6.938 5.46-.058.21-.113.424-.17.634-.209.766-.718 1.884-1.21 2.837-.545 1.06-.401 2.557-.493 2.991"/> </svg>
  );
};

export default Dragright1;
