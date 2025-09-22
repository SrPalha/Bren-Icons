import React from 'react';
import type { IconProps } from '../types';

const Databaselocked: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M10.998 8c4.419 0 8-1.343 8-3s-3.581-3-8-3c-4.418 0-8 1.343-8 3s3.582 3 8 3Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M5.999 10.842c.601.18 1.274.33 2 .44M10.998 15c-4.418 0-8-1.343-8-3m3.001 5.842c.601.18 1.274.33 2 .44"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.998 22c-4.418 0-8-1.343-8-3V5m16 0v5.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M15.742 16.377c0-.06.009-.825.01-1.26.001-.396-.034-.78.156-1.13.71-1.412 2.75-1.268 3.254.171.088.237.093.613.09.96-.003.443.006 1.26.006 1.26m-3.516 0c-1.08 0-1.523.779-1.643 1.259-.12.48-.12 2.219-.048 2.938.24.9.84 1.272 1.427 1.392.54.048 2.82.03 3.48.03.96.018 1.68-.342 1.98-1.422.06-.36.12-2.339-.03-2.938-.319-.96-1.05-1.26-1.65-1.26m-3.516 0h3.516"/> </svg>
  );
};

export default Databaselocked;
