import React from 'react';
import type { IconProps } from '../types';

const Bug02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M3.012 6.598c-.12 1.059.646 3.597 2.865 3.657m12.413-.06c1.078.06 2.697-1.199 2.697-3.597m-.899 14.39c.06-1.38-.84-3.514-2.579-3.574M3.901 20.988c-.061-1.388.858-3.537 2.636-3.597m-3.525-3.598h2.206m15.782 0h-2.172m-6.835 0v-2.938M16.49 3l-1.799 1.799M7.496 3l1.799 1.799M6.956 8.611c1.619 1.164 5.636 2.842 10.013.072"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M16.826 7.677c-3.574-4.976-8.13-2.578-9.75.144-1.055 1.775-2.698 6.068.42 10.745 3.358 4.101 7.315 2.243 8.934.084 1.56-1.859 3.094-6.655.396-10.973Z"/> </svg>
  );
};

export default Bug02;
