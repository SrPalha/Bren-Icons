import React from 'react';
import type { IconProps } from '../types';

const Paragraph: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="paragraph"> <path id="Vector" d="M15 3V21M15 3H10M15 3H21M10 3H7.5C5.01472 3 3 5.01472 3 7.5C3 9.98528 5.01472 12 7.5 12H10M10 3V12M10 12V21" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Paragraph;
