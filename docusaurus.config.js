/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'SCM',
  tagline: '大交易连生态,供应链链全球',
  url: 'https://scm.springlearn.cn',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/scm-website.png',
  organizationName: 'lxchinesszz', // Usually your GitHub org/user name.
  projectName: 'scm', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Supply Chain Manager',
      logo: {
        alt: 'My Facebook Project Logo',
        src: 'img/scm-website-white.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: '业务体系',
          position: 'right',
        },
        {to: 'blog', label: '系统架构', position: 'right'},
        // Please keep GitHub link to the right for consistency.
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
        {
          title: 'Legal',
          // Please do not remove the privacy and terms, it's a legal requirement.
          items: [
            {
              label: 'Privacy',
              href: 'https://opensource.facebook.com/legal/privacy/',
            },
            {
              label: 'Terms',
              href: 'https://opensource.facebook.com/legal/terms/',
            },
            {
              label: 'Data Policy',
              href: 'https://opensource.facebook.com/legal/data-policy/',
            },
            {
              label: 'Cookie Policy',
              href: 'https://opensource.facebook.com/legal/cookie-policy/',
            },
          ],
        },
      ],
      logo: {
        alt: '供应链系统架构设计',
        src: 'img/scm-website.png?width=12px',
        href: 'https://scm.springlearn.cn',
      },
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright © ${new Date().getFullYear()} SCM for liuxin, 豫ICP备18041471号`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
