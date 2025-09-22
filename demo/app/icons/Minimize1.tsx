import React from 'react';
import type { IconProps } from '../types';

const Minimize1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.926 22.251v-1.559c0-.402.127-.793.338-1.137 1.494-2.426 1.964-5.028 1.636-6.042-1.043-2.16-4.524-3.011-6.14-3.214l1.037-5.16c.174-.818-.446-1.641-1.383-1.84-.938-.197-1.84.306-2.013 1.124l-2.055 9.666-2.571-1.637s-1.295-1.036-2.335 0c-1.039 1.035 0 2.325 0 2.325l3.909 5.003c.251.322.398.712.42 1.12l.071 1.317M6.957 2.24s-.252 2.27 0 2.518m0 0c.326.321 2.602.05 2.602.05m-2.602-.05L10 1.749M5.045 9.251s.252-2.271 0-2.519m0 0c-.326-.32-2.602-.05-2.602-.05m2.602.05-3.044 3.01"/> </svg>
  );
};

export default Minimize1;
