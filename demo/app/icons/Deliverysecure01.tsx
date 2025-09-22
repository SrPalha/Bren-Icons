import React from 'react';
import type { IconProps } from '../types';

const Deliverysecure01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22h-1.111c-4.19 0-6.285 0-7.587-1.255C2 19.489 2 17.469 2 13.429V8h20v3.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m2 8 .962-2.308c.745-1.79 1.118-2.684 1.874-3.188S6.56 2 8.5 2h7c1.939 0 2.908 0 3.664.504.756.504 1.129 1.399 1.874 3.188L22 8M12 8V2m-2 10h4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.736 16.175v-1.391c0-.206.01-.414.083-.606.196-.51.715-1.18 1.66-1.18.946 0 1.486.67 1.682 1.18.074.192.082.4.082.606v1.39M16.806 22h3.388c.997 0 1.806-.807 1.806-1.802v-2.003c0-.995-.809-1.802-1.806-1.802h-3.388c-.997 0-1.806.807-1.806 1.802v2.003c0 .995.809 1.802 1.806 1.802Z"/> </svg>
  );
};

export default Deliverysecure01;
