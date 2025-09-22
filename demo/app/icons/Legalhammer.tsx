import React from 'react';
import type { IconProps } from '../types';

const Legalhammer: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.998 2c-2.85 0-4.697 2.019-6.882 2.755-.888.3-1.333.449-1.512.66-.18.21-.233.519-.338 1.135-1.127 6.596 1.336 12.694 7.209 15.068.631.255.947.382 1.526.382.58 0 .896-.128 1.527-.383 5.873-2.373 8.333-8.471 7.206-15.067-.106-.616-.158-.925-.338-1.136-.18-.21-.624-.36-1.512-.659C16.698 4.019 14.848 2 11.998 2Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.833 12.167c1.055 1.055 2.445 2.127 2.445 2.127l1.905-1.905s-1.072-1.39-2.127-2.445C13 8.89 11.61 7.817 11.61 7.817L9.706 9.722s1.072 1.39 2.127 2.445Zm0 0L8.5 15.5m8-3.429-2.54 2.54M11.93 7.5l-2.54 2.54"/> </svg>
  );
};

export default Legalhammer;
