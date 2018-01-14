import React from 'react';
import {PropTypes} from 'prop-types';

const propTypes = {
  children: PropTypes.node
};

import styles from './style.css';

const Container = ({children}) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

Container.propTypes = propTypes;

export default Container;
