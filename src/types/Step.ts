import { ReactNode } from 'react';

export interface Step {
  id: string;
  question: string;
  icon: ReactNode;
  yesNext: string;
  noNext: string;
}

export type Steps = Record<string, Step>;