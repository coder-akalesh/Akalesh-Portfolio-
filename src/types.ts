export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  tags: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer?: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}
