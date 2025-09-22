import React from 'react';
import type { IconProps } from '../types';

const Okfinger1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.375 22v-1.283a6.753 6.753 0 0 0-.693-2.982l-.291-.592A8.683 8.683 0 0 1 4.5 13.31V8.19c0-.788.63-1.428 1.406-1.428.777 0 1.407.64 1.407 1.428m0 0V4.381c0-.789.63-1.429 1.406-1.429.776 0 1.406.64 1.406 1.429v3.333m-2.813.476v3.334M14.813 22v-1.279c.003-1.143 1.196-1.725 2.172-2.294 1.116-.651 2.01-1.702 2.423-2.966.271-.832-.48-1.555-1.378-1.555-.897 0-1.66.784-2.31 1.385a2.047 2.047 0 0 1-.277.217c-1.268.809-2.961-.164-2.961-1.602 0-1.438 1.693-2.412 2.961-1.603.316.166.577.386.785.615.473.52 1.096.988 1.81.988.913 0 1.679-.737 1.408-1.585a5.284 5.284 0 0 0-5.042-3.652c-.997 0-1.466.282-1.466.282l2.145-5.004C15.457 3.018 14.785 2 13.796 2c-.526 0-1.007.302-1.243.78l-2.428 4.934m0 0-.448.91"/> </svg>
  );
};

export default Okfinger1;
