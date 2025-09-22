import React from 'react';
import type { IconProps } from '../types';

const Chartrose: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M9.713 7.975c-3.108 0-5.628 2.255-5.628 5.038h5.628V7.975Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M2.535 15.926c1.238 2.442 3.986 4.14 7.177 4.14v-7.053h-4.84c-1.464 0-2.196 0-2.64.719-.446.72-.196 1.21.303 2.194Zm10.18 5.751c4.128-1.146 7.127-4.592 7.127-8.664H9.712v6.046c0 1.473 0 2.21.6 2.664.601.453 1.202.287 2.403-.046Zm8.925-11.643c-1.187-3.82-4.602-6.809-8.913-7.774-1.25-.28-1.874-.42-2.444.034-.57.453-.57 1.188-.57 2.658v8.06h9.341c1.48 0 2.22 0 2.675-.614.456-.614.275-1.197-.088-2.364Z"/> </svg>
  );
};

export default Chartrose;
