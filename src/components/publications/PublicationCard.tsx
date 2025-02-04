// src/components/layout/PublicationCard.tsx
import React, { useState } from 'react';
import { Download, ExternalLink } from '@/components/ui/Icons';
import { Card, CardContent } from '@/components/ui/card';

interface PublicationCardProps {
  publication: {
    title: string;
    authors: string;
    venue: string;
    year: number;
    type: string;
    abstract: string;
    pdf?: string;
    code?: string;
    slides?: string;
  };
}

export function PublicationCard({ publication }: PublicationCardProps) {
  // State to show copy feedback
  const [copySuccess, setCopySuccess] = useState<boolean>(false);

  // Function to safely copy text to clipboard
  const copyToClipboard = async (text: string) => {
    // Only try to use the clipboard API if we're in a browser environment
    if (typeof window !== 'undefined') {
      try {
        await navigator.clipboard.writeText(text);
        setCopySuccess(true);
        // Reset success message after 2 seconds
        setTimeout(() => setCopySuccess(false), 2000);
      } catch (err) {
        console.error('Failed to copy text: ', err);
        // Provide fallback or show error message to user
        alert('Copy to clipboard failed. Please try selecting and copying the text manually.');
      }
    }
  };

  // Function to generate citation text
  const getCitation = () => {
    return `${publication.authors}. (${publication.year}). ${publication.title}. ${publication.venue}.`;
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Publication Type Badge */}
          <div className="md:w-32 shrink-0">
            <span
              className={`inline-block px-3 py-1 rounded-full text-sm ${
                publication.type === 'conference'
                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                  : publication.type === 'journal'
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  : 'bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200'
              }`}
            >
              {publication.type.charAt(0).toUpperCase() + publication.type.slice(1)}
            </span>
          </div>

          {/* Publication Details */}
          <div className="flex-grow">
            <h3 className="text-xl font-semibold mb-2">{publication.title}</h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              {publication.authors}
            </p>
            <p className="text-neutral-500 mb-4">
              {publication.venue} • {publication.year}
            </p>

            {/* Abstract Preview */}
            <div className="mb-4">
              <p className="text-neutral-600 dark:text-neutral-400 line-clamp-3">
                {publication.abstract}
              </p>
            </div>

            {/* Links and Actions */}
            <div className="flex flex-wrap gap-4">
              {publication.pdf && (
                <a 
                  href={publication.pdf}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  PDF
                </a>
              )}
              {publication.code && (
                <a 
                  href={publication.code}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Code
                </a>
              )}
              <button
                onClick={() => copyToClipboard(getCitation())}
                className="inline-flex items-center text-neutral-600 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
              >
                {copySuccess ? 'Copied!' : 'Copy Citation'}
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}