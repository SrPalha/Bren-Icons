import React from 'react';
import type { IconProps } from '../types';

const Threefinger3: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.5 6a1.5 1.5 0 1 0-3 0v7.963l-1.62-1.626a1.683 1.683 0 0 0-2.51.14 1.696 1.696 0 0 0-.033 2.072l3.004 4.018c.682.912 1.023 1.367 1.433 1.722.626.54 1.376.917 2.183 1.094.528.117 1.096.117 2.233.117 2.166 0 3.25 0 4.112-.332a4.992 4.992 0 0 0 2.867-2.876c.331-.865.331-1.952.331-4.125V11.5a2 2 0 0 0-2-2h-1m-6-3.5V4a1.5 1.5 0 0 1 3 0v2m-3 0v4.5m6-1V6a1.5 1.5 0 1 0-3 0m3 3.5v2m-3-5.5v4.5"/> </svg>
  );
};

export default Threefinger3;
