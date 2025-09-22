import React from 'react';
import type { IconProps } from '../types';

const Documentattachment: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="document-attachment"> <path id="Vector" d="M21 11V10C21 6.22876 21 4.34315 19.7595 3.17157C18.519 2 16.5225 2 12.5294 2H11.4706C7.47752 2 5.48098 2 4.24049 3.17157C3 4.34315 3 6.22876 3 10V14C3 17.7712 3 19.6569 4.24049 20.8284C5.48098 22 7.47751 22 11.4706 22H12" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_2" d="M8 7H16" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_3" d="M8 12H13" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_4" d="M21 20.6471V17C21 15.5706 19.6569 14 18 14C16.3431 14 15 15.5706 15 17V20.5C15 21.2797 15.7326 22 16.6364 22C17.5401 22 18.2727 21.2797 18.2727 20.5V17.7647" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> </g> </svg>
  );
};

export default Documentattachment;
