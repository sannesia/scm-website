// 首页的配置信息


// eslint-disable-next-line header/header
const features = [
  {
    title: '业务体系',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: '什么是供应链 ? 供应链全局体系是什么 ? B端C端又是什么 ?',
  },
  {
    title: '系统架构',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: '如何根据业务体系构建技术架构,领域架构如何抽象。',
  },
];

const bannerButtons = [
  {
    bannerTitle: '业务体系',
    bannerUrl: '',
    className: 'bannerButtonLeft',
  },
  {
    bannerTitle: '系统设计',
    bannerUrl: '',
    className: 'bannerButtonRight',
  },
];

const bannerImg = {
  url: 'img/package-3.png',
  bannerImgAlt: 'img/package-1.png',
  className: 'bannerImg',
};

const bannerTagLines = ['Supply chain system design !'];

// eslint-disable-next-line header/header
const pageConfig = {
  features,
  bannerButtons,
  bannerImg,
  bannerTagLines,
};

export default pageConfig;
