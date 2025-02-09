import { cn } from '@/lib/utils';
import React from 'react';

interface WrapperInterface {
  children: React.ReactNode;
  className?: string;
}

export default function Wrapper({ children, className }: WrapperInterface) {
  return (
    <div
      className={cn(
        'flex flex-col min-h-screen px-4 sm:px-6 lg:px-24 py-6 w-full max-w-7xl mx-auto',
        className
      )}
    >
      {children}
    </div>
  );
}
