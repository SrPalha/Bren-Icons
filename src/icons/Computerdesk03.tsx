import React from 'react';
import type { IconProps } from '../types';

const Computerdesk03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 12H2"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="m19.765 12 .61-1.674c.46-1.263.69-1.894.609-2.457a2.15 2.15 0 0 0-.488-1.091c-.355-.415-.951-.602-2.143-.976m0 0c0 .321 0 .482-.038.623-.055.208-.168.39-.323.524-.106.091-.242.15-.513.27l-.252.11c-.525.23-.787.346-.982.23a.47.47 0 0 1-.074-.055C16 7.349 16 7.038 16 6.417v-1.23c0-.62 0-.93.17-1.086a.471.471 0 0 1 .075-.055c.195-.117.457-.001.982.23l.252.11c.271.119.407.178.513.27.155.133.268.316.323.523.038.142.038.303.038.623Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 17h-4c-1.886 0-2.828 0-3.414-.586C12 15.828 12 14.886 12 13v-1m-8 0v10m16-10v10M3 6V5c0-1.414 0-2.121.44-2.56C3.878 2 4.585 2 6 2h4c1.414 0 2.121 0 2.56.44C13 2.878 13 3.585 13 5v1c0 1.414 0 2.121-.44 2.56C12.122 9 11.415 9 10 9H6c-1.414 0-2.121 0-2.56-.44C3 8.122 3 7.415 3 6Zm6.5 3 .5 3M6.5 9 6 12"/> </svg>
  );
};

export default Computerdesk03;
