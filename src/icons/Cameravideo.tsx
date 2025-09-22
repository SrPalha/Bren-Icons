import React from 'react';
import type { IconProps } from '../types';

const Cameravideo: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m4.5 21.5 4-4m2 0 4 4m-5-4v5"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M2 11.875c0-2.062 0-3.094 1.025-3.734C4.05 7.5 5.7 7.5 9 7.5h1c3.3 0 4.95 0 5.975.64C17 8.782 17 9.814 17 11.876v1.25c0 2.062 0 3.094-1.025 3.734-1.025.64-2.675.64-5.975.64H9c-3.3 0-4.95 0-5.975-.64C2 16.218 2 15.186 2 13.124v-1.25Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m17 10.25.126-.076c2.116-1.27 3.174-1.904 4.024-1.598.85.307.85 1.323.85 3.355v1.138c0 2.032 0 3.048-.85 3.355-.85.306-1.908-.328-4.024-1.598L17 14.75"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12.5 7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M7 7.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/> </svg>
  );
};

export default Cameravideo;
