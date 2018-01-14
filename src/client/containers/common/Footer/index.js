import React from 'react';

import styles from './style.css';
import Container from '../../Container/index';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__content}>
          <img src='./logo_footer.png' alt='' className={styles.footer__logo}/>
          <div className={styles.footer__right}>
            <div className={styles.footer_nav__item}>
              <ul className={styles.footer_nav__list} />
            </div>
          </div>
        </div>
        <div className={styles.footer__copyright}>All rights reserved. 2017. no copy allowed.</div>
      </Container>
    </footer>
  );
};

export default Footer;
