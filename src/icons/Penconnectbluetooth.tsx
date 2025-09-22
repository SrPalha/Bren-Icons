import React from 'react';
import type { IconProps } from '../types';

const Penconnectbluetooth: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m5.356 7.051 2.769 1.91c.582.403.874.603.875.87.001.267-.288.47-.866.876l-.576.405c-.953.67-1.43 1.004-1.816.851-.386-.152-.386-.675-.386-1.72V7.05Zm0 0L5.28 7m.075.051V6.95M5.28 7 2 4.736M5.281 7l.075-.051M5.28 7 2 9.264m3.356-2.315 2.769-1.91c.582-.403.874-.603.875-.87.001-.267-.288-.47-.866-.876l-.576-.405c-.953-.67-1.43-1.004-1.816-.852-.386.153-.386.676-.386 1.721V6.95Zm11.858 1.033 1.402-1.401a1.982 1.982 0 0 1 2.803 2.803l-1.401 1.402m-2.804-2.804L8.98 16.216c-1.045 1.046-1.568 1.568-1.924 2.205-.356.637-.527 1.356-.87 2.794L6 22l.785-.187c1.438-.342 2.157-.514 2.794-.87.637-.355 1.16-.878 2.205-1.923l8.234-8.234m-2.804-2.804 2.804 2.804"/> </svg>
  );
};

export default Penconnectbluetooth;
