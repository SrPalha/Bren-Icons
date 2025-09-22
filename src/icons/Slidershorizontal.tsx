import React from 'react';
import type { IconProps } from '../types';

const Slidershorizontal: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="sliders-horizontal"> <path id="Vector" d="M4 5.00024L10 5" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_2" d="M13 5H20" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_3" d="M16 9V15" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_4" d="M10 2V8" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_5" d="M12 16V22" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_6" d="M16 12L20 12.0002" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_7" d="M4 12.0002L13 12" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_8" d="M12 19H20" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_9" d="M4 19.0002L9 19" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> </g> </svg>
  );
};

export default Slidershorizontal;
