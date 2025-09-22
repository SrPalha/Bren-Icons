import React from 'react';
import type { IconProps } from '../types';

const Locationstar1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M13.618 21.367A2.366 2.366 0 0 1 12 22a2.366 2.366 0 0 1-1.617-.633C6.412 17.626 1.09 13.447 3.685 7.38 5.09 4.1 8.458 2 12.001 2c3.543 0 6.912 2.1 8.315 5.38 2.592 6.06-2.717 10.259-6.698 13.987Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m12.605 8.005.616 1.243a.761.761 0 0 0 .496.37l1.117.187c.714.12.882.642.367 1.157l-.867.875a.77.77 0 0 0-.182.64l.248 1.082c.196.858-.255 1.19-1.008.741l-1.046-.624a.751.751 0 0 0-.693 0l-1.047.624c-.749.448-1.203.113-1.008-.74l.249-1.084a.77.77 0 0 0-.182-.639l-.868-.875c-.51-.515-.346-1.037.368-1.157l1.116-.187a.763.763 0 0 0 .493-.37l.616-1.243c.336-.673.882-.673 1.215 0Z"/> </svg>
  );
};

export default Locationstar1;
