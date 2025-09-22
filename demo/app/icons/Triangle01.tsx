import React from 'react';
import type { IconProps } from '../types';

const Triangle01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M7.898 6.733C9.712 3.578 10.619 2 12 2c1.38 0 2.288 1.578 4.102 4.733l3.757 6.532c1.726 3 2.589 4.5 1.908 5.618C21.087 20 19.31 20 15.757 20H8.243c-3.553 0-5.33 0-6.01-1.117-.68-1.117.182-2.618 1.908-5.618l3.757-6.532Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 20v2m8-13-2 1M4 9l2 1"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M4 14.409c1.89.642 3.252 2.468 3.252 4.62 0 .333-.032.657-.094.971m9.684 0a5.01 5.01 0 0 1-.094-.97c0-2.153 1.362-3.979 3.252-4.621M15.281 6A4.671 4.671 0 0 1 12 7.35 4.671 4.671 0 0 1 8.719 6"/> </svg>
  );
};

export default Triangle01;
