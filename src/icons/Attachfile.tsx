import React from 'react';
import type { IconProps } from '../types';

const Attachfile: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="attach_file">     <g class="attach_file">       <path fill="#1B1C1B" d="M9.57353 4.19999c-2.14416 0-3.88235 1.74609-3.88235 3.89999v5.36252C5.69118 16.9626 8.51573 19.8 12 19.8c3.4843 0 6.3088-2.8374 6.3088-6.3375V12c0-.5384.4346-.975.9706-.975.5361 0 .9706.4366.9706.975v1.4625c0 4.5771-3.6937 8.2875-8.25 8.2875-4.55635 0-8.25-3.7104-8.25-8.2875V8.09998C3.75 4.86913 6.35728 2.25 9.57353 2.25c3.21627 0 5.82357 2.61913 5.82357 5.84998v5.36252c0 1.8846-1.521 3.4125-3.3971 3.4125s-3.39706-1.5279-3.39706-3.4125V9.56248c0-.53848.43455-.975.97059-.975.53607 0 .97057.43652.97057.975v3.90002c0 .8077.6518 1.4625 1.4559 1.4625.8041 0 1.4559-.6548 1.4559-1.4625V8.09998c0-2.1539-1.7382-3.89999-3.88237-3.89999Z" class="Vector" clipRule="evenodd"/>     </g>   </g> </svg>
  );
};

export default Attachfile;
