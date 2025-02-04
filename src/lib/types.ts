// src/lib/types.ts
export interface Publication {
  title: string
  authors: string[]
  venue: string
  year: number
  doi?: string
  pdf?: string
  code?: string
  slides?: string
  poster?: string
  abstract: string
  tags: string[]
}

export interface Project {
  title: string
  description: string
  technologies: string[]
  image: string
  github?: string
  demo?: string
  category: 'ml-security' | 'adversarial-ml' | 'research'
}

export interface BlogPost {
  title: string
  slug: string
  date: string
  author: string
  excerpt: string
  content: string
  tags: string[]
  readingTime: number
}

export interface BlogPostFrontMatter {
  title: string;
  date: string;
  author: string;
  tags: string[];
  image: string;
  readingTime: number;
}

interface BlogPostProps {
  frontMatter: BlogPostFrontMatter;
  content: any;
  slug: string;
}