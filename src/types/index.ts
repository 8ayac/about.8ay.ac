import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

export type LinkWithDescription = {
  url: string;
  description?: string;
};

export type AchievementHistory = {
  title: string;
  summaries: string[];
  references: LinkWithDescription[];
  publishedAt: string;
};

export type EducationalHistory = {
  degree: string;
  department: string;
  faculty?: string;
  school: string;
  location: string;
  startedAt: string;
  endedAt?: string;
};

export type OtherHistory = {
  title: string;
  summaries?: string[];
  references?: LinkWithDescription[];
  startedAt: string;
  endedAt?: string;
};

export type PersonalHistory = {
  title: string;
  summaries?: string[];
  references?: LinkWithDescription[];
  startedAt: string;
  endedAt?: string;
};

export type PresentationHistory = {
  title: string;
  url: string;
  imagePath?: string;
  publishedAt: string;
};

export type PublicationHistory = {
  title: string;
  summaries?: string[];
  references: LinkWithDescription[];
  publishedAt: string;
};

export type WorkHistory = {
  belongsTo: string;
  position: string;
  startedAt: string;
  endedAt?: string;
  summaries: string[];
  references?: LinkWithDescription[];
};

export type SocialInformation = LinkWithDescription & {
  icon?: IconDefinition;
};
