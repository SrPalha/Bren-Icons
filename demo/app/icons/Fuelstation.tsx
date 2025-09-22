import React from 'react';
import type { IconProps } from '../types';

const Fuelstation: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m10.463 13-1.394 1.812a.33.33 0 0 0 .2.526l1.461.31a.33.33 0 0 1 .177.553L9.177 18M4 10h12"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M4 21V9c0-2.828 0-4.243.879-5.121C5.757 3 7.172 3 10 3c2.828 0 4.243 0 5.121.879C16 4.757 16 6.172 16 9v12H4Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 21h16m-2-7h1.667c.31 0 .465 0 .592.034a1 1 0 0 1 .707.707c.034.127.034.282.034.592V16.5a1.5 1.5 0 0 0 3 0v-6.289c0-.601 0-.902-.086-1.185-.086-.283-.252-.534-.586-1.034l-.773-1.16A1.869 1.869 0 0 0 19 6"/> </svg>
  );
};

export default Fuelstation;
