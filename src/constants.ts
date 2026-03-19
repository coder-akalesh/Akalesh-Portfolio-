import { Experience, SkillCategory, Certification, Education } from './types';

export const PERSONAL_INFO = {
  name: "Akalesh Kumar",
  title: "Salesforce Developer",
  subtitle: "FSL | Service Cloud | Sales Cloud | Apex | LWC",
  location: "Bhubaneswar, Odisha, India",
  email: "akaleshkumar7655@gmail.com",
  phone: "+91 9827075450",
  summary: "Results-driven Salesforce Developer with 2+ years of hands-on experience delivering and supporting enterprise Field Service Lightning (FSL), Service Cloud, and Sales Cloud solutions. Deep expertise across the full FSL stack and production support.",
};

export const SKILLS: SkillCategory[] = [
  {
    category: "FSL",
    skills: ["Territory Management", "Work Order Life Cycle", "Service Appointments", "Skill-based Dispatching", "Dispatcher Console", "FSL Mobile App", "Inventory Management", "Service Resources", "Van Stock"]
  },
  {
    category: "Sales & Service Cloud",
    skills: ["Case Management", "Entitlement Processes", "Service Console", "Omni-Channel", "Knowledge Base", "Lead Management", "Opportunity Tracking", "Campaigns", "Forecasting"]
  },
  {
    category: "Apex",
    skills: ["Triggers (Bulkified)", "Batch Apex", "Queueable", "Future", "Scheduled Apex", "Database.Stateful", "Heap Optimization", "Governor Limits", "Async Processing"]
  },
  {
    category: "LWC / UI",
    skills: ["Lightning Web Components", "Wire Adapters", "@track/@api", "Custom Events", "Platform Events", "Parent-Child Communication"]
  },
  {
    category: "Integration",
    skills: ["REST APIs", "HTTP Callouts", "JSON Serialization/Deserialization", "ESB Integration", "Named Credentials", "Platform Events"]
  },
  {
    category: "DevOps & Automation",
    skills: ["Copado CI/CD", "Change Sets", "Sandbox Management", "Salesforce CLI", "Git", "Record-Triggered Flows", "Screen Flows", "Approval Processes"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Salesforce Developer | FSL Developer",
    company: "Orbion Software Solutions Pvt Ltd",
    period: "April 2025 – Present",
    description: [
      "Serve as the primary FSL support engineer, owning end-to-end incident triage and resolution across Service Appointment scheduling failures.",
      "Configured end-to-end FSL setup in sandbox: Service Territories, Members, Resources, and Scheduling Policies with custom Work Rules.",
      "Configured FSL Mobile application including offline briefcase and customized Quick Actions.",
      "Hands-on with FSL Inventory Management data model (ProductItem, ProductRequest, ProductTransfer)."
    ],
    tags: ["FSL", "Service Cloud", "Flows"]
  },
  {
    role: "Software Engineer — Salesforce Developer",
    company: "Oditek Solutions Pvt Ltd",
    period: "February 2024 – January 2025",
    description: [
      "Developed bulkified Apex Triggers with handler frameworks and recursive prevention guards.",
      "Built Lightning Web Components using wire adapters and custom event patterns.",
      "Resolved REST API integration failures by restructuring JSON logic and implementing retry mechanisms.",
      "Designed record-triggered Flows reducing manual effort by ~30% and managed Copado CI/CD pipelines."
    ],
    tags: ["Apex", "LWC", "REST API", "Copado", "CI/CD"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Salesforce Agentforce Specialist" },
  { name: "Copado Fundamentals I" },
  { name: "Copado Fundamentals II" },
  { name: "Trailhead Ranger — 100+ Badges" }
];

export const EDUCATION: Education[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Trident Academy of Technology",
    year: "2024"
  },
  {
    degree: "Bachelor of Science (Mathematics)",
    institution: "Utkal University",
    year: "2022"
  }
];
