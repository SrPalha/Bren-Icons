import React from 'react';
import type { IconProps } from '../types';

const Mentoring: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m12 22-2-6H2l2 6h8Zm0 0h4m-4-9v-.5c0-1.886 0-2.828-.586-3.414C10.828 8.5 9.886 8.5 8 8.5c-1.886 0-2.828 0-3.414.586C4 9.672 4 10.614 4 12.5v.5"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M19 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-9-9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M14 17.5h6a2 2 0 0 1 2 2v.5a2 2 0 0 1-2 2h-1"/> </svg>
  );
};

export default Mentoring;
