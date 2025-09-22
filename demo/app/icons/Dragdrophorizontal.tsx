import React from 'react';
import type { IconProps } from '../types';

const Dragdrophorizontal: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="drag-drop-horizontal"> <path id="Vector" d="M18.001 8V8.00635M12.001 8V8.00635M6.00098 8V8.00635M18.001 15.9937V16M12.001 15.9937V16M6.00098 15.9937V16" stroke="#1B1C1B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Dragdrophorizontal;
