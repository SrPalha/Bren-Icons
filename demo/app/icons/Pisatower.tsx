import React from 'react';
import type { IconProps } from '../types';

const Pisatower: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M2 21h20m-5.54-4.582 1.288-5.022m-1.289 5.022.962.27m-.962-.27L15.283 21m1.176-4.582L7.8 13.996m9.95-2.6 1.289-5.022m-1.29 5.022.963.269m-.963-.27-8.66-2.421m-1.29 5.022 1.29-5.022m-1.29 5.022-.962-.27m.962.27L6 21M19.038 6.374l-1.925-.538m1.925.538.962.269M9.087 8.973l1.29-5.021m-1.29 5.022-.962-.27m8.988-2.868L12.301 4.49m4.812 1.346.452-1.762a1.014 1.014 0 0 0-.702-1.23l-2.883-.807a.999.999 0 0 0-1.234.721L12.3 4.49m-1.924-.538-.963-.27m.963.27 1.924.538"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m10.5 21 .56-2M14 8.5l-.478 1.708m-1.41 5.034.454-1.619"/> </svg>
  );
};

export default Pisatower;
