import React from 'react';
import type { IconProps } from '../types';

const Cardiogram02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M19.463 3.994c-2.682-1.645-5.023-.982-6.429.074-.576.433-.864.65-1.034.65-.17 0-.458-.217-1.034-.65-1.406-1.056-3.747-1.719-6.429-.074-3.519 2.159-4.315 9.28 3.803 15.29C9.886 20.427 10.659 21 12 21c1.341 0 2.114-.572 3.66-1.717 8.118-6.008 7.322-13.13 3.803-15.289Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 13h-1c-.455 0-.934.035-1.343-.279-.156-.12-.26-.285-.466-.615L11.5 9l-3 5-1.557-2.168c-.256-.307-.506-.619-.845-.742C5.852 11 5.568 11 5 11H3"/> </svg>
  );
};

export default Cardiogram02;
