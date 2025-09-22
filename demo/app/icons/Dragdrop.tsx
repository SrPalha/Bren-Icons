import React from 'react';
import type { IconProps } from '../types';

const Dragdrop: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="drag-drop"> <path id="Vector" d="M6 6H6.00634M6 12H6.00634M6 18H6.00634M11.9968 6H12.0032M11.9968 12H12.0032M11.9968 18H12.0032M17.9937 6H18M17.9937 12H18M17.9937 18H18" stroke="#1B1C1B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Dragdrop;
