import {
  achievement as achievementExperience,
  educations as educationExperience,
  others as otherExperience,
  cves as cvesExperience,
  presentations as presentationExperience,
  publications as publicationExperience,
  work as workExperience,
} from '@data/experiences';
// eslint-disable-next-line import/no-extraneous-dependencies
import fs from 'fs-extra';

const allExperiences = {
  achievement: achievementExperience,
  educations: educationExperience,
  others: otherExperience,
  cves: cvesExperience,
  presentations: presentationExperience,
  publications: publicationExperience,
  work: workExperience,
};

(async () => {
  fs.ensureDirSync('.contents');
  fs.writeJsonSync('.contents/experiences.json', allExperiences);
})();
