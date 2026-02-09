export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  technologies?: string[];
  images?: Array<{
    id?: string;
    url?: string;
    filename?: string;
    alt?: string;
  }>;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  startDate?: string;
  endDate?: string;
  category?: string;
  tags?: string[];
  createdAt: string;
  updatedAt: string;
}

