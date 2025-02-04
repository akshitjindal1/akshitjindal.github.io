// src/components/layout/Footer.tsx
import React from 'react';
import { Mail, Github, Linkedin } from '@/components/ui/Icons';
import { SITE_CONFIG } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-neutral-600 dark:text-neutral-400">IIIT-Delhi</p>
            <p className="text-neutral-600 dark:text-neutral-400">New Delhi, India</p>
            <a 
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-primary-600 dark:text-primary-500 hover:text-primary-700 dark:hover:text-primary-400"
            >
              {SITE_CONFIG.email}
            </a>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="space-y-2">
              <a
                href={SITE_CONFIG.github}
                className="flex items-center text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
              <a
                href={SITE_CONFIG.linkedin}
                className="flex items-center text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              PhD Scholar researching machine learning security, focusing on model extraction
              and adversarial attacks.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <p className="text-center text-neutral-600 dark:text-neutral-400">
            © {new Date().getFullYear()} {SITE_CONFIG.author}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}