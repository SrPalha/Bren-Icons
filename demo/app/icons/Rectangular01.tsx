import React from 'react';
import type { IconProps } from '../types';

const Rectangular01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M7.69 2.438 5.353 4.22c-.972.741-1.458 1.112-1.335 1.446C4.142 6 4.764 6 6.009 6H16c.364 0 .547 0 .715-.056.169-.057.311-.165.596-.382l2.335-1.781c.972-.741 1.458-1.112 1.335-1.447C20.858 2 20.236 2 18.991 2H9c-.364 0-.547 0-.715.056-.169.057-.311.165-.596.382Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.019 21.665c.123.335.745.335 1.99.335H16c.364 0 .547 0 .715-.057M4.02 21.665c-.123-.334.363-.705 1.335-1.446l2.335-1.781c.285-.217.427-.326.596-.382M4.02 21.665v-16m12.696 16.278c.169-.056.311-.165.596-.382l2.335-1.78c.972-.742 1.458-1.112 1.335-1.447v-16m-4.266 19.61v-16m-8.43 12.112C8.453 18 8.635 18 9 18h5m-5.715.056V8.999"/> </svg>
  );
};

export default Rectangular01;
