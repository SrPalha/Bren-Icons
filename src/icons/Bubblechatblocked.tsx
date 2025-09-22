import React from 'react';
import type { IconProps } from '../types';

const Bubblechatblocked: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.5 18.835a10.226 10.226 0 0 1-6.5 2.298c-.65 0-1.297-.06-1.935-.18-.459-.085-.688-.128-.848-.104-.16.024-.388.145-.842.387a6.496 6.496 0 0 1-4.224.657 5.296 5.296 0 0 0 1.087-2.35c.1-.53-.148-1.045-.52-1.422C3.034 16.408 2 14.1 2 11.56S3.033 6.713 4.719 5M7.5 3.021A10.326 10.326 0 0 1 12 2c5.522 0 10 4.284 10 9.567 0 1.6-.41 3.108-1.137 4.433"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m2 2 20 20"/> </svg>
  );
};

export default Bubblechatblocked;
