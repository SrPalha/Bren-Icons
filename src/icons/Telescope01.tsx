import React from 'react';
import type { IconProps } from '../types';

const Telescope01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M16.2 2.621c.806-.468 1.21-.702 1.605-.596.396.107.629.512 1.095 1.323l1.482 2.58c.466.811.699 1.217.593 1.614-.106.398-.51.632-1.317 1.1l-3.423 1.986c-.807.468-1.21.703-1.606.596-.395-.107-.628-.512-1.094-1.323l-1.482-2.58c-.466-.811-.7-1.217-.593-1.614.106-.397.51-.631 1.316-1.1L16.2 2.622Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="m11.558 6.46 2.471 4.301-3.423 1.987c-.807.468-1.21.702-1.606.596-.395-.107-.628-.512-1.094-1.323l-.494-.86c-.466-.811-.7-1.217-.593-1.614.106-.397.51-.632 1.316-1.1l3.423-1.986Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M6.918 10.3 8.4 12.88l-2.996 1.74c-.398.231-.598.347-.793.373a.985.985 0 0 1-.73-.197c-.156-.12-.271-.32-.502-.722-.23-.4-.345-.6-.37-.797a.997.997 0 0 1 .195-.734c.12-.157.32-.272.718-.504L6.918 10.3Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.5 22 12 12l4.5 10"/> </svg>
  );
};

export default Telescope01;
