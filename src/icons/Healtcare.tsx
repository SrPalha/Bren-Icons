import React from 'react';
import type { IconProps } from '../types';

const Healtcare: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M8.396 2.552c1.474-.914 2.762-.545 3.535.041.317.24.476.361.569.361.093 0 .252-.12.569-.36.773-.587 2.06-.956 3.535-.042 1.936 1.2 2.374 5.156-2.09 8.494-.851.636-1.276.954-2.014.954-.738 0-1.163-.318-2.013-.954C6.022 7.708 6.46 3.752 8.396 2.552Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 14h2.395c.294 0 .584.066.847.194l2.042.988c.263.127.553.193.848.193h1.042c1.008 0 1.826.791 1.826 1.767 0 .04-.027.074-.066.085l-2.541.703a1.952 1.952 0 0 1-1.368-.124L6.842 16.75"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m13 16.5 4.593-1.411a1.985 1.985 0 0 1 2.204.753c.369.51.219 1.242-.319 1.552l-7.515 4.337a1.994 1.994 0 0 1-1.568.187L4 20.02"/> </svg>
  );
};

export default Healtcare;
