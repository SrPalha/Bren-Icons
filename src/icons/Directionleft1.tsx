import React from 'react';
import type { IconProps } from '../types';

const Directionleft1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.148 5.68c.678-.827 1.017-1.24 1.48-1.46C8.093 4 8.623 4 9.682 4H15v7H9.681c-1.059 0-1.589 0-2.052-.22-.464-.22-.803-.633-1.48-1.46l-.27-.326C5.294 8.28 5 7.922 5 7.5c0-.422.293-.78.88-1.494l.268-.327ZM15 21V3m-4 18h8"/> </svg>
  );
};

export default Directionleft1;
