// src/components/layout/PageHeader.tsx
// This component provides consistent headers across different pages
interface PageHeaderProps {
    title: string;
    description?: string;
  }
  
  export function PageHeader({ title, description }: PageHeaderProps) {
    return (
      <div className="bg-gradient-to-b from-primary-50 to-white dark:from-neutral-800 dark:to-neutral-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            {title}
          </h1>
          {description && (
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl">
              {description}
            </p>
          )}
        </div>
      </div>
    );
  }