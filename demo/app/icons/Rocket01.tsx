import React from 'react';
import type { IconProps } from '../types';

const Rocket01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="m11.801 6.49 1.486-1.486c1.673-1.673 3.862-2.367 6.18-2.48.902-.044 1.352-.066 1.714.295.361.362.34.812.295 1.714-.113 2.317-.807 4.507-2.48 6.18L17.511 12.2c-1.224 1.223-1.572 1.571-1.315 2.898.254 1.014.499 1.995-.238 2.732-.894.895-1.71.895-2.604 0l-7.183-7.183c-.895-.894-.895-1.71 0-2.604.737-.737 1.718-.492 2.732-.238 1.327.257 1.675-.091 2.898-1.315Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.996 7h.01"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m2.5 21.5 5-5m1 5 2-2m-8-4 2-2"/> </svg>
  );
};

export default Rocket01;
