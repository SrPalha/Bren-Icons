import React from 'react';
import type { IconProps } from '../types';

const Cctvcamera: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M15 13v1c0 2.828 0 4.243.879 5.121C16.757 20 18.172 20 21 20"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.691 18v4"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="m9 10.83-.537.059c-.804.09-1.206.134-1.526.1-1.562-.17-2.794-1.555-2.929-3.294-.028-.356.017-.802.106-1.695"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.691 7h.01"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 7h4.5"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M2.246 4.224c-.222-.897-.333-1.345-.164-1.679a.999.999 0 0 1 .23-.299C2.593 2 3.05 2 3.967 2h12.588C19.562 2 22 4.462 22 7.5S19.562 13 16.554 13h-4.749c-.816 0-1.224 0-1.574-.14a1.979 1.979 0 0 1-.713-.487c-.259-.277-.41-.66-.713-1.425l-.538-1.356c-.31-.785-.466-1.177-.753-1.468-.288-.29-.676-.447-1.453-.76L4.369 6.68c-.727-.294-1.09-.44-1.363-.7a1.994 1.994 0 0 1-.258-.298c-.217-.308-.312-.691-.502-1.458Z"/> </svg>
  );
};

export default Cctvcamera;
