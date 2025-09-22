import React from 'react';
import type { IconProps } from '../types';

const Quran01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19.648 5.437-.659-1.043c-.364-.577-.546-.866-.785-.892-.238-.027-.505.247-1.038.795-1.722 1.77-3.444 1.508-5.166 4.691-1.722-3.183-3.444-2.921-5.166-4.691-.533-.548-.8-.822-1.038-.795-.239.026-.421.315-.785.892l-.658 1.043c-.255.402-.382.604-.347.816.034.212.217.357.584.647l6.182 4.898c.591.468.887.702 1.228.702.341 0 .637-.234 1.228-.702L19.41 6.9c.367-.29.55-.435.584-.647.035-.212-.092-.414-.346-.816ZM22 8.5l-16 12v-4.696M2 8.5l16 12v-4.696"/> </svg>
  );
};

export default Quran01;
