import React from 'react';
import type { IconProps } from '../types';

const Letterspacing: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="letter-spacing"> <path id="Vector" d="M2 22V2" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_2" d="M22 22V2" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_3" d="M7 18L10.6534 7.48635C10.9447 6.81279 11.4878 5.99657 11.9467 6.00001C12.6263 6.00511 12.9827 6.70758 13.3774 7.48635C13.7721 8.26513 17 18 17 18M9.01312 12.9912L14.8945 12.9293" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Letterspacing;
