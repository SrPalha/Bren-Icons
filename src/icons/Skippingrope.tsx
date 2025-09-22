import React from 'react';
import type { IconProps } from '../types';

const Skippingrope: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M7.994 5.518c0 1.93 1.794 3.496 4.006 3.496 2.213 0 4.006-1.565 4.006-3.496S14.213 2.02 12 2.02c-2.212 0-4.006 1.566-4.006 3.497Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.51 12c-.846.017-1.645.208-1.914.43-.308.466.393 1.505.5 1.942l-.352 2.863-.24 2.512c-.145 2.67 3.873 3.323 3.988 0l-.612-5.32c.266-.797.91-1.851.439-2.098-.485-.254-1.16-.342-1.808-.33Zm0 0c-.047-1.198-.116-3.7.274-4.492M19.49 12c.846.017 1.645.208 1.914.43.308.466-.393 1.505-.5 1.942l.352 2.863.24 2.512c.145 2.67-3.873 3.323-3.988 0l.612-5.32c-.266-.797-.91-1.851-.439-2.098.485-.254 1.16-.342 1.808-.329Zm0 0c.039-.986.098-2.729-.105-3.86a8.088 8.088 0 0 0-.35-1.26C17.528 2.608 10.81-.615 6.01 4.988"/> </svg>
  );
};

export default Skippingrope;
