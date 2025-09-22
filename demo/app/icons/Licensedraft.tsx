import React from 'react';
import type { IconProps } from '../types';

const Licensedraft: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="license-draft"> <path id="Vector" d="M20.002 11V10C20.002 6.22876 20.002 4.34315 18.7615 3.17157C17.521 2 15.5245 2 11.5314 2H10.4726C6.47947 2 4.48293 2 3.24244 3.17157C2.00195 4.34315 2.00195 6.22876 2.00195 10V14C2.00195 17.7712 2.00195 19.6569 3.24244 20.8284C4.48293 22 6.47946 22 10.4726 22H11.002" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_2" d="M7.00195 7H15.002" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_3" d="M7.00195 12H15.002" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_4" d="M20.8624 14.4393L21.5567 15.1317C22.1441 15.7175 22.1441 16.6672 21.5567 17.253L17.9192 20.9487C17.6331 21.234 17.2671 21.4264 16.8693 21.5005L14.6149 21.9885C14.259 22.0656 13.942 21.7504 14.0183 21.3952L14.4981 19.1599C14.5724 18.7632 14.7653 18.3982 15.0515 18.1129L18.7352 14.4393C19.3226 13.8536 20.275 13.8536 20.8624 14.4393Z" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Licensedraft;
