import React from 'react';
import type { IconProps } from '../types';

const Skip: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="skip">     <g class="skip">       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 5v14m-4.0649-6.3742c-.2544 1.2116-1.6081 2.0819-4.3153 3.8223-2.94452 1.893-4.41677 2.8395-5.60928 2.4748-.4039-.1235-.77589-.3406-1.08825-.6353C4 17.4178 4 15.6118 4 12c0-3.61184 0-5.41776.92227-6.28765.31236-.29462.68435-.51178 1.08825-.63528 1.19252-.36464 2.66476.58183 5.60928 2.47479 2.7072 1.74047 4.0609 2.61074 4.3153 3.82234.0865.4123.0865.8393 0 1.2516Z" class="Vector"/>     </g>   </g> </svg>
  );
};

export default Skip;
