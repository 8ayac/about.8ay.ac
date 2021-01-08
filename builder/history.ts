import {
  achievement as achievementHistory,
  educations as educationHistory,
  others as otherHistory,
  personal as personalHistory,
  presentations as presentationHistory,
  work as workHistory,
} from '@data/history';
// eslint-disable-next-line import/no-extraneous-dependencies
import fs from 'fs-extra';

const allHistories = {
  achievement: achievementHistory,
  educations: educationHistory,
  others: otherHistory,
  personal: personalHistory,
  presentations: presentationHistory,
  work: workHistory,
};

(async () => {
  fs.ensureDirSync('.contents');
  fs.writeJsonSync('.contents/history.json', allHistories);
})();
