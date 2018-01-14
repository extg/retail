import React from 'react';
import {PropTypes} from 'prop-types';
import {Link} from 'react-router-dom';

const propTypes = {
  name: PropTypes.node,
  link: PropTypes.node
};

const NavItems = ({name, link}) => {
  return (
    <li className='navigation__item'>
      <Link to={link} className='navigation__link'>{name}</Link>
    </li>
  );
};
NavItems.propTypes = propTypes;

export default NavItems;
