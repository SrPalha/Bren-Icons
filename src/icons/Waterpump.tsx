import React from 'react';
import type { IconProps } from '../types';

const Waterpump: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M12.5 5.5h-2c-.943 0-1.414 0-1.707.293C8.5 6.086 8.5 6.557 8.5 7.5v2c0 .943 0 1.414.293 1.707.293.293.764.293 1.707.293h2c.943 0 1.414 0 1.707-.293.293-.293.293-.764.293-1.707v-2c0-.943 0-1.414-.293-1.707-.293-.293-.764-.293-1.707-.293Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 11.5h-3v10h3v-10Zm-5.5 10h8"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M14.5 7h4a3 3 0 0 1 3 3v2.5h-3V10h-4V7Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.5 2.5H9.1c-1.262 0-1.893 0-2.39.323-.497.323-.753.9-1.266 2.052L2.5 11.5"/>   <path fill="#1B1C1B" d="m20 15.5.558-.5a.75.75 0 0 0-1.116 0l.558.5Zm.75 2.5a.75.75 0 0 1-.75.75v1.5A2.25 2.25 0 0 0 22.25 18h-1.5Zm-.75.75a.75.75 0 0 1-.75-.75h-1.5A2.25 2.25 0 0 0 20 20.25v-1.5Zm-.75-.75c0 .003 0-.031.027-.111.025-.077.066-.173.124-.286.117-.227.281-.48.458-.726a11.762 11.762 0 0 1 .686-.862l.01-.012a.056.056 0 0 0 .003-.002L20 15.5l-.558-.5h-.002a.1.1 0 0 1-.005.005l-.014.017a15.275 15.275 0 0 0-.233.273c-.148.178-.346.427-.547.706-.198.275-.41.596-.573.915-.152.294-.318.688-.318 1.083h1.5Zm.75-2.5-.558.5.002.003.01.012a8.06 8.06 0 0 1 .203.238c.133.16.31.381.484.624.177.246.34.499.458.726.058.113.099.209.124.286.026.08.027.114.027.111h1.5c0-.395-.166-.788-.317-1.083a7.497 7.497 0 0 0-.574-.916 13.223 13.223 0 0 0-.78-.978l-.015-.017A.1.1 0 0 1 20.56 15l-.559.5Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.5 2.5v3"/> </svg>
  );
};

export default Waterpump;
