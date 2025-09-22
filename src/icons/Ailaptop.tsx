import React from 'react';
import type { IconProps } from '../types';

const Ailaptop: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.993 14.999V6.965c0-1.894 0-2.84.583-3.429.326-.328.762-.473 1.41-.537h4.98M3.492 16.014 4.012 15h15.873l.548 1.015c1.438 2.662 1.796 3.993 1.25 4.989-.547.996-1.996.996-4.893.996H7.135c-2.897 0-4.346 0-4.892-.996-.546-.996-.188-2.327 1.249-4.989Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M15.436 2.001V3.98m-3.474 1.521h2.045m5.949 0H22m-2.044 2.974H22m-10.038 0h2.045m1.43 1.545V12m3.014-1.98V12M18.44 2v1.98m-3.437 5.989h3.956a1 1 0 0 0 .997-1V4.98a1 1 0 0 0-.997-1h-3.956a.998.998 0 0 0-.996 1v3.989c0 .552.446 1 .996 1Z"/> </svg>
  );
};

export default Ailaptop;
