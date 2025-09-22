import React from 'react';
import type { IconProps } from '../types';

const Resize1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 4h4m-4 0c0 .56 1.494 1.607 2 2m-2-2c0-.56 1.494-1.607 2-2M7 4H3m4 0c0-.56-1.494-1.607-2-2m2 2c0 .56-1.494 1.607-2 2m4.835 16v-.949c0-.645-.209-1.273-.595-1.791l-3.658-4.903c-.422-.566-.759-1.267-.48-1.915.45-1.049 1.723-1.73 3.28-.158l1.597 1.71V3.57c.056-2.044 3.344-2.145 3.485 0v5.94c1.48-.192 8.452.852 7.435 5.272l-.143.633c-.206.92-.814 2.557-1.484 3.514-.698.997-.452 1.99-.452 3.07"/> </svg>
  );
};

export default Resize1;
