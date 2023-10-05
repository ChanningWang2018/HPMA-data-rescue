// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Oh My Dear HPMA',
  tagline: 'a must-play for anyone who enjoys questioning their life choices.',
  favicon: 'img/px_owl_favicon.ico',

  // Set the production url of your site here
  url: 'https://dear-hpma.vercel.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/', // If you are using GitHub pages, you had better change this.

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ChanningWang2018', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  trailingSlash: false, // It is recommended to set a trailingSlash config (true or false, not undefined).

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          postsPerPage: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        logo: {
          alt: 'Owl Logo',
          src: 'img/px_owl_favicon.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文档⚔',
          },
          {to: '/blog', label: '公告📣', position: 'left'},
          
        ],
      },
      footer: {
        style: 'dark',
        copyright: `
        Oh-My-Dear-HPMA is not endorsed by or affiliated with NetEase Games or Warner Bros. Games.
        Copyright © ${new Date().getFullYear()} Bourdieu`,
      },
      prism: {
        theme: lightCodeTheme, // 浅色模式为lightCodeTheme
        darkTheme: darkCodeTheme,
      },
    }),
  
  plugins: [
    './plugins/my-fetch-plugin'
  ]
};

module.exports = config;
