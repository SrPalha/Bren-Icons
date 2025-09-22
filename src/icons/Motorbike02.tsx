import React from 'react';
import type { IconProps } from '../types';

const Motorbike02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M19.5 19a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm-15 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.235 7.87c1.281 1.559 1.727 3.042 1.764 3.826a5.322 5.322 0 0 0-2.217-.479c-2.445 0-4.64 1.626-5.164 3.792-.126.518-.188.777-.324.884-.136.107-.356.107-.795.107h-2.878c-.443 0-.664 0-.8-.108-.137-.11-.197-.367-.316-.883-.496-2.138-2.508-3.997-4.603-3.84-.211.017-.317.025-.39.008-.071-.016-.144-.057-.29-.14-.421-.237-.851-.463-1.264-.714A2 2 0 0 1 2 8.683c-.013-.384.207-.764.652-.66l6.42 1.511c.483.114.724.17.931.132.208-.039.462-.212.97-.56 1.288-.88 3.33-1.713 5.365-.978.557.201.836.302.994.307.16.005.392-.063.857-.198a9.469 9.469 0 0 1 2.045-.367Zm0 0C19.432 6.892 18.3 5.885 16.734 5"/> </svg>
  );
};

export default Motorbike02;
