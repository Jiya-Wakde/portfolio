export type ProjectCategory =
  | 'ALL'
  | 'WEB'
  | 'PYTHON'
  | 'C / C++'
  | 'ML / AI'
  | 'EMBEDDED'
  | 'ROBOTICS'
  | 'EXPERIMENTS'
  | 'WEB AUTOMATION'
  | 'WEB SCRAPING';

export type ProjectStatus = 'COMPLETED' | 'WIP' | 'EXPERIMENT' | 'ACTIVE' | 'FEATURED';

export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  year?: string;
  category: ProjectCategory;
  technologies: string[];
  image: string;
  gallery?: string[];
  github?: string;
  liveDemo?: string;
  status: ProjectStatus;
  featured: boolean;
  problem?: string;
  solution?: string;
  process?: string[];
  keyLearnings?: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    relatedProjects?: string[]; // Project IDs
  }[];
}

export interface CurrentlyBuildingItem {
  type: 'SOFTWARE' | 'ROBOTICS' | 'AI / COMPUTER VISION' | 'ESP32 & HARDWARE' | 'WEB APPS' | 'LEARNING' | 'BUILDING';
  title: string;
  description: string;
  status: string;
  tech: string[];
}
