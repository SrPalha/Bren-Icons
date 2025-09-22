import React from 'react';
import type { IconProps } from '../types';

const Swipeup6: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.5 1.998v6m0-6c-.7 0-2.008 1.994-2.5 2.5m2.5-2.5c.7 0 2.009 1.994 2.5 2.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M6.512 13.515V3.485a1.489 1.489 0 0 1 2.98 0v5.203m0 0v2.323m0-2.323c.804-1.119 2.607-.746 2.99.993a.885.885 0 0 1 .016.087m0 0c.011.078.015.157.015.237v1.002m-.015-1.239c.493-1.35 2.758-.835 3.004 1.093m0 0v1.146m0-1.146c.404-1.49 3.056-.449 2.999 1.293v3.179c-.003 1.726-.291 2.978-1.318 4.007-.948 1.132-.724 1.765-.748 2.662M6.512 8.99c-1.319 1.193-2.816 2.825-3.007 3.211-.889 1.352-.573 2.413.691 4.216.94 1.34 2.202 2.835 2.268 2.91.673.762.541 1.368.541 2.663"/> </svg>
  );
};

export default Swipeup6;
