import React from 'react';
import type { IconProps } from '../types';

const Tractor: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.5 21a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM19 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 10.5a7.5 7.5 0 0 1 11.995 6.287c-.023.604-.034.907.113 1.06.148.153.42.153.965.153H16m-3-9 3.106.582c2.34.44 3.511.659 4.202 1.492.692.833.692 2.03.692 4.426M20 12h-1"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 12.5V9.587c0-.39-.057-.776-.169-1.15L11.5 3M4 9V3M3 3h10m5 6.5V8a2 2 0 0 1 2-2M7 9V3"/> </svg>
  );
};

export default Tractor;
