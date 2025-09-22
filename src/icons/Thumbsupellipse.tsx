import React from 'react';
import type { IconProps } from '../types';

const Thumbsupellipse: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m13.152 8.786-.177.557c-.146.456-.218.684-.162.864a.638.638 0 0 0 .28.354c.167.102.42.102.926.102h.27c1.713 0 2.57 0 2.974.492.047.057.088.116.123.18.312.548-.042 1.288-.75 2.767-.65 1.357-.974 2.036-1.577 2.436a2.776 2.776 0 0 1-.18.109c-.635.353-1.422.353-2.995.353h-.34c-1.907 0-2.86 0-3.452-.557-.592-.557-.592-1.453-.592-3.245v-.63c0-.942 0-1.413.172-1.844.172-.431.502-.786 1.162-1.494l2.727-2.932a2 2 0 0 1 .133-.136.704.704 0 0 1 .962.06c.027.028.055.07.113.15.09.128.135.191.175.254.351.564.458 1.234.296 1.87a5.234 5.234 0 0 1-.088.29Z"/> </svg>
  );
};

export default Thumbsupellipse;
