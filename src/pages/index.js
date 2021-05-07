/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import ITypedLine from '../component/ityped';

const pageConfig = {
  features: [
    {
      title: '业务体系',
      imageUrl: 'img/package-1.png',
      description: '什么是供应链 ? 供应链全局体系是什么 ? B端C端又是什么 ?',
    },
    {
      title: '系统架构',
      imageUrl: 'img/transport-1.png',
      description: '如何根据业务体系构建技术架构,领域架构如何抽象。',
    },
  ],

  bannerButtons: [
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
  ],

  bannerImg: {
    url: 'img/package-6.png',
    bannerImgAlt: 'img/package-1.png',
    className: 'bannerImg',
  },

  bannerTagLines: ['Supply chain system design !'],
};



function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--6', styles.features)}>
      {imgUrl && (
        <div className='text--center'>
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description='Description will go into a meta tag in <head />'>
      <header className={clsx('hero', styles.heroBanner)}>
        <div className={styles.bannerLeft}>
          <h1 className='hero__title'>{siteConfig.title}</h1>
          <p className={clsx('hero__subtitle', styles.bannerLeftP)}>
            {siteConfig.tagline}
            <ITypedLine strs={pageConfig.bannerTagLines} />
          </p>
          <div className={styles.buttonWrapper}>
            {pageConfig.bannerButtons.map(({bannerTitle, bannerUrl, className}) => (
              <div className={clsx(styles.buttons, className)}>
                <Link
                  className={clsx(
                    'button--lg',
                    styles.bannerButtonLeft,
                  )}
                  to={useBaseUrl(bannerUrl)}>
                  {bannerTitle}
                </Link>
              </div>
            ))}

          </div>
        </div>
        <div className={styles.bannerRight}>
          <img className={pageConfig.bannerImg.className} src={pageConfig.bannerImg.url}
               alt={pageConfig.bannerImg.bannerImgAlt} />
        </div>
      </header>

      <div className={clsx(styles.bannerTriangle)}></div>
      <main>
        {pageConfig.features && pageConfig.features.length > 0 && (
          <section className={styles.features}>
            <div className='container'>
              <div className='row'>
                {pageConfig.features.map(({title, imageUrl, description}) => (
                  <Feature
                    key={title}
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
