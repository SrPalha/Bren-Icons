import React from 'react';
import type { IconProps } from '../types';

const Mailsetting01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="m2 5 6.913 3.925c2.526 1.433 3.648 1.433 6.174 0L22 5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 19.49s-.93.024-1.9 0c-3.15-.08-4.724-.12-5.855-1.257-1.131-1.137-1.164-2.672-1.23-5.742a69.243 69.243 0 0 1 0-2.956c.066-3.07.099-4.605 1.23-5.742 1.131-1.138 2.706-1.177 5.854-1.256 1.94-.05 3.862-.05 5.803 0 3.149.079 4.723.118 5.854 1.256 1.131 1.137 1.164 2.672 1.23 5.742.007.357.012.977.014 1.478"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M18 20.214V21.5m0-1.286a3.364 3.364 0 0 1-2.774-1.43M18 20.213a3.364 3.364 0 0 0 2.774-1.43m-5.548 0L14 19.57m1.226-.788a3.12 3.12 0 0 1 0-3.566m5.548 3.566L22 19.57m-1.226-.788a3.12 3.12 0 0 0 0-3.566M18 13.786c1.157 0 2.176.568 2.774 1.43M18 13.787a3.364 3.364 0 0 0-2.774 1.43M18 13.787V12.5m2.774 2.717L22 14.429m-6.774.788L14 14.429"/> </svg>
  );
};

export default Mailsetting01;
