import React from 'react';

import MenuItem from './MenuItem';

const Menu = () => {
  const catalogs = [
    {
      id: 'tablets',
      name: 'Планшеты'
    },
    {

      id: 'mobiles',
      name: 'Мобильные телефоны'
    },
    {

      id: 'mp3',
      name: 'Mp3 плееры'
    },
    {

      id: 'computers',
      name: 'Компьютеры'
    },
    {

      id: 'accessorizes',
      name: 'Аксессуары'
    },
    {

      id: 'nouts',
      name: 'Ноутбуки'
    },
    {

      id: 'technics',
      name: 'Бытовая техника'
    },
    {

      id: 'watch',
      name: 'Умные Часы'
    },
  ];

  return (
    <nav className='menu'>
      <div className='container'>
        <ul className='menu__list'>
          {
            catalogs.map((catalog, i) => {
              return (<MenuItem
                key={i}
                name={catalog.name}
                id={catalog.id}
                className={'menu'}
              />);
            })
          }
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
