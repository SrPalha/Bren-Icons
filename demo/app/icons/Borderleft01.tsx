import React from 'react';
import type { IconProps } from '../types';

const Borderleft01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.5 2.5c-1.094.199-1.899.55-2.536 1.17C2.5 5.1 2.5 7.4 2.5 12s0 6.9 1.464 8.33c.637.62 1.442.972 2.536 1.17M17.69 2.751c1.042.194 1.809.536 2.415 1.14.606.605.95 1.37 1.143 2.409M10 2.505c.586-.005 1.288-.005 1.974-.005.686 0 1.45 0 2.037.005m7.484 7.595c.005.584.005 1.216.005 1.9 0 .684 0 1.316-.005 1.9m-.247 3.8c-.194 1.04-.537 1.804-1.143 2.409-.606.604-1.373.946-2.415 1.14m-7.69.246a246.9 246.9 0 0 0 1.974.005c.686 0 1.45 0 2.037-.005M12 2.5V4m0 16v1.5M9 12h6m4.531 0H21m-9-3v6"/> </svg>
  );
};

export default Borderleft01;
