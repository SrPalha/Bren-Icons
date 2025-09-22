import React from 'react';
import type { IconProps } from '../types';

const Televisiontable: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 14H6c-2.482 0-3 .518-3 3v2c0 2.482.518 3 3 3h12c2.482 0 3-.518 3-3v-2c0-2.482-.518-3-3-3ZM7 18h1m8 0h1M6 7V6c0-1.886 0-2.828.586-3.414C7.172 2 8.114 2 10 2h4c1.886 0 2.828 0 3.414.586C18 3.172 18 4.114 18 6v1c0 1.886 0 2.828-.586 3.414C16.828 11 15.886 11 14 11h-4c-1.886 0-2.828 0-3.414-.586C6 9.828 6 8.886 6 7Zm4.5 4-.5 3m3.5-3 .5 3m-2 0v8"/> </svg>
  );
};

export default Televisiontable;
