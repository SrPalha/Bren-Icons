import React from 'react';
import type { IconProps } from '../types';

const Propertyedit: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M21 11.5c0-4.478 0-6.718-1.391-8.109C18.217 2 15.979 2 11.5 2 7.022 2 4.782 2 3.391 3.391S2 7.021 2 11.5c0 4.478 0 6.718 1.391 8.109 1.339 1.338 3.462 1.389 7.609 1.39"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M2 7h19"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 16h1.5M6 16h1m3-4h6M6 12h1"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M21.263 14.872c-.9-1.007-1.442-.947-2.042-.767-.42.06-1.863 1.737-2.463 2.271-.987.972-1.977 1.972-2.043 2.102-.187.303-.36.84-.444 1.438-.157.899-.467 1.866-.096 1.997.18.24 1.08-.08 1.982-.211.6-.108 1.021-.228 1.322-.408.42-.251 1.201-1.138 2.547-2.456.844-.886 1.658-1.498 1.898-2.097.24-.899-.12-1.378-.66-1.87Z"/> </svg>
  );
};

export default Propertyedit;
