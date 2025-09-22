import React from 'react';
import type { IconProps } from '../types';

const Blushbrush02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m12 13 3 2m-3-2c-4.48 2.746-7.118 1.78-9 .85 0 2.08.681 3.82 1.696 5.15M12 13l3-4.586M15 15c-.219 2.037-1.573 6.185-4.844 7-1.815 0-3.988-1.07-5.46-3M15 15l2.598-5M4.696 19c1.038.167 3.584.2 5.46-1M15 8.414l3.808-5.82a1.174 1.174 0 0 1 1.544-.47c.579.288.814.99.524 1.566L17.598 10M15 8.414 17.598 10"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="m6 4 .221.597c.29.784.435 1.176.72 1.461.286.286.678.431 1.462.72L9 7l-.597.221c-.784.29-1.176.435-1.461.72-.286.286-.431.678-.72 1.462L6 10l-.221-.597c-.29-.784-.435-1.176-.72-1.461-.286-.286-.678-.431-1.462-.72L3 7l.597-.221c.784-.29 1.176-.435 1.461-.72.286-.286.431-.678.72-1.462L6 4Z"/> </svg>
  );
};

export default Blushbrush02;
