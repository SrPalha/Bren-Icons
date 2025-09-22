import React from 'react';
import type { IconProps } from '../types';

const Messagelock01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 13.49c-.275 4.243-3.613 7.623-7.805 7.9-1.43.095-2.923.095-4.35 0a4.892 4.892 0 0 1-1.488-.339c-.513-.21-.77-.316-.9-.3-.131.016-.32.155-.699.434-.667.49-1.508.844-2.755.813-.63-.015-.945-.023-1.086-.263-.141-.24.034-.572.386-1.237.487-.922.796-1.978.328-2.823-.806-1.208-1.49-2.639-1.59-4.184a19.71 19.71 0 0 1 0-2.52c.274-4.243 3.613-7.622 7.804-7.9a33.44 33.44 0 0 1 2.676-.067M8.5 15h7m-7-5H12"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.737 5.176v-1.39c0-.206.009-.414.083-.606.195-.51.715-1.179 1.66-1.179.944 0 1.484.669 1.68 1.18.073.191.082.399.082.604v1.39M16.807 11h3.386c.997 0 1.805-.807 1.805-1.802V7.196c0-.995-.808-1.802-1.805-1.802h-3.386c-.997 0-1.805.807-1.805 1.802v2.001c0 .995.808 1.802 1.805 1.802Z"/> </svg>
  );
};

export default Messagelock01;
