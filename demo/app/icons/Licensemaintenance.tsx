import React from 'react';
import type { IconProps } from '../types';

const Licensemaintenance: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="license-maintenance"> <path id="Vector" d="M11.5294 22H10.4706C6.47751 22 4.48098 22 3.24049 20.8284C2 19.6569 2 17.7712 2 14V10C2 6.22876 2 4.34315 3.24049 3.17157C4.48098 2 6.47752 2 10.4706 2H11.5294C15.5225 2 17.519 2 18.7595 3.17157C20 4.34315 20 6.22876 20 10V10.5" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_2" d="M7 7H15" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_3" d="M7 12H12" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_4" d="M18 20.7143V22M18 20.7143C16.8432 20.7143 15.8241 20.1461 15.2263 19.2833M18 20.7143C19.1568 20.7143 20.1759 20.1461 20.7737 19.2833M15.2263 19.2833L14.0004 20.0714M15.2263 19.2833C14.8728 18.773 14.6667 18.1597 14.6667 17.5C14.6667 16.8403 14.8727 16.2271 15.2262 15.7169M20.7737 19.2833L21.9996 20.0714M20.7737 19.2833C21.1272 18.773 21.3333 18.1597 21.3333 17.5C21.3333 16.8403 21.1273 16.2271 20.7738 15.7169M18 14.2857C19.1569 14.2857 20.1761 14.854 20.7738 15.7169M18 14.2857C16.8431 14.2857 15.8239 14.854 15.2262 15.7169M18 14.2857V13M20.7738 15.7169L22 14.9286M15.2262 15.7169L14 14.9286" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> </g> </svg>
  );
};

export default Licensemaintenance;
