import React from 'react';
import type { IconProps } from '../types';

const Trolley02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M3 2h1.301c1.186 0 1.779 0 2.18.371.402.372.48.992.637 2.233l1.128 8.925c.209 1.654.313 2.48.849 2.976.536.495 1.326.495 2.907.495H22"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M11.5 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 14h-2c-1.886 0-2.828 0-3.414-.586C12 12.828 12 11.886 12 10V8c0-1.886 0-2.828.586-3.414C13.172 4 14.114 4 16 4h2c1.886 0 2.828 0 3.414.586C22 5.172 22 6.114 22 8v2c0 1.886 0 2.828-.586 3.414C20.828 14 19.886 14 18 14Zm-1.5-7h1"/> </svg>
  );
};

export default Trolley02;
