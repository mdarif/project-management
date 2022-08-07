import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

const FeatureList = [
  {
    title: 'About MERN App',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        A Dockerize MERN app using Github Actions about Project Management
        System to add/manage clients & Projects using GraphGL Server/Client.
      </>
    )
  },
  {
    title: 'Dockerize MERN App',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>All about creating Docker container image to be pushed to Docker Hub</>
    )
  },
  {
    title: 'GitHub Actions',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Automatically build & push the Full Stack Application onto Docker Hub
        using GitHub Actions
      </>
    )
  }
]

function Feature ({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures () {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
