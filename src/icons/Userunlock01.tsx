import React from 'react';
import type { IconProps } from '../types';

const Userunlock01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M16.531 16.36v-1.408A1.96 1.96 0 0 1 18.5 13c.489 0 .936.177 1.28.469M17.844 22h1.312c1.022 0 1.532 0 1.919-.205.305-.162.555-.41.718-.712.207-.384.207-.89.207-1.903s0-1.52-.207-1.903a1.743 1.743 0 0 0-.718-.712c-.387-.205-.897-.205-1.919-.205h-1.312c-1.022 0-1.532 0-1.919.205-.305.162-.555.41-.718.712-.207.384-.207.89-.207 1.903s0 1.52.207 1.903c.163.302.413.55.718.712.387.205.897.205 1.919.205Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.5 22H6.59c-1.545 0-2.774-.752-3.877-1.803-2.26-2.153 1.45-3.873 2.865-4.715a10.665 10.665 0 0 1 7.922-1.187"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M16.5 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"/> </svg>
  );
};

export default Userunlock01;
