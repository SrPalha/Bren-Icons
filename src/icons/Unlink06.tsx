import React from 'react';
import type { IconProps } from '../types';

const Unlink06: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M13.5 13v-1.5c0-1.405 0-2.107-.337-2.611a2 2 0 0 0-.552-.552c-.44-.294-1.032-.332-2.111-.336L10 8c-1.404 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C6.5 9.393 6.5 10.096 6.5 11.5v6c0 1.404 0 2.107.337 2.611a2 2 0 0 0 .552.552C7.893 21 8.596 21 10 21c1.405 0 2.107 0 2.611-.337.218-.146.406-.334.552-.552.187-.28.27-.622.307-1.111"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M10.5 11v1.5c0 1.405 0 2.107.337 2.611.146.218.334.406.552.552.44.294 1.032.332 2.111.336L14 16c1.405 0 2.107 0 2.611-.337.218-.146.406-.334.552-.552.337-.504.337-1.207.337-2.611v-6c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C16.107 3 15.404 3 14 3c-1.405 0-2.107 0-2.611.337a2 2 0 0 0-.552.552c-.187.28-.27.622-.307 1.111M20 10.5 22 9m-2 5.5 2 1.5M4 10.5 2 9m2 5.5L2 16"/> </svg>
  );
};

export default Unlink06;
