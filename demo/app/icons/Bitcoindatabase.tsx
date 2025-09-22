import React from 'react';
import type { IconProps } from '../types';

const Bitcoindatabase: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 8c4.418 0 8-1.343 8-3s-3.582-3-8-3-8 1.343-8 3 3.582 3 8 3Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 15c-4.418 0-8-1.343-8-3"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.938 20.667v-5.334m1.562 0V14m0 8v-1.333M15.937 18h3.126m0 0c.517 0 .937.448.937 1v.667c0 .552-.42 1-.938 1H15M19.063 18c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.938-1H15M20 12V5m-8 17c-4.418 0-8-1.343-8-3V5"/> </svg>
  );
};

export default Bitcoindatabase;
