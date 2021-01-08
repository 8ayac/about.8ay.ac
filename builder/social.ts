import { social as socialData } from '@data/social';
import fs from 'fs-extra';

(async () => {
  fs.ensureDirSync('.contents');
  fs.writeJsonSync('.contents/social.json', socialData);
})();
