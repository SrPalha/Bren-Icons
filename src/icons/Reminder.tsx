import React from 'react';
import type { IconProps } from '../types';

const Reminder: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12.947 19c-.077 1.022-.271 1.69-.752 2.18-.806.82-2.102.82-4.695.82-2.593 0-3.89 0-4.695-.82C2 20.36 2 19.04 2 16.4v-4.8c0-2.64 0-3.96.805-4.78.49-.498 1.161-.694 2.195-.77"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.492 19.001H7.5"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M16.078 2.001h-2.156c-2.901 0-4.352 0-5.212.903-.861.903-.77 2.33-.59 5.184l.126 1.985c.042.655.062.983.136 1.257a2.89 2.89 0 0 0 2.24 2.075c.282.055.615.055 1.282.055.929 0 .916.767.916 1.526 0 .59 0 .884.192.985.192.101.44-.062.938-.389l2.96-1.944a.994.994 0 0 1 .595-.178c1.222 0 1.833 0 2.328-.184 1.716-.637 1.859-2.222 1.958-3.785l.089-1.403c.18-2.854.271-4.28-.59-5.184-.86-.903-2.31-.903-5.212-.903Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.834 8.43C11.426 6.715 15 5 15 5s3.576 1.714 1.167 3.429m-2.332 0h2.332m-2.332 0L13.251 11m2.915-2.571L16.982 11"/> </svg>
  );
};

export default Reminder;
