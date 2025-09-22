import React from 'react';
import type { IconProps } from '../types';

const Milkcarton: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M5.172 6.828 7 5l1.828 1.828c.578.578.868.868 1.02 1.235.152.368.152.776.152 1.594V22H8c-1.886 0-2.828 0-3.414-.586C4 20.828 4 19.886 4 18V9.657c0-.818 0-1.226.152-1.594.152-.367.442-.657 1.02-1.235Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M7 5.004v-.4c0-1.224 0-1.836.38-2.216.382-.38.994-.38 2.22-.38h5.553c.707 0 1.623-.113 2.096.53.501.684.073 1.624.29 2.38.066.23.23.407.38.587L20 8"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M10 8h10v10c0 1.886 0 2.828-.586 3.414C18.828 22 17.886 22 16 22h-6"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M10 13c.476.5 1.743.476 2.487.279a1.339 1.339 0 0 1 1.428.485l.688.902c.395.519.994.765 1.584.651l.87-.167c.478-.092.954.14 1.28.556C19.352 17 20 17 20 17"/> </svg>
  );
};

export default Milkcarton;
