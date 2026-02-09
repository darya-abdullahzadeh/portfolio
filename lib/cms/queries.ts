import { client } from './client';
import type { Project } from '@/lib/types/project';
import type { Skill } from '@/lib/types/skill';
import type { WorkExperience } from '@/lib/types/experience';
import type { SocialLink } from '@/lib/types/social';

interface PayloadResponse<T> {
  docs: T[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

// Helper function to transform Payload array fields
function transformProject(project: any): Project {
  return {
    ...project,
    technologies: project.technologies?.map((item: any) => 
      typeof item === 'string' ? item : item.technology
    ) || [],
    tags: project.tags?.map((item: any) => 
      typeof item === 'string' ? item : item.tag
    ) || [],
    images: project.images?.map((item: any) => ({
      id: item.image?.id || item.id,
      url: item.image?.url || item.url,
      filename: item.image?.filename || item.filename,
      alt: item.alt,
    })) || [],
  };
}

// Project queries
export async function getProjects(): Promise<Project[]> {
  const response = await client.fetch<PayloadResponse<any>>(
    '/projects?limit=100&sort=-createdAt'
  );
  return response.docs.map(transformProject);
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const response = await client.fetch<PayloadResponse<any>>(
    '/projects?where[featured][equals]=true&limit=3&sort=-createdAt'
  );
  return response.docs.map(transformProject);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const response = await client.fetch<PayloadResponse<any>>(
      `/projects?where[slug][equals]=${slug}&limit=1`
    );
    const project = response.docs[0];
    return project ? transformProject(project) : null;
  } catch (error) {
    console.error('Error fetching project by slug:', error);
    return null;
  }
}

// Skills queries
export async function getSkills(): Promise<Skill[]> {
  const response = await client.fetch<PayloadResponse<any>>(
    '/skills?limit=100&sort=category,name'
  );
  return response.docs.map((skill: any) => ({
    ...skill,
    icon: skill.icon ? {
      id: skill.icon.id,
      url: skill.icon.url,
      filename: skill.icon.filename,
    } : undefined,
  }));
}

// Experience queries
export async function getExperience(): Promise<WorkExperience[]> {
  const response = await client.fetch<PayloadResponse<any>>(
    '/work-experience?limit=100&sort=-startDate'
  );
  return response.docs.map((exp: any) => ({
    ...exp,
    achievements: exp.achievements?.map((item: any) => 
      typeof item === 'string' ? item : item.achievement
    ) || [],
    technologies: exp.technologies?.map((item: any) => 
      typeof item === 'string' ? item : item.technology
    ) || [],
    companyLogo: exp.companyLogo ? {
      id: exp.companyLogo.id,
      url: exp.companyLogo.url,
      filename: exp.companyLogo.filename,
    } : undefined,
  }));
}

// Social links queries
export async function getSocialLinks(): Promise<SocialLink[]> {
  try {
    const response = await client.fetch<PayloadResponse<any>>(
      '/social-links?limit=20&sort=order,platform'
    );
    return response.docs.map((link: any) => ({
      id: link.id,
      platform: link.platform,
      url: link.url,
      icon: link.icon,
      order: link.order || 0,
      createdAt: link.createdAt,
      updatedAt: link.updatedAt,
    }));
  } catch (error) {
    console.error('Error fetching social links:', error);
    return [];
  }
}

