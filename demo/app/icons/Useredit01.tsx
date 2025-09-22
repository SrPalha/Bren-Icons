import React from 'react';
import type { IconProps } from '../types';

const Useredit01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.5 22H6.59c-1.545 0-2.774-.752-3.877-1.803-2.26-2.153 1.45-3.873 2.865-4.715 2.55-1.52 5.628-1.87 8.422-1.054"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M16.5 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M18.433 13.848c.335-.363.503-.545.681-.65.43-.256.96-.264 1.397-.021.18.1.354.277.7.63.345.353.518.53.616.714.238.447.23.988-.02 1.427-.104.182-.282.353-.638.696l-4.231 4.075c-.674.65-1.011.974-1.432 1.139-.421.164-.885.152-1.81.128l-.127-.003c-.282-.008-.422-.012-.504-.105-.082-.093-.071-.236-.049-.523l.012-.156c.063-.808.095-1.213.253-1.576.157-.363.43-.658.974-1.248l4.178-4.527Z"/> </svg>
  );
};

export default Useredit01;
