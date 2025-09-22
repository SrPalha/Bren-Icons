import React from 'react';
import type { IconProps } from '../types';

const Alms: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M13.466 4.022C15.97 4.022 18 6.035 18 8.517s-2.03 4.494-4.534 4.494a4.527 4.527 0 0 1-4.46-3.675"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.998 14.01h-2.393c-.294 0-.584.066-.847.193l-2.04.987a1.947 1.947 0 0 1-.847.193h-1.042c-1.008 0-1.825.79-1.825 1.765 0 .04.027.074.067.085l2.539.701c.455.126.943.082 1.367-.123l2.18-1.054m-6.152-.25-4.59-1.41a1.984 1.984 0 0 0-2.202.753c-.369.51-.219 1.24.318 1.55l7.51 4.33a1.994 1.994 0 0 0 1.566.187l6.39-1.895M2.002 4.52c1.527-.598 3.7-2.057 4.888-2.355 2.633-.53 4.014.25 7.132 1.858-1.312.028-3.076.779-3.944 2.494m0 0H8.294m1.784 0h1.309c.393.029 1.242.266 1.569 1.027.13.305.168.668-.09.851-.347.359-.845.345-1.287.423m0 0c-.508.09-.997.19-1.508.29m1.508-.29-1.508.29m0 0-.342.065m.342-.066-.342.066m0 0c-.797.089-2.739 1.018-3.685 1.278-.322.154-2.903.654-4.028.566"/> </svg>
  );
};

export default Alms;
