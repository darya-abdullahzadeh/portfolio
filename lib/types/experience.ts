export interface WorkExperience {
  id: string;
  companyName: string;
  role: string;
  startDate: string;
  endDate?: string; // null for current position
  description?: string;
  achievements?: string[];
  technologies?: string[];
  companyLogo?: {
    id?: string;
    url?: string;
    filename?: string;
  };
  location?: string;
  createdAt: string;
  updatedAt: string;
}

