import React from 'react';
import type { IconProps } from '../types';

const Medicinebottle02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 22c-2.883 0-4.208 0-5.104-.879C4 20.243 4 18.828 4 16v-1.909c0-.75 0-1.125.068-1.486.069-.364.189-.717.357-1.05.166-.328.396-.628.854-1.228l.412-.538c.225-.295.338-.443.426-.59a2.95 2.95 0 0 0 .234-2.543A6.679 6.679 0 0 0 6.039 6m8.155 0c-.168.33-.252.495-.312.656a2.95 2.95 0 0 0 .234 2.542c.088.148.201.296.427.59.444.582 1.11 1.081 1.457 1.712"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M7.068 2h5.864c.92 0 1.381 0 1.668.293.533.546.533 2.868 0 3.414C14.313 6 13.853 6 12.932 6H7.068c-.92 0-1.381 0-1.668-.293-.533-.546-.533-2.868 0-3.414C5.686 2 6.147 2 7.068 2Zm11.469 12.906a4 4 0 1 1-5.07 6.188m5.07-6.188a4 4 0 0 0-5.07 6.188m5.07-6.188-5.07 6.188"/> </svg>
  );
};

export default Medicinebottle02;
