import React from 'react';
import type { IconProps } from '../types';

const Zakat: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M18.968 10.355c-.364-2.022-1.5-3.528-2.486-4.412-.287-.258-.431-.386-.748-.506-.317-.119-.59-.119-1.135-.119H13.4c-.545 0-.818 0-1.135.12-.317.119-.46.247-.748.505-.986.884-2.122 2.39-2.486 4.412C8.76 11.86 10.266 13 11.949 13h4.102c1.683 0 3.189-1.14 2.917-2.645Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 14h2.395c.294 0 .584.066.847.194l2.042.988c.263.127.553.193.848.193h1.042c1.008 0 1.826.791 1.826 1.767 0 .04-.027.074-.066.085l-2.541.703a1.952 1.952 0 0 1-1.368-.124L6.842 16.75M13 16.5l4.593-1.411a1.985 1.985 0 0 1 2.204.753c.369.51.219 1.242-.319 1.552l-7.515 4.337a1.994 1.994 0 0 1-1.568.187L4 20.02"/> </svg>
  );
};

export default Zakat;
