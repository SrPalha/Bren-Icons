import React from 'react';
import type { IconProps } from '../types';

const Dragdropvertical: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="drag-drop-vertical"> <path id="Vector" d="M8 6H8.00635M8 12H8.00635M8 18H8.00635M15.9937 6H16M15.9937 12H16M15.9937 18H16" stroke="#1B1C1B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Dragdropvertical;
