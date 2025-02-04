// src/pages/publications.tsx
import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/layout/PageHeader';
import { Download, ExternalLink, Search, Filter } from '@/components/ui/Icons';

export default function PublicationsPage() {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter publications based on type and search query
  const filteredPublications = publications.filter(pub => {
    const matchesFilter = filter === 'all' || pub.type === filter;
    const matchesSearch = 
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.venue.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <Layout>
      <PageHeader 
        title="Publications"
        description="My research focuses on machine learning security, particularly in the areas of model extraction and adversarial machine learning."
      />

      {/* Filters Section */}
      <Section className="pt-8 pb-4 border-b dark:border-neutral-800">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Publication Type Filter */}
            <div className="flex items-center space-x-4">
              <Filter size={20} className="text-neutral-500" />
              <select 
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="bg-transparent border-2 border-neutral-200 dark:border-neutral-700 rounded-lg px-4 py-2"
              >
                <option value="all">All Publications</option>
                <option value="conference">Conference Papers</option>
                <option value="journal">Journal Articles</option>
                <option value="workshop">Workshop Papers</option>
                <option value="patent">Patents</option>
              </select>
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500" />
              <input
                type="text"
                placeholder="Search publications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border-2 border-neutral-200 dark:border-neutral-700 rounded-lg bg-transparent"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Publications List */}
      <Section>
        <Container>
          <div className="space-y-8">
            {filteredPublications.map((publication, index) => (
              <PublicationCard key={index} publication={publication} />
            ))}
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

// Publication Card Component
function PublicationCard({ publication }) {
  // Function to generate citation text
  const getCitation = () => {
    return `${publication.authors}. (${publication.year}). ${publication.title}. ${publication.venue}.`;
  };

  // Function to copy citation to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(getCitation());
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Publication Type Badge */}
          <div className="md:w-32 shrink-0">
            <span className={`inline-block px-3 py-1 rounded-full text-sm ${
              publication.type === 'conference' 
                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
              publication.type === 'journal'
                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
              publication.type === 'workshop'
                ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
              'bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200'
            }`}>
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

            {/* Links and Downloads */}
            <div className="flex flex-wrap gap-4">
              {publication.pdf && (
                <a 
                  href={publication.pdf}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download size={18} className="mr-2" />
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
                  <ExternalLink size={18} className="mr-2" />
                  Code
                </a>
              )}
              <button
                onClick={copyToClipboard}
                className="inline-flex items-center text-neutral-600 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
              >
                Copy Citation
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Sample publication data
const publications = [
  {
    title: "Army of Thieves: Enhancing Black-Box Model Extraction via Ensemble-based Sample Selection",
    authors: "Akshit Jindal, Vikram Goyal, Saket Anand, Chetan Arora",
    venue: "WACV 2024",
    year: 2024,
    type: "conference",
    abstract: "We propose a novel approach to enhance the effectiveness of black-box model extraction attacks using ensemble-based sample selection strategies...",
    pdf: "#",
    code: "#",
    slides: "#"
  },
  {
    title: "Method and system for assigning unique voice for electronic device",
    authors: "Sourabh Tiwari, Akshit Jindal, Saksham Goyal, Vinay Vasanth Patage, Ravibhushan B Tayshete",
    venue: "US Patent Office",
    year: 2022,
    type: "patent",
    abstract: "A novel method for generating and assigning unique voice characteristics to electronic devices...",
    pdf: "#"
  }
];