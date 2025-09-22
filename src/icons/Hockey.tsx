import React from 'react';
import type { IconProps } from '../types';

const Hockey: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="hockey"> <path id="Vector" d="M11.8614 19.224L20.8481 3.72126C21.1689 3.16783 20.9654 2.47169 20.3905 2.15561C19.8259 1.8452 19.1047 2.01295 18.754 2.53628L8.61227 17.6689C8.23552 18.2311 7.46084 18.4113 6.85433 18.0778C6.04998 17.6356 6.17032 16.8476 6.44582 16.1473C6.70887 15.4787 6.42574 14.727 5.77639 14.37C4.91469 13.8963 4.03029 14.3288 3.57111 15.0861C2.25235 17.2611 3.35339 20.3548 5.48365 21.526C7.75091 22.7724 10.5962 21.4065 11.8614 19.224Z" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_2" d="M18.5 22C19.8807 22 21 20.8807 21 19.5C21 18.1193 19.8807 17 18.5 17C17.1193 17 16 18.1193 16 19.5C16 20.8807 17.1193 22 18.5 22Z" stroke="#1B1C1B" strokeWidth="1.5" strokeLinejoin="round"/> <path id="Vector_3" d="M16 7L18 8.5" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Hockey;
