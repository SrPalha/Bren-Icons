import React from 'react';
import type { IconProps } from '../types';

const Lollipop: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 14a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 0v8"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M6 7.965C7 6.5 9 5.67 10.286 6.122c1.475.52 1.741 2.259 3.214 2.785 1.5.536 2-1.437 4.5-.972"/> </svg>
  );
};

export default Lollipop;
