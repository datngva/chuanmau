import defaultImage from './assets/images/default.png';

const CONFIG = {
  name: 'Chuẩn Màu',

  origin: 'https://chuanmau.com/',
  basePathname: '/',
  trailingSlash: false,

  title: 'Chuẩn Màu - Dịch vụ cân chỉnh màu màn hình tại Hà nội',
  description:
    'Cân màu màn hình, laptop, bảng vẽ tại Hà nội.',
  defaultImage: defaultImage,

  defaultTheme: 'light', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'vi',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

  googleAnalyticsId: "G-RTJ2270PK0", // or "G-XXXXXXXXXX",
  googleSiteVerificationId: 'RrFlTylhRlRngAVxH3qU8l8xD6a1SGDj_w8CMwS2hxA',

  blog: {
    disabled: false,
    postsPerPage: 4,

    post: {
      permalink: '/%slug%', // Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      noindex: false,
      disabled: false,
    },

    list: {
      pathname: 'blog', // Blog main path, you can change this to "articles" (/articles)
      noindex: false,
      disabled: false,
    },

    category: {
      pathname: 'category', // Category main path /category/some-category
      noindex: true,
      disabled: false,
    },

    tag: {
      pathname: 'tag', // Tag main path /tag/some-tag
      noindex: true,
      disabled: false,
    },
  },
};

export const SITE = { ...CONFIG, blog: undefined };
export const BLOG = CONFIG.blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;
