// src/components/layout/Layout.tsx
import React from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';  // Make sure this import statement exists

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-900">
      <Navigation />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}