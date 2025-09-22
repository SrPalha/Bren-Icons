import React from 'react';
import type { IconProps } from '../types';

const Handgrip: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M2.342 19.816c1.719-1.24 2.644-4.196 3.118-6.468.138-.66.197-1.995.954-2.298.432-.174 1 .116 2.135.696.873.445 1.31.668 1.422 1.138.27 1.126-1.552 1.56-1.119 2.71.483 1.284.155 1.659-.784 2.5-.718.643.216 1.457-.2 2.165-1.034 1.761-2.669 2.286-4.832 1.113-.573-.311-1.562-.93-.694-1.556Zm19.316 0c-1.718-1.24-2.643-4.196-3.118-6.468-.138-.66-.196-1.995-.953-2.298-.433-.174-1 .116-2.136.696-.873.445-1.309.668-1.422 1.138-.269 1.121 1.548 1.57 1.12 2.71-.484 1.284-.156 1.659.783 2.5.718.643-.216 1.457.2 2.165 1.035 1.761 2.67 2.286 4.832 1.113.573-.311 1.562-.93.694-1.556Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M14.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m8.5 11.5.75-2.75"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m14.038 6.212 1.511 5.428"/> </svg>
  );
};

export default Handgrip;
