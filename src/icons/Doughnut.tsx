import React from 'react';
import type { IconProps } from '../types';

const Doughnut: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m22 11.722-.44.588c-.727.972-1.703.912-2.396-.147l-.214-.326c-.668-1.02-1.602-1.117-2.323-.24l-.627.761m-8-.636-.44.588c-.727.972-1.703.912-2.396-.147l-.214-.326c-.668-1.02-1.602-1.117-2.323-.24L2 12.358"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M12 22c5.523 0 10-4.477 10-10 0-1.19-.18-2.352-.549-3.421-.3-.871-.65-.766-1.529-.653-1.295.166-2.625-.75-2.878-2.022-.177-.887-.203-.863-1.108-.927-.873-.063-1.68-.715-1.887-1.573C13.722 2.043 13.41 2 12 2 6.477 2 2 6.477 2 12s4.477 10 10 10Z"/> </svg>
  );
};

export default Doughnut;
