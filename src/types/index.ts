import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

export type DateString = string; // /^[0-9]{4}/(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])$/
type Term = {
  startedAt: DateString;
  endedAt?: DateString;
};

export type LinkWithDescription = {
  url: string;
  description?: string;
};

export type ExperienceDate = DateString | Term;

export interface Experience {
  date: ExperienceDate;
  summaries?: string[];
  references?: LinkWithDescription[];
}
export interface ExperienceWithImage extends Experience {
  title: string;
  url: string;
  imagePath: string;
}
export function implementsExperienceWithImage(
  arg: any
): arg is ExperienceWithImage {
  return ['title', 'url', 'imagePath'].every((key) => key in arg);
}

export type AchievementExperience = Experience & { title: string };
export type OtherExperience = Experience & { title: string };
export type CveExperience = Experience & { title: string };
export type PublicationExperience = Experience & { title: string };

export type EducationalExperience = Experience & {
  degree: string;
  department: string;
  faculty?: string;
  school: string;
  location: string;
};

export type PresentationExperience = ExperienceWithImage;

export type WorkExperience = Experience & {
  belongsTo: string;
  position: string;
};

export type SocialInformation = LinkWithDescription & {
  icon?: IconDefinition;
};
