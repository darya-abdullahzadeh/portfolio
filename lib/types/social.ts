export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon?: string; // SVG path or icon name
  order?: number; // For sorting
  createdAt: string;
  updatedAt: string;
}

