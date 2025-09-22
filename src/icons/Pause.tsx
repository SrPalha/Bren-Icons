import React from 'react';
import type { IconProps } from '../types';

const Pause: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="pause">     <g class="pause">       <path stroke="currentColor" strokeWidth="1.5" d="M4 7c0-1.41421 0-2.12132.43934-2.56066C4.87868 4 5.58579 4 7 4s2.12132 0 2.56066.43934C10 4.87868 10 5.58579 10 7v10c0 1.4142 0 2.1213-.43934 2.5607C9.12132 20 8.41421 20 7 20s-2.12132 0-2.56066-.4393C4 19.1213 4 18.4142 4 17V7Zm10 0c0-1.41421 0-2.12132.4393-2.56066C14.8787 4 15.5858 4 17 4c1.4142 0 2.1213 0 2.5607.43934C20 4.87868 20 5.58579 20 7v10c0 1.4142 0 2.1213-.4393 2.5607C19.1213 20 18.4142 20 17 20c-1.4142 0-2.1213 0-2.5607-.4393C14 19.1213 14 18.4142 14 17V7Z" class="Vector"/>     </g>   </g> </svg>
  );
};

export default Pause;
