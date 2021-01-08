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

export type AchievementExperience = Experience & {
  title: string;
  summaries: string[];
  references: LinkWithDescription[];
};

export type EducationalExperience = Experience & {
  degree: string;
  department: string;
  faculty?: string;
  school: string;
  location: string;
};

export type OtherExperience = Experience & {
  title: string;
  summaries?: string[];
  references?: LinkWithDescription[];
};

export type PersonalExperience = Experience & {
  title: string;
  summaries?: string[];
  references?: LinkWithDescription[];
};

export type PresentationExperience = Experience & {
  title: string;
  url: string;
  imagePath: string;
};

export type PublicationExperience = Experience & {
  title: string;
  summaries?: string[];
  references: LinkWithDescription[];
};

export type WorkExperience = Experience & {
  belongsTo: string;
  position: string;
  summaries: string[];
  references?: LinkWithDescription[];
};

export type SocialInformation = LinkWithDescription & {
  icon?: IconDefinition;
};
