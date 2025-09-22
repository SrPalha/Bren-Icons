import React from 'react';
import type { IconProps } from '../types';

const Spam: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12.31 3h-.62c-2.436 0-3.654 0-4.65.553-.997.552-1.588 1.555-2.771 3.562l-.59 1C2.56 10.014 2 10.963 2 12s.56 1.986 1.68 3.885l.589 1c1.183 2.007 1.774 3.01 2.77 3.563.997.552 2.215.552 4.65.552h.622c2.435 0 3.653 0 4.65-.552.996-.553 1.587-1.556 2.77-3.563l.59-1C21.44 13.986 22 13.037 22 12s-.56-1.986-1.68-3.885l-.589-1c-1.183-2.007-1.774-3.01-2.77-3.562C15.963 3 14.745 3 12.31 3Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.992 16H12"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.992 13V8"/> </svg>
  );
};

export default Spam;
