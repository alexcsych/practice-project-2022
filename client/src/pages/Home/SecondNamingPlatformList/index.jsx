import React from 'react';
import secondNamingPlatformCards from './secondNamingPlatformCards';
import styles from './SecondNamingPlatformList.module.sass';

function SecondNamingPlatformList () {
  return (
    <>
      <div className={styles.namingPlatformContainer}>
        <h3>Managed Contests</h3>
        <p>
          Better than a naming agency: Our hybrid-solution partners you with a
          trained Squadhelp branding consultant who will guide your
          crowdsourcing process step-by-step to get the best results possible.
        </p>
        <ul className={styles.namingPlatformList}>
          {secondNamingPlatformCards.map((c, i) => (
            <li key={i}>
              <div className={styles.namingPlatformArticle}>
                <img src={c.iconSrc} alt={c.title} />
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            </li>
          ))}
        </ul>
        <a className={styles.btn} href='#'>
          Learn More
        </a>
      </div>
    </>
  );
}

export default SecondNamingPlatformList;
