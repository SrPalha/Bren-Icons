import React from 'react';
import type { IconProps } from '../types';

const Moveto: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="move-to"> <path id="Vector" d="M9 5H19" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_2" d="M5 5H5.00898" stroke="#1B1C1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_3" d="M5 11.0039H5.00898" stroke="#1B1C1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_4" d="M5 17.0073H5.00898" stroke="#1B1C1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_5" d="M9 11.0039H19" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_6" d="M9 17.0074H19M19 17.0074C19.0035 16.7467 18.8202 16.4896 18.5964 16.2998L16.9939 15.0259M19 17.0074C18.9966 17.2588 18.8142 17.5135 18.5964 17.7149L16.9939 19.0002" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> </g> </svg>
  );
};

export default Moveto;
