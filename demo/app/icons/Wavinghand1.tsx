import React from 'react';
import type { IconProps } from '../types';

const Wavinghand1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.124 5.75a1.451 1.451 0 0 1 1.858-.864 1.443 1.443 0 0 1 .867 1.851l-.661 1.81M14.125 5.75l.66-1.81a1.443 1.443 0 0 0-.866-1.851 1.451 1.451 0 0 0-1.858.863l-.495 1.358m2.558 1.44-1.817 4.978m3.88-2.18a1.451 1.451 0 0 1 1.859-.863 1.443 1.443 0 0 1 .866 1.852l-2.038 5.58c-.718 1.968-1.078 2.951-1.664 3.625-.34.391-1.012.803-1.533 1.089a2.12 2.12 0 0 0-.989 1.116L12.303 22m3.885-13.453L14.7 12.62m-3.134-8.31a1.443 1.443 0 0 0-.867-1.852 1.451 1.451 0 0 0-1.858.864L6.044 10.98 5.11 8.975a1.63 1.63 0 0 0-2.326-.7 1.631 1.631 0 0 0-.714 1.865l1.749 5.347c.335 1.023.226 2.373-.143 3.385m7.89-14.562L9.913 8.834"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M20.83 13c.547 1.635-.273 3.426-1.83 4"/> </svg>
  );
};

export default Wavinghand1;
