// src/components/ui/section.tsx
import React from 'react';
import { cn } from '@/lib/utils';  // Add this import at the top

interface SectionProps {
  className?: string;
  children: React.ReactNode;
}

export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section
      className={cn("py-12 md:py-16 lg:py-20", className)}
      {...props}
    >
      {children}
    </section>
  );
}