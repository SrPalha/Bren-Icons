import React from 'react';
import type { IconProps } from '../types';

const Bowtie: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 9.502c-1-1-3.979-3.723-5.34-3.488-3.547.613-3.547 11.363 0 11.976 1.361.235 4.34-2.487 5.34-3.488m4-5c1-1 3.979-3.723 5.34-3.488 3.547.613 3.547 11.363 0 11.976-1.361.235-4.34-2.487-5.34-3.488"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.5 12.002c0-2.099.622-3 2.5-3 1.749 0 2.5.746 2.5 3 0 2.099-.622 3-2.5 3-1.878 0-2.5-.901-2.5-3Zm-.5 0H8m8 0h-1"/> </svg>
  );
};

export default Bowtie;
