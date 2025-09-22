import React from 'react';
import type { IconProps } from '../types';

const Milkcoconut: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.971 21.999h-2.96m0 0h-4.01a2 2 0 0 1-2-2V8.846a2 2 0 0 1 .562-1.388l2.423-2.512V3.502a1.5 1.5 0 0 1 1.5-1.5h7.551a1.5 1.5 0 0 1 1.5 1.53l-.02 1.034a1 1 0 0 0 .222.65l2.285 2.823M8.01 21.999V8.846a2 2 0 0 0-.17-.807m10.185 0v2.043m0-2.043H7.84m0 0a2 2 0 0 0-.39-.581L5.025 4.946"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M13.248 18.575c-.654-.654.009-2.376 1.48-3.848 1.472-1.47 3.195-2.133 3.85-1.48m-5.33 5.328c0 .592.355 1.54.888 2.072a4.606 4.606 0 0 0 6.514 0 4.603 4.603 0 0 0 0-6.511c-.534-.533-1.48-.888-2.073-.888m-5.329 5.327c.564.564 1.921.15 3.227-.917m2.102-4.41c.654.653-.009 2.376-1.48 3.847a8.38 8.38 0 0 1-.622.563m0 0c.109.7.326 1.51 1.51 2.101"/> </svg>
  );
};

export default Milkcoconut;
