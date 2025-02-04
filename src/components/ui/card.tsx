import React from 'react';
import { cn } from '@/lib/utils';  // Add this import at the top

// src/components/ui/card.tsx
interface CardProps {
    className?: string;
    children: React.ReactNode;
  }
  
  export function Card({ className, children, ...props }: CardProps) {
    return (
      <div
        className={cn(
          "rounded-lg border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
  
  export function CardHeader({ className, children, ...props }: CardProps) {
    return (
      <div
        className={cn("flex flex-col space-y-1.5 p-6", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
  
  export function CardContent({ className, children, ...props }: CardProps) {
    return (
      <div className={cn("p-6 pt-0", className)} {...props}>
        {children}
      </div>
    );
  }
  