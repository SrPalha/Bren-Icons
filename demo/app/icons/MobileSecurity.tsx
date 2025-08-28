import React from 'react';
import { IconProps } from '../types';

const MobileSecurity: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  className = '',
  ...props 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M10.9994 2C7.69956 2 6.04964 2 5.02452 3.02513C3.99939 4.05025 3.99939 5.70017 3.99939 9V15C3.99939 18.2998 3.99939 19.9497 5.02452 20.9749C6.04964 22 7.69956 22 10.9994 22C14.2992 22 15.9491 22 16.9743 20.9749C17.9994 19.9497 17.9994 18.2998 17.9994 15V14" stroke="#1B1C1B" stroke-width="1.5" stroke-linecap="round"/>
<path d="M9.99939 19H11.9994" stroke="#1B1C1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.8365 5.37891C13.7565 5.37891 13.2165 6.15891 13.0965 6.63891C12.9765 7.11891 12.9765 8.85891 13.0485 9.57891C13.2885 10.4789 13.8885 10.8509 14.4765 10.9709C15.0165 11.0189 17.2965 11.0009 17.9565 11.0009C18.9165 11.0189 19.6365 10.6589 19.9365 9.57891C19.9965 9.21891 20.0565 7.23891 19.9065 6.63891C19.5885 5.67891 18.7965 5.37891 18.1965 5.37891H14.8365Z" stroke="#1B1C1B" stroke-width="1.5" stroke-linecap="round"/>
<path d="M14.7494 4.95854C14.7494 4.89854 14.7576 4.55312 14.759 4.11854C14.7602 3.72145 14.7254 3.33854 14.915 2.98814C15.6254 1.57454 17.6654 1.71854 18.1694 3.15854C18.2567 3.39562 18.2619 3.77146 18.2594 4.11854C18.2561 4.56203 18.2654 4.95854 18.2654 4.95854" stroke="#1B1C1B" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};

export default MobileSecurity;
