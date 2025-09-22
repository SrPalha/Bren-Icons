import React from 'react';
import type { IconProps } from '../types';

const Handbag01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M19.174 12.926v-.806c0-1.47 0-2.206-.45-2.663C18.273 9 17.548 9 16.098 9H7.901c-1.45 0-2.174 0-2.624.457-.45.457-.45 1.192-.45 2.663v.806c0 .376 0 .564-.034.748-.032.184-.098.36-.228.712l-.217.588c-1.18 3.192-1.769 4.788-1.005 5.907C4.107 22 5.787 22 9.146 22h5.708c3.36 0 5.039 0 5.803-1.12.764-1.118.174-2.714-1.005-5.906l-.217-.588c-.13-.352-.196-.528-.229-.712-.032-.184-.032-.372-.032-.748Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M16 11c0-6-2.134-9-4-9s-4 3-4 9m4 5c1.25 0 2.944 2.628 1.355 2.895a8.823 8.823 0 0 1-2.71 0C9.056 18.628 10.75 16 12 16Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.94 17.005c1.27-.132 3.508-.878 5.115-2.063m-8.94 2.089C8.845 16.9 6.607 16.153 5 14.97"/> </svg>
  );
};

export default Handbag01;
