import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Misión',
    img: require('@site/static/img/mision_png.png').default,
    description: (
      <>
        Escuchar, entender y transformar las ideas de nuestros SF 
        en soluciones funcionales, para crecer juntos.
      </>
    ),
  },
  {
    title: 'Visión',
    img: require('@site/static/img/vision_png.png').default,
    description: (
      <>
        Brindar soluciones que superen las expectativas de nuestros clientes, que tengan un impacto en el futuro de nuestro entorno.
      </>
    ),
  },
  {
    title: 'Valores',
    img: require('@site/static/img/valores_png.png').default,
    description: (
      <>
        IEIWSJSJAKAKJSJK.
      </>
    ),
  },
  {
    title: <a href='https://docs.google.com/forms/d/e/1FAIpQLScuzZ2yLxtN8t_x7T3SqVmeWYvOxSSx8SZW5DpZVq5wO0famw/viewform?usp=sharing&ouid=109504095999872418361'>Buzón de Quejas</a>,
    img: require('@site/static/img/buzon_png2.png').default,
    description: (
      <>
      </>
    ),
  },
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={img} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
          <div>

          </div>
        </div>
      </div>
    </section>
  );
}
