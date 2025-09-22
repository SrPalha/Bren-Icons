import React from 'react';
import type { IconProps } from '../types';

const Creditcarddefrost: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 9.5c-.037-2.252-.21-3.553-1.044-4.487a4.38 4.38 0 0 0-.555-.522C19.146 3.5 17.266 3.5 13.506 3.5h-3.002c-3.76 0-5.64 0-6.896.99a4.38 4.38 0 0 0-.555.523C2 6.193 2 7.963 2 11.5s0 5.306 1.053 6.487c.169.189.354.364.555.522 1.256.991 3.136.991 6.896.991h.996"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M2 8.5h20"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.016 12.5c-3.17 2.794 2.304 4.752 0 8m3.2-8c-3.17 2.794 2.303 4.752 0 8m3.2-8c-3.17 2.794 2.303 4.752 0 8"/> </svg>
  );
};

export default Creditcarddefrost;
