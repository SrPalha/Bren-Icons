import React from 'react';
import type { IconProps } from '../types';

const Headsetoff: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m2 2.004 20 19.955m-1-7.982a3.996 3.996 0 0 0-4-3.991 2 2 0 0 0-1.742 1.013M15 14.976v.997c0 1.103.895 1.996 2 1.996.309 0 .61-.035.899-.101"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M5.908 10.137A3.994 3.994 0 0 0 3 13.977a3.996 3.996 0 0 0 4 3.991c1.105 0 2-.893 2-1.995v-2.751"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.991 13.99c0-1.01-.635-5.825 2.176-8.833m15.847 11.55v-5.605c0-.99-.107-1.983-.418-2.923a8.852 8.852 0 0 0-1.262-2.485C15.552.905 10.368 1.589 7.474 3.223m12.832 17.046c-.349.621-.915 1.064-1.6 1.348-.705.293-1.272.325-2.135.373-1.6 0-3.338.02-4.516 0"/> </svg>
  );
};

export default Headsetoff;
