import React from 'react';
import type { IconProps } from '../types';

const Skippreviousback: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="skippreviousback">     <g class="skippreviousback">       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v16m4.06492-7.3742c.25439 1.2116 1.60803 2.0819 4.31528 3.8223 2.9445 1.893 4.4168 2.8395 5.6093 2.4748.4039-.1235.7759-.3406 1.0882-.6353C20 17.4178 20 15.6118 20 12c0-3.61184 0-5.41776-.9223-6.28765-.3123-.29462-.6843-.51178-1.0882-.63528-1.1925-.36464-2.6648.58183-5.6093 2.47479-2.70725 1.74047-4.06089 2.61074-4.31528 3.82234-.08656.4123-.08656.8393 0 1.2516Z" class="Vector"/>     </g>   </g> </svg>
  );
};

export default Skippreviousback;
