import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

export type DateString = `${number}-${number}-${number}`;
type Term = {
  startedAt: DateString;
  endedAt?: DateString;
};

export type ExperienceDate = DateString | Term;

export interface Experience {
  date: ExperienceDate;
  summaries?: string[];
  references?: LinkWithDescription[];
}

export type LinkWithDescription = {
  url: string;
  description?: string;
};

export type AchievementExperience = Experience & {
  title: string;
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
};

export type PersonalExperience = Experience & {
  title: string;
};

export type PresentationExperience = Experience & {
  title: string;
  url: string;
  imagePath: string;
};

export type PublicationExperience = Experience & {
  title: string;
};

export type WorkExperience = Experience & {
  belongsTo: string;
  position: string;
};

export type SocialInformation = LinkWithDescription & {
  icon?: IconDefinition;
};
