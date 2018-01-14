import React from 'react';
import {PropTypes} from 'prop-types';
import {Link} from 'react-router-dom';

const propTypes = {
  name: PropTypes.node,
  id: PropTypes.node,
  className: PropTypes.node
};

const MenuItem = ({name, id, className}) => {
  return (
    <li className={className + '__item'}>
      <Link to={'/catalog/' + id} className={className + '__link'} data={id}
      >{name}</Link>
    </li>
  );
};

MenuItem.propTypes = propTypes;
export default MenuItem;
