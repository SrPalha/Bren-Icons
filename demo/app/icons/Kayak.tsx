import React from 'react';
import type { IconProps } from '../types';

const Kayak: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="kayak"> <path id="Vector" d="M20.8208 3.17963C10.9261 1.49855 2.07221 11.6144 3.03361 20.9236C12.3654 21.8826 22.506 13.0502 20.8208 3.17963Z" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_2" d="M6.95947 16.9951H6.96845" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_3" d="M16.9595 6.99609H16.9685" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_4" d="M9.4958 14.4781C8.80348 13.7875 8.80348 12.6678 9.4958 11.9772L11.9649 9.51407C12.6572 8.82344 13.7796 8.82344 14.4719 9.51407C15.1643 10.2047 15.1643 11.3244 14.4719 12.015L12.0028 14.4781C11.3105 15.1688 10.1881 15.1688 9.4958 14.4781Z" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_5" d="M5.75869 5.684C5.881 3.2926 5.22287 2.3299 4.6042 2.05808C4.24672 1.90102 3.85777 2.09995 3.54251 2.33003C2.94925 2.76299 2.62326 3.08516 2.23657 3.68002C2.03935 3.98341 1.91342 4.36065 2.06996 4.68678C2.5949 5.78048 4.68545 5.93975 5.75869 5.684ZM5.75869 5.684L18.2405 18.3176M18.2405 18.3176C18.1197 20.7091 18.7785 21.6714 19.3973 21.9428C19.7549 22.0997 20.1437 21.9005 20.4588 21.6702C21.0518 21.2369 21.3776 20.9145 21.7639 20.3194C21.9609 20.0158 22.0866 19.6385 21.9299 19.3125C21.4042 18.2191 19.3136 18.0612 18.2405 18.3176Z" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Kayak;
