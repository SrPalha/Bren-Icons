import React from 'react';
import type { IconProps } from '../types';

const Slidersvertical: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="sliders-vertical"> <path id="Vector" d="M5.00025 20L5 14" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_2" d="M5 11V4" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_3" d="M9 8H15" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_4" d="M2 14H8" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_5" d="M16 12H22" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_6" d="M11.9998 8L12 4" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_7" d="M12.0002 20L12 11" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_8" d="M19 12V4" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_9" d="M19.0002 20L19 15" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> </g> </svg>
  );
};

export default Slidersvertical;
