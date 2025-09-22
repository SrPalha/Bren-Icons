import React from 'react';
import type { IconProps } from '../types';

const School: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 22v-9.602c0-1.068 0-1.602.245-2.05.244-.448.693-.737 1.592-1.314l2.082-1.339c.525-.337.787-.506 1.081-.506.294 0 .556.169 1.082.506l2.081 1.339c.899.577 1.348.866 1.592 1.314.245.448.245.982.245 2.05V22"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13h.009"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 22v-5.838c0-2.291-1.26-2.477-4-3.162M3 22v-5.838C3 13.871 4.26 13.685 7 13m-5 9h20"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 22v-4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 7V4.982m0 0V2.97c0-.474 0-.711.146-.858.46-.463 2.354.631 3.074 1.075.608.374.78 1.122.78 1.795h-4Z"/> </svg>
  );
};

export default School;
