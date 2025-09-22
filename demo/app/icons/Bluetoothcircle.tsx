import React from 'react';
import type { IconProps } from '../types';

const Bluetoothcircle: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.595 12V8.612c0-.943 0-1.415.294-1.57.295-.154.67.12 1.421.668l.845.618c.563.41.845.616.845.901 0 .286-.282.491-.845.902L11.595 12Zm0 0v3.388c0 .943 0 1.414.294 1.57.295.154.67-.12 1.421-.668l.845-.617c.563-.412.845-.617.845-.902 0-.286-.282-.491-.845-.902L11.595 12Zm0 0L9 9.778M11.595 12 9 14.222"/> </svg>
  );
};

export default Bluetoothcircle;
