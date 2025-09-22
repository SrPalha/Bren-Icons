import React from 'react';
import type { IconProps } from '../types';

const Hold3: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.5 9.5v4.667c0 2.173 0 3.26-.331 4.125a4.992 4.992 0 0 1-2.867 2.876c-.863.332-1.946.332-4.112.332-1.137 0-1.705 0-2.233-.117a4.978 4.978 0 0 1-2.183-1.094c-.41-.355-.75-.81-1.433-1.722l-3.004-4.018a1.696 1.696 0 0 1 .033-2.073 1.683 1.683 0 0 1 2.51-.14l1.62 1.628V6a1.5 1.5 0 1 1 3 0m0 0V4a1.5 1.5 0 0 1 3 0v2m-3 0v4.5m3-4.5a1.5 1.5 0 0 1 3 0v2m-3-2v4.5m3-2.5a1.5 1.5 0 0 1 3 0v2.5m-3-2.5v2.5"/> </svg>
  );
};

export default Hold3;
