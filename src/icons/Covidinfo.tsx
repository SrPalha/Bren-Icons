import React from 'react';
import type { IconProps } from '../types';

const Covidinfo: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M14.527 15.082c4.001-3.068 3.368-6.469 1.515-7.563-1.452-.859-2.72-.513-3.482.038-.312.226-.468.339-.56.339-.092 0-.248-.113-.56-.339-.762-.55-2.03-.897-3.482-.038-1.846 1.09-2.309 4.595 1.655 7.662A21.163 21.163 0 0 0 12 16.771C13.779 17.797 16.417 19 19 19M5 19c1.549 0 3.117-.433 4.508-1"/> </svg>
  );
};

export default Covidinfo;
