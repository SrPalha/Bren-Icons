import React from 'react';
import type { IconProps } from '../types';

const Pointingleft6: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 4.5h5.998M2 4.5C2 3.8 3.994 2.492 4.5 2M2 4.5C2 5.2 3.994 6.508 4.5 7m6.575 6.005H7.972m0 0H3.504a1.503 1.503 0 1 1 0-3.003h5.463m-.995 3.003L8 14.06c.018.71.406 1.327.978 1.667m-.01-5.725h4.561m-4.561 0 2.759-2.594c1.867-1.572 3.228-.746 3.984-.166l3.973 2.88a2 2 0 0 0 1.173.381h1.133M8.977 15.727c.3.18.65.282 1.024.282h1.004m-2.028-.282.054 1.336c.017.674.367 1.264.89 1.613m0 0a2 2 0 0 0 1.113.336h1.003m-2.115-.336.269 1.59c.135 1 .993 1.743 2.003 1.734h3.548c.604 0 1.21-.049 1.784-.238.478-.157 1.004-.377 1.347-.647.74-.582 1.003-.99 1.639-1.095.508-.085 1.145-.097 1.489-.097"/> </svg>
  );
};

export default Pointingleft6;
