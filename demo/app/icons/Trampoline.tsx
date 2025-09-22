import React from 'react';
import type { IconProps } from '../types';

const Trampoline: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="trampoline"> <path id="Vector" d="M2 10V18" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_2" d="M12 16V20" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_3" d="M22 10V18" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_4" d="M12 16C17.5228 16 22 13.3137 22 10C22 6.68629 17.5228 4 12 4C6.47715 4 2 6.68629 2 10C2 13.3137 6.47715 16 12 16Z" stroke="#1B1C1B" strokeWidth="1.5" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Trampoline;
