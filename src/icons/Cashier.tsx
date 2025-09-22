import React from 'react';
import type { IconProps } from '../types';

const Cashier: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M16.667 14H7.333c-2.186 0-3.279 0-4.054.543-.286.2-.536.45-.736.736C2 16.054 2 17.147 2 19.333c0 1.093 0 1.64.271 2.027.1.144.225.268.369.369.387.271.934.271 2.027.271h14.666c1.093 0 1.64 0 2.027-.271.144-.1.268-.225.369-.369.271-.387.271-.934.271-2.027 0-2.186 0-3.279-.543-4.054-.2-.286-.45-.536-.736-.736C19.946 14 18.853 14 16.667 14ZM20 14l-.407-3.663c-.282-2.538-.423-3.808-1.277-4.572C17.46 5 16.184 5 13.63 5h-3.26c-2.554 0-3.831 0-4.686.765-.854.764-.995 2.034-1.277 4.572L4 14m7.5-12H14m0 0h2.5M14 2v3"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m9 17.5.996.664a2 2 0 0 0 1.11.336h1.788a2 2 0 0 0 1.11-.336L15 17.5M8 8h2"/> </svg>
  );
};

export default Cashier;
