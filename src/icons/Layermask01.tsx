import React from 'react';
import type { IconProps } from '../types';

const Layermask01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="layer-mask-01"> <path id="Vector" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#1B1C1B" strokeWidth="1.5"/> <path id="Vector_2" d="M5 20L19 5" stroke="#1B1C1B" strokeWidth="1.5" strokeLinejoin="round"/> <path id="Vector_3" d="M16 9L22 13.8528M12.4128 12.4059L19.3601 18.3634M8 15.6672L15 21.5" stroke="#1B1C1B" strokeWidth="1.5" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Layermask01;
