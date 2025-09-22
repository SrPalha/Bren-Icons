import React from 'react';
import type { IconProps } from '../types';

const Rotateright3: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m16.376 10.46.444.766c.49.845.199 1.925-.65 2.413m0 0-.77.442m.77-.442a.89.89 0 0 1 1.212.324c.49.845.2 1.926-.65 2.413m0 0-.768.442m.769-.442a.753.753 0 0 1 1.08.386l.108.287a1.763 1.763 0 0 1-.775 2.15l-1.132.65c-1.671.96-2.507 1.44-3.32 1.57-.47.074-1.187-.031-1.723-.137a1.96 1.96 0 0 0-1.357.204L8.719 22m6.119-10.656 4.997-2.871a1.322 1.322 0 0 0 .488-1.81 1.335 1.335 0 0 0-1.82-.485l-7.66 4.4.531-1.957a1.487 1.487 0 0 0-1.221-1.86 1.507 1.507 0 0 0-1.608.891l-1.937 4.786c-.371.915-1.248 1.8-2.107 2.294m10.636-9.766c-.397.395-2.124.281-2.76.202m2.76-.202c.396-.396.408-2.328.328-2.963m-.328 2.963c-1.021-1.769-5.081-4.59-9.11-1.769C4.082 4.56 3.808 5.42 3.499 5.995"/> </svg>
  );
};

export default Rotateright3;
