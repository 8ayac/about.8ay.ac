import { social as socialData } from '@data/social';
// eslint-disable-next-line import/no-extraneous-dependencies
import fs from 'fs-extra';

(async () => {
  fs.ensureDirSync('.contents');
  fs.writeJsonSync('.contents/social.json', socialData);
})();
