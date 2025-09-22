import React from 'react';
import type { IconProps } from '../types';

const Letterspacing1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="letter-spacing">     <g class="letter-spacing">       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 22V2m20 20V2M7 18l3.6534-10.51365c.2913-.67356.8344-1.48978 1.2933-1.48634.6796.0051 1.036.70757 1.4307 1.48634C13.7721 8.26513 17 18 17 18m-7.98688-5.0088 5.88138-.0619" class="Vector"/>     </g>   </g> </svg>
  );
};

export default Letterspacing1;
