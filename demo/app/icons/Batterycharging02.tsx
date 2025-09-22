import React from 'react';
import type { IconProps } from '../types';

const Batterycharging02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M8 6c-2.828 0-4.243 0-5.121.879C2 7.757 2 9.172 2 12c0 2.828 0 4.243.879 5.121.569.57 1.363.77 2.621.84m6.5.022L13 18c2.828 0 4.243 0 5.121-.879C19 16.243 19 14.828 19 12c0-2.828 0-4.243-.879-5.121-.707-.708-1.761-.846-3.621-.872M11.562 6l-2.97 4.437c-.46.687-.69 1.03-.552 1.297.138.266.546.266 1.363.266h1.194c.817 0 1.225 0 1.363.266.138.267-.092.61-.552 1.297L8.438 18M19 9.5l1.027.171c.681.114 1.022.17 1.28.336a1.5 1.5 0 0 1 .573.675c.12.282.12.627.12 1.318 0 .69 0 1.036-.12 1.318a1.5 1.5 0 0 1-.572.675c-.259.165-.6.222-1.28.336L19 14.5"/> </svg>
  );
};

export default Batterycharging02;
