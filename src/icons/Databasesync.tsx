import React from 'react';
import type { IconProps } from '../types';

const Databasesync: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m13 17 1.023.594c.514-1.866 2.488-2.974 4.409-2.474a3.575 3.575 0 0 1 2.218 1.686M22 20l-1.023-.594c-.514 1.866-2.488 2.974-4.409 2.474a3.577 3.577 0 0 1-2.186-1.63"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M21 13v-1.5c0-4.478 0-6.718-1.391-8.109C18.217 2 15.979 2 11.5 2 7.022 2 4.782 2 3.391 3.391S2 7.021 2 11.5c0 4.478 0 6.718 1.391 8.109C4.618 20.835 6.503 20.98 10 20.998h1"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 11.5h19m-8.5-5h4M7.75 7.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm0 10a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"/> </svg>
  );
};

export default Databasesync;
