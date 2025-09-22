import React from 'react';
import type { IconProps } from '../types';

const Sleeveless: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 7.315c1.657 0 3-2.112 3-5.315 1.102.426 2.458.404 2.405 1.764-.052 1.348.386 3.063 1.762 4.353.622.583.833.848.833 1.683v6.697c0 2.278 0 3.416-.732 4.124-2.076 2.007-12.816 1.663-14.536 0C4 19.914 4 18.775 4 16.497V9.8c0-.835.211-1.1.833-1.683 1.376-1.29 1.814-3.005 1.762-4.353C6.542 2.404 7.898 2.426 9 2c0 3.203 1.343 5.315 3 5.315Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M15 2c-.8.622-1.85 1-3 1s-2.2-.378-3-1"/> </svg>
  );
};

export default Sleeveless;
