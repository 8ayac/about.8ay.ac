const realName = 'Yoshinori Hayashi';
const screenName = '8ayac';

export const config = {
  siteMeta: {
    title: `${realName} (@${screenName})`,
  },
  siteRoot:
    process.env.NODE_ENV === 'production'
      ? 'https://about.8ay.ac'
      : 'http://localhost:3000',
};
