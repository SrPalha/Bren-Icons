import React from 'react';
import type { IconProps } from '../types';

const Flipright: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="flip-right"> <path id="Vector" d="M22 9.66676V14.3334M16.5 3.01509C16.0004 2.99793 15.5001 2.99705 15 2.99855M16.5 20.9849C16.0004 21.0021 15.5001 21.003 15 21.0015M19.2547 3.53709C20.213 4.02122 20.9914 4.80249 21.4718 5.76305M21.5 18.1797C21.0221 19.1665 20.232 19.9692 19.2547 20.4629" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_2" d="M12 5.50502C12 3.54695 11.3622 3.00695 9.5 3.00695C6.96832 3.00695 4.04633 2.75702 2.60289 5.25521C2 6.29863 2 7.69948 2 10.5012V13.4988C2 16.3005 2 17.7014 2.60289 18.7448C4.04633 21.243 6.96832 20.9931 9.5 20.9931C11.3622 20.9931 12 20.453 12 18.495V5.50502Z" stroke="#1B1C1B" strokeWidth="1.5"/> </g> </svg>
  );
};

export default Flipright;
