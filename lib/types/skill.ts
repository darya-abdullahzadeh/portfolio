export interface Skill {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Languages' | 'Other';
  proficiencyLevel?: number; // 0-100
  icon?: {
    id?: string;
    url?: string;
    filename?: string;
  };
  yearsOfExperience?: number;
  createdAt: string;
  updatedAt: string;
}

