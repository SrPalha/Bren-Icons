import React from 'react';
import type { IconProps } from '../types';

const Deliveryreturn01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.527 15.977h3.24c1.278-.021 3.233.652 3.233 3.08C22 21.577 19.588 22 18.766 22H7.946C5.438 22 2 21.491 2 17.17V8.002h20v4.517m-6.473 3.457a.793.793 0 0 1 .273-.58l1.702-1.42m-1.975 2a.794.794 0 0 0 .275.623l1.7 1.383"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m2.006 7.991.921-2.301c.748-1.788 1.122-2.682 1.88-3.186.758-.503 1.73-.503 3.674-.503h7.02c1.944 0 2.916 0 3.674.503.758.504 1.131 1.398 1.88 3.186L22 7.995m-10.037.006v-6m-2 10h4"/> </svg>
  );
};

export default Deliveryreturn01;
