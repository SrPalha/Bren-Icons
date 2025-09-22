import React from 'react';
import type { IconProps } from '../types';

const Swipeup02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="swipe-up-02"> <path id="Vector" d="M18.5 2.00098V8.00098M18.5 2.00098C17.7998 2.00098 16.4915 3.99528 16 4.50098M18.5 2.00098C19.2002 2.00098 20.5085 3.99528 21 4.50098" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_2" d="M15.3917 21.997C15.34 20.083 15.4689 19.8525 15.6056 19.4267C15.7424 19.001 16.6987 17.4655 17.0371 16.3685C18.1318 12.8192 17.1115 12.0643 15.7512 11.0578C14.2426 9.9416 11.3973 9.37631 9.98622 9.4987V3.74524C9.98622 2.78191 9.2053 2.00098 8.24197 2.00098C7.27865 2.00098 6.49772 2.78191 6.49772 3.74524V9.9651M6.49772 9.9651L4.64696 11.6094C3.40643 12.7822 3.15377 13.4685 3.0564 13.8838C2.86737 14.6963 3.12558 15.575 4.32721 17.3157C5.49578 18.9225 6.43377 20.04 6.49823 20.9844V21.9978M6.49772 9.9651V14.0313" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Swipeup02;
