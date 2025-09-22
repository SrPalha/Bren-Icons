import React from 'react';
import type { IconProps } from '../types';

const Folder: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="folder">     <g class="folder">       <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M7 7h9.75c2.1067 0 3.16 0 3.9167.50559.3276.21888.6088.50013.8277.8277C22 9.08996 22 10.1433 22 12.25c0 3.5112 0 5.2667-.8427 6.5279-.3647.5459-.8335 1.0147-1.3794 1.3794C18.5167 21 16.7612 21 13.25 21H12c-4.71405 0-7.07107 0-8.53553-1.4645C2 18.0711 2 15.714 2 11V7.94427c0-1.81647 0-2.72471.38032-3.40621.2711-.48579.67195-.88664 1.15774-1.15774C4.21956 3 5.1278 3 6.94427 3c1.16375 0 1.74563 0 2.25499.19101 1.16294.43611 1.64254 1.49257 2.16734 2.54212L12 7" class="Vector"/>     </g>   </g> </svg>
  );
};

export default Folder;
