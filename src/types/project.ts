export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  caseStudy?: {
    problem: string;
    contribution: string[];
    outcome: string;
  };
  category?: string;
  impact?: string;
  role?: string;
  status?: string;
  metrics?: Array<{ value: string; label: string }>;
  metricsNote?: string;
  architecture?: Array<{ title: string; detail: string }>;
  decisions?: Array<{ title: string; detail: string }>;
  gallery?: Array<{ src: string; alt: string; caption: string; width: number; height: number }>;
  resources?: Array<{ label: string; href: string }>;
  video?: string;
  image?: string;
  liveLink?: string;
  githubLink?: string;
  tags: string[];
  date?: string;
  tweetUrl?: string;
    links?: Array<{
    icon: React.ReactNode;
      type: string;
    href: string;
    }>;
}
