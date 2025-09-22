import React from 'react';
import type { IconProps } from '../types';

const Touch02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="touch-02"> <path id="Vector" d="M17.1422 21.997C17.0905 20.083 17.2194 19.8525 17.3561 19.4267C17.4929 19.001 18.4492 17.4655 18.7875 16.3685C19.8823 12.8192 18.862 12.0643 17.5016 11.0578C15.9931 9.9416 13.1478 9.37631 11.7367 9.4987V3.74524C11.7367 2.78191 10.9558 2.00098 9.99246 2.00098C9.02914 2.00098 8.24821 2.78191 8.24821 3.74524V9.9651M8.24821 9.9651L6.39745 11.6094C5.15692 12.7822 4.90426 13.4685 4.80689 13.8838C4.61785 14.6963 4.87607 15.575 6.0777 17.3157C7.24627 18.9225 8.18426 20.04 8.24872 20.9844V21.9978M8.24821 9.9651V14.0313" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Touch02;
