import React from 'react';
import type { IconProps } from '../types';

const Rocket02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M9.667 7.714v-1.3c0-1.466.611-2.728 1.512-3.793.35-.414.526-.621.821-.621.295 0 .47.207.821.621.9 1.065 1.512 2.327 1.512 3.792v1.301c0 1.072 0 1.376.648 1.845.518.333 1.019.655 1.019 1.3 0 .784-.333 1.141-1.064 1.141H9.064C8.334 12 8 11.643 8 10.86c0-.646.501-.968 1.02-1.301.647-.469.647-.773.647-1.845Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 22c1.38 0 2.5-1.194 2.5-2.667 0-1.472-1.12-2.666-2.5-2.666C19.5 15.194 18.38 14 17 14M4.5 22C3.12 22 2 20.806 2 19.333c0-1.472 1.12-2.666 2.5-2.666C4.5 15.194 5.62 14 7 14"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M10 15v5m4-5v2"/> </svg>
  );
};

export default Rocket02;
