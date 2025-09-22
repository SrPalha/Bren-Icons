import React from 'react';
import type { IconProps } from '../types';

const Bitcoindown02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 9a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Zm9-.5-4.588-4.206c-.668-.612-1.002-.918-1.404-.91-.401.01-.721.33-1.362.97l-.966.966c-.564.564-.846.846-1.207.879-.361.032-.69-.195-1.345-.65L4 2m16 6.5h-3.5m3.5 0v-3"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.438 18.167v-5.334m1.562 0V11.5m0 8v-1.333M9.437 15.5h3.126m0 0c.517 0 .937.448.937 1v.667c0 .552-.42 1-.938 1H8.5m4.063-2.667c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.938-1H8.5"/> </svg>
  );
};

export default Bitcoindown02;
