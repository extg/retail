import React from 'react';
import {Link} from 'react-router-dom';

import NavItems from './../../navigation/NavItems';
import styles from './style.css';

const Header = () => {
  const nav = [{
    name: 'Контакты',
    link: '/contacts'
  }, {
    name: 'Каталог',
    link: '/catalog'
  }, {
    name: 'Корзина',
    link: '/cart'
  }];

  return (
    <header className={styles.header}>
      <div className={styles.header__top}>
        <div className={styles.header__container}>
          <div className={styles.header__contacts}>
            <div className={styles.header__address}>ул. Маяковская 6, офис 17</div>
            <a href='tel://+7(921)123-12-13' className={styles.header__phone}>+7 (921) 123-12-12</a>
          </div>
        </div>
      </div>
      <div className={styles.header__bottom}>
        <div className={styles.header__container}>
          <Link to='/'>
            <img src='images/logo/logo.png' alt='Cooltech' className={styles.header__logo}/>
          </Link>
          <form action='' className={styles.header__search}>
            <input type='text' className={styles.search__input} placeholder='Что будем искать'/>
            <button type='submit' className={styles.search__submit} href="/search">Найти</button>
          </form>
          <div className='navigation'>
            <ul className='navigation__list'>
              {
                nav.map((el, i) => {
                  return (<NavItems
                    key={i}
                    name={el.name}
                    link={el.link}
                  />);
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
