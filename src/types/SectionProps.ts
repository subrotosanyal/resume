import { ReactNode } from 'react';

export interface SectionProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}