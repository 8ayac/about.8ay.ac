import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

export type DateString = `${number}-${number}-${number}`;
type Term = {
  startedAt: DateString;
  endedAt?: DateString;
};

export type ExperienceDate = DateString | Term;

export interface Experience {
  date: ExperienceDate;
}

export type LinkWithDescription = {
  url: string;
  description?: string;
};

export type AchievementHistory = Experience & {
  title: string;
  summaries: string[];
  references: LinkWithDescription[];
};

export type EducationalHistory = Experience & {
  degree: string;
  department: string;
  faculty?: string;
  school: string;
  location: string;
};

export type OtherHistory = Experience & {
  title: string;
  summaries?: string[];
  references?: LinkWithDescription[];
};

export type PersonalHistory = Experience & {
  title: string;
  summaries?: string[];
  references?: LinkWithDescription[];
};

export type PresentationHistory = Experience & {
  title: string;
  url: string;
  imagePath: string;
};

export type PublicationHistory = Experience & {
  title: string;
  summaries?: string[];
  references: LinkWithDescription[];
};

export type WorkHistory = Experience & {
  belongsTo: string;
  position: string;
  summaries: string[];
  references?: LinkWithDescription[];
};

export type SocialInformation = LinkWithDescription & {
  icon?: IconDefinition;
};
