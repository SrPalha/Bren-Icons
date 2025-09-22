import React from 'react';
import type { IconProps } from '../types';

const Tropicalstormtracks01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="m18.165 15.348.463-1.158 1.384 1.328c.852.817 1.278 1.226 1.602 1.04.325-.185.194-.739-.069-1.846a20.564 20.564 0 0 0-1.82-4.848 8.905 8.905 0 0 0-4.377-4.03L14.19 5.37l1.273-1.327c.838-.874 1.257-1.31 1.072-1.634-.184-.325-.755-.192-1.898.073-2.007.465-4.267 1.267-6.066 2.65A8.344 8.344 0 0 0 5.833 8.65L5.37 9.808l-1.325-1.27C3.171 7.7 2.734 7.28 2.41 7.464c-.325.184-.192.756.073 1.9.474 2.043 1.296 4.347 2.725 6.161a8.298 8.298 0 0 0 3.443 2.64l1.158.464-1.328 1.384c-.816.85-1.225 1.276-1.039 1.6.186.325.738.194 1.844-.068a20.617 20.617 0 0 0 4.805-1.795 8.923 8.923 0 0 0 4.074-4.402Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/> </svg>
  );
};

export default Tropicalstormtracks01;
