import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fidelize o cliente de forma espontânea',
    Svg: require('@site/static/img/opencashback.svg').default,
    description: (
      <>
        O OpenCashback é uma ferramenta omnichannel ideal para as empresas melhorarem os seus resultados,
        beneficiando os seus clientes através de uma solução exclusiva de Cash Back.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={"row"}>
      <div className={clsx('col col--4')}/>
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
    <div className={clsx('col col--4')}/>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
      </div>
    </section>
  );
}
