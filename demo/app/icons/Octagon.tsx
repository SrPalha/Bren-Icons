import React from 'react';
import type { IconProps } from '../types';

const Octagon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M13.514 2c1.227 0 1.84 0 2.391.228.551.229.985.662 1.852 1.53l2.485 2.485c.867.867 1.301 1.3 1.53 1.852.228.55.228 1.164.228 2.39v3.03c0 1.226 0 1.84-.229 2.39-.228.552-.662.985-1.529 1.852l-2.485 2.486c-.867.867-1.3 1.3-1.852 1.529-.551.228-1.164.228-2.39.228h-3.03c-1.226 0-1.84 0-2.39-.228-.552-.229-.985-.662-1.853-1.53l-2.485-2.485c-.867-.867-1.3-1.3-1.529-1.852C2 15.355 2 14.741 2 13.515v-3.03c0-1.226 0-1.84.228-2.39.229-.552.662-.985 1.53-1.852l2.484-2.486c.868-.867 1.301-1.3 1.852-1.529C8.646 2 9.26 2 10.485 2h3.03Z"/> </svg>
  );
};

export default Octagon;
