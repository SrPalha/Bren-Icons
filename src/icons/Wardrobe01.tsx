import React from 'react';
import type { IconProps } from '../types';

const Wardrobe01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 20v2m12-2v2M3 14V8c0-2.828 0-4.243.93-5.121C4.86 2 6.358 2 9.353 2h5.294c2.995 0 4.492 0 5.423.879C21 3.757 21 5.172 21 8v6c0 2.828 0 4.243-.93 5.121-.93.879-2.428.879-5.423.879H9.353c-2.995 0-4.492 0-5.423-.879C3 18.243 3 16.828 3 14Zm9 6V2M3 14h9M3 8h9m3 3.5v-1"/> </svg>
  );
};

export default Wardrobe01;
