import React from 'react';
import type { IconProps } from '../types';

const Tap02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="tap-02"> <path id="Vector" d="M16.2499 22.0023C16.2802 20.1373 16.213 20.5225 16.3656 20.048C16.5182 19.5735 17.1087 18.7493 17.4741 17.6995C18.4967 14.7608 17.9524 13.5548 16.4382 12.6185C14.8428 11.632 13.2322 11.2493 11.8211 11.3715V6.7346C11.8211 5.77269 11.2755 5.03027 10.3121 5.03027C9.34882 5.03027 8.86277 5.86791 8.86277 6.82981L8.91343 11.6654M8.91343 11.6654L6.83244 13.7312C5.72823 14.8815 6.02681 15.7061 6.07555 16.0594C6.35081 16.8162 6.34577 16.8987 7.5474 18.6368C8.63746 20.2135 8.89521 20.5487 8.89521 21.3339V22.0023M8.91343 11.6654V15.1918" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_2" d="M6.49776 6.02319C6.43198 5.10322 6.99798 3.28328 8.55112 2.52231C9.19157 2.13281 10.9495 1.52974 12.6309 2.60432C14.2879 3.66333 14.3997 5.22472 14.5039 6.01284" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Tap02;
