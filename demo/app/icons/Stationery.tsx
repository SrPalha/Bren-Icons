import React from 'react';
import type { IconProps } from '../types';

const Stationery: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M21 17.4c0 1.697 0 2.546-.65 3.073-.652.527-1.7.527-3.794.527h-1.112c-2.095 0-3.142 0-3.793-.527C11 19.946 11 19.097 11 17.4V6.6c0-1.697 0-2.546.65-3.073C12.303 3 13.35 3 15.445 3h1.112c2.095 0 3.142 0 3.793.527.65.527.65 1.376.65 3.073v10.8ZM3 5.041c0-.962 0-1.443.293-1.742C3.586 3 4.057 3 5 3c.943 0 1.414 0 1.707.299C7 3.598 7 4.079 7 5.04v10.847c0 .907 0 1.36-.076 1.8a5.18 5.18 0 0 1-.346 1.167c-.176.408-.422.785-.915 1.54-.22.337-.33.505-.468.565a.492.492 0 0 1-.39 0c-.138-.06-.248-.228-.468-.565-.493-.755-.74-1.132-.915-1.54a5.18 5.18 0 0 1-.346-1.167C3 17.248 3 16.795 3 15.888V5.04Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.5 16.5h2m-2-4.5h2m-2-4.5h2"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M7 7c0 .552-.895 1-2 1s-2-.448-2-1"/> </svg>
  );
};

export default Stationery;
