import React from 'react';
import type { IconProps } from '../types';

const Locationoffline03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M14 14c-.527.317-1.34.5-2 .5A3.5 3.5 0 0 1 8.5 11c0-.66.183-1.473.5-2m2.5-1.465a3.5 3.5 0 0 1 3.965 3.965"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M18 18c-1.435 1.483-3.388 2.726-5.073 3.757a1.886 1.886 0 0 1-1.854 0C7.203 19.362 3 15.914 3 10.926 3 8.834 3.755 7.03 5 5.5m2.5-2.272A8.91 8.91 0 0 1 12 2c4.87 0 9 4.033 9 8.926 0 1.691-.486 3.211-1.28 4.574"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m2 2 20 20"/> </svg>
  );
};

export default Locationoffline03;
