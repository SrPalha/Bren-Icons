import React from 'react';
import type { IconProps } from '../types';

const Repository: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M6 19.623c-.69-.195-1.232-.491-1.682-.941C3 17.364 3 15.242 3 11c0-4.243 0-6.364 1.318-7.682C5.636 2 7.758 2 12 2c4.243 0 6.364 0 7.682 1.318C21 4.636 21 6.758 21 11c0 4.243 0 6.364-1.318 7.682-.45.45-.993.746-1.682.941"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 20.193c-.414 0-.748.32-1.414.958-.647.619-.97.929-1.242.831a.479.479 0 0 1-.096-.046C9 21.779 9 21.31 9 20.376v-3.125c0-1.532 0-2.299.44-2.775C9.878 14 10.585 14 12 14c1.414 0 2.121 0 2.56.476.44.476.44 1.243.44 2.775v3.125c0 .935 0 1.403-.248 1.56a.483.483 0 0 1-.096.046c-.272.098-.595-.212-1.242-.831-.666-.639-1-.958-1.414-.958ZM8 10h8M8 6h4"/> </svg>
  );
};

export default Repository;
