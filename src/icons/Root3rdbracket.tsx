import React from 'react';
import type { IconProps } from '../types';

const Root3rdbracket: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 8h-5.483c-.817 0-1.057.04-1.218.864L9.954 14.47c-.332 1.328-.503 1.524-.834 1.551-.36-.12-.53-.428-1.14-1.68l-.345-.76c-.263-.54-.35-.767-.615-.84-.4-.11-.713.2-1.02.4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M13.104 11.431c.42-.014.876-.032 1.125.384.343.693.887 2.111 1.089 2.562.1.173.162.322.521.442.27.035.66.044.66.044"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M16.74 11.42c-.845 0-1.35.946-1.823 1.539-.61.906-1.236 1.92-2.028 1.893"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 21c1.232 0 2.231-1.151 2.231-2.571 0-2.248-.1-3.742 1.442-5.52.436-.502.436-1.316 0-1.818-1.542-1.777-1.442-3.272-1.442-5.52C20.231 4.151 19.232 3 18 3M6 21c-1.232 0-2.231-1.151-2.231-2.571 0-2.248.1-3.742-1.442-5.52-.436-.502-.436-1.316 0-1.818C3.835 9.353 3.769 7.84 3.769 5.57 3.769 4.151 4.768 3 6 3"/> </svg>
  );
};

export default Root3rdbracket;
