import React from 'react';
import type { IconProps } from '../types';

const Shieldblockchain: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.998 2c-2.85 0-4.697 2.019-6.882 2.755-.888.3-1.333.449-1.512.66-.18.21-.233.519-.338 1.135-1.127 6.596 1.336 12.694 7.209 15.068.631.255.947.382 1.526.382.58 0 .896-.128 1.527-.383 5.873-2.373 8.333-8.471 7.206-15.067-.106-.616-.158-.925-.338-1.136-.18-.21-.624-.36-1.512-.659C16.698 4.019 14.848 2 11.998 2Z"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M12 16c.14 0 .27-.064.529-.19l2.086-1.023c.923-.453 1.385-.679 1.385-1.037v-4.5M12 16c-.14 0-.27-.064-.529-.19l-2.086-1.023C8.462 14.334 8 14.108 8 13.75v-4.5M12 16v-4.5m4-2.25c0-.358-.462-.584-1.385-1.037L12.53 7.191C12.269 7.064 12.139 7 12 7c-.14 0-.27.064-.529.19L9.385 8.214C8.462 8.666 8 8.892 8 9.25m8 0c0 .358-.462.584-1.385 1.037l-2.086 1.022c-.26.127-.39.191-.529.191M8 9.25c0 .358.462.584 1.385 1.037l2.086 1.022c.26.127.39.191.529.191"/> </svg>
  );
};

export default Shieldblockchain;
