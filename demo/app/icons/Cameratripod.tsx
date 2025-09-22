import React from 'react';
import type { IconProps } from '../types';

const Cameratripod: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M2 10c0-3.507 0-5.26.908-6.44.166-.216.352-.414.554-.592C4.57 2 6.212 2 9.5 2h5c3.288 0 4.931 0 6.038.968.202.178.388.376.554.592C22 4.74 22 6.493 22 10c0 3.507 0 5.26-.908 6.44a4.147 4.147 0 0 1-.554.591C19.43 18 17.788 18 14.5 18h-5c-3.287 0-4.931 0-6.038-.968a4.146 4.146 0 0 1-.554-.592C2 15.26 2 13.507 2 10Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m17 22-4.167-4M7 22l4.167-4M12 18v5"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 12.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/> </svg>
  );
};

export default Cameratripod;
