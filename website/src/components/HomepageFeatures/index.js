import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'CAD Hub',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        TheCADMan aims to be a comprehensive learning hub for Computational Aided Design,
         covering industrial design theory, manufacturing design process, and
          international standards such as DIN and ISO.
      </>
    ),
  },
  {
    title: 'Lifelong Learning',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Let's shift our focus on Lifelong learning. Make it easy via <code>TheCADMan</code> providing centralized platform 
        for students, enthusiasts, and professionals to learn & share knowledge about CAD.
      </>
    ),
  },
  {
    title: 'Powered by React & Docusaurus',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Customize our website layout by reusing React whilst letting documentation
        handled by Docusaurus which can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
