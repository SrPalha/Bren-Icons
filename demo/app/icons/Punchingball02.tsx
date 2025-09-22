import React from 'react';
import type { IconProps } from '../types';

const Punchingball02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.69 18.5H9.31c-.68 0-1.307.385-1.645 1.008l-.539.996c-.36.666.095 1.496.823 1.496h8.102c.728 0 1.184-.83.823-1.496l-.54-.996c-.337-.623-.964-1.008-1.644-1.008ZM12 12v6.5"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 2C9.515 2 7.5 3.178 7.5 5.846c0 2.335 2.01 2.903 3.015 5.103.144.316.217.474.263.545.205.312.402.437.774.493.084.013.206.013.448.013.242 0 .364 0 .448-.013.372-.056.568-.18.773-.492.047-.071.12-.23.264-.546C14.49 8.754 16.5 8.202 16.5 5.846 16.5 3.154 14.485 2 12 2Z"/> </svg>
  );
};

export default Punchingball02;
