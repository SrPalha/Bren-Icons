import React from 'react';
import type { IconProps } from '../types';

const Bitcoinbag: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M20.943 16.835a15.764 15.764 0 0 0-4.476-8.616c-.517-.503-.775-.754-1.346-.986C14.55 7 14.059 7 13.078 7h-2.156c-.981 0-1.472 0-2.043.233-.57.232-.83.483-1.346.986a15.764 15.764 0 0 0-4.476 8.616C2.57 19.773 5.28 22 8.308 22h7.384c3.029 0 5.74-2.227 5.25-5.165Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.125 17.5v-6m1.875 0V10m0 9v-1.5m-1.875-3h3.75m0 0c.621 0 1.125.504 1.125 1.125v.75c0 .621-.504 1.125-1.125 1.125H9m4.875-3c.621 0 1.125-.504 1.125-1.125v-.75c0-.621-.504-1.125-1.125-1.125H9"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M7.257 4.443c-.207-.3-.506-.708.112-.8.635-.096 1.294.338 1.94.33.583-.009.88-.268 1.2-.638C10.845 2.946 11.365 2 12 2c.635 0 1.155.946 1.491 1.335.32.37.617.63 1.2.637.646.01 1.305-.425 1.94-.33.618.093.319.5.112.8l-.932 1.359c-.4.58-.599.87-1.017 1.035C14.377 7 13.837 7 12.758 7h-1.516c-1.08 0-1.619 0-2.036-.164-.418-.164-.617-.455-1.017-1.035l-.932-1.358Z"/> </svg>
  );
};

export default Bitcoinbag;
