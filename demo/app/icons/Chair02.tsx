import React from 'react';
import type { IconProps } from '../types';

const Chair02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 15v7m10-7v7"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 11c-1.522 0-3.13.293-4.392.684-.95.294-1.714 1.638-1.596 2.729.044.404.357.587.686.587h10.604c.33 0 .642-.183.686-.587.118-1.091-.646-2.435-1.596-2.73C15.131 11.294 13.522 11 12 11Z"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="m7.084 12-.366-3.713c-.255-2.587-.382-3.88.169-4.808C7.924 1.734 10.24 2.017 12 2.017c1.76 0 4.076-.283 5.113 1.462.551.928.424 2.221.169 4.808L16.916 12"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 18h10"/> </svg>
  );
};

export default Chair02;
