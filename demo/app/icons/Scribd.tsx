import React from 'react';
import { IconProps } from '../types';

const Scribd: React.FC<IconProps> = ({ 
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
      <path d="M21.8181 16.9135C21.529 21.3939 18.298 21.7828 17.8843 21.9761C21.5207 16.9135 13.4265 11.766 12.3023 11.1653C11.1781 10.5647 9.6756 9.86998 8.90476 9.36339C7.62722 8.5238 7.17403 7.74514 6.83126 7.13602C6.28166 6.15937 6.24666 3.85251 8.7049 3.73238C11.1631 3.61225 12.857 4.63324 12.9692 5.26037C12.7709 6.65093 15.4209 9.19726 17.7283 7.33718C20.3908 5.19091 17.9809 2.1304 16.9247 2C21.5928 2.22844 21.8365 6.07983 21.965 8.11072L21.9651 8.11266C21.9651 8.11266 22.1071 12.4331 21.8181 16.9135Z" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.89221 21.5859C6.26017 18.7982 3.54263 17.6058 2.34281 18.0719C2.34281 18.0719 2 16.6737 2 14.2698V10.0996C2.29361 10.9328 3.89608 13.1925 7.9571 15.0748C12.0181 16.9572 12.9787 18.6652 12.9787 19.2344C13.0383 19.7204 12.8844 20.9044 11.737 21.937C10.0055 22.0228 6.33792 22.1016 5.89221 21.5859Z" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default Scribd;
