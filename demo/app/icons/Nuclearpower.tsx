import React from 'react';
import type { IconProps } from '../types';

const Nuclearpower: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M14 12.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m14.911 8.434.944-1.782c.68-1.285 1.021-1.928.731-2.63-.29-.703-.856-.859-1.988-1.171a9.778 9.778 0 0 0-5.196-.001c-1.132.313-1.698.47-1.988 1.172-.29.702.05 1.345.73 2.63l.945 1.782m7.908 4.23h2.066c1.476 0 2.213 0 2.667.638.454.637.274 1.243-.086 2.455a10.543 10.543 0 0 1-2.791 4.599c-.864.83-1.296 1.245-2.025 1.123-.73-.122-1.07-.767-1.754-2.057l-1.208-2.282m-3.732 0-1.208 2.282c-.683 1.29-1.025 1.934-1.754 2.057-.73.122-1.161-.293-2.025-1.123a10.542 10.542 0 0 1-2.79-4.599c-.36-1.212-.54-1.818-.087-2.455.454-.637 1.191-.637 2.667-.637h2.066"/> </svg>
  );
};

export default Nuclearpower;
