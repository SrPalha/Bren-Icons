import React from 'react';
import type { IconProps } from '../types';

const Kite: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="kite"> <path id="Vector" d="M12 2C7.71429 4.40741 4 8 2 14C5 12 9 11 12 14C15 11 19 12 22 14C20 8 16.2857 4.40741 12 2Z" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_2" d="M11.9999 14C10.3912 14.7327 7.69631 15.8188 8.02332 18" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_3" d="M11.6716 14C13.0709 17.203 9.38763 19.5 11.9053 22" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_4" d="M12 14C14 14 13.5 18.5 15 19" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_5" d="M12 14V2" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_6" d="M10 7.00036C10.2913 6.73558 10.6667 6.52338 11.0134 6.36376C11.379 6.19547 11.5618 6.11133 12 6.11133C12.4382 6.11133 12.621 6.19547 12.9866 6.36376C13.3333 6.52338 13.7087 6.73558 14 7.00036" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Kite;
