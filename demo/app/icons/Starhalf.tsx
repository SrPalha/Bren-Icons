import React from 'react';
import type { IconProps } from '../types';

const Starhalf: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m12 2 .003 17.403c-.36 0-.72.08-.99.242l-2.99 1.785c-2.15 1.28-3.44.332-2.88-2.117l.71-3.095c.13-.585-.1-1.402-.52-1.825l-2.48-2.5c-1.47-1.472-.99-2.964 1.05-3.307l3.19-.535c.54-.09 1.18-.564 1.42-1.058l1.76-3.549c.473-.96 1.1-1.442 1.727-1.444Zm0 0h.003M15 20.844l.982.586c2.14 1.28 3.44.322 2.88-2.117l-.71-3.095c-.13-.585.1-1.402.52-1.825l2.48-2.5c1.459-1.472.99-2.964-1.05-3.307l-3.19-.535c-.53-.09-1.17-.564-1.41-1.058L15 5.98"/> </svg>
  );
};

export default Starhalf;
