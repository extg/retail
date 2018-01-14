import React from 'react';
import {Route} from 'react-router';

import 'styles/reset.css';
import 'styles/main.css';

import CatalogPage from '../pages/CatalogPage';

const App = () => (
  <div>
    <Route path="/" component={CatalogPage}/>
  </div>
);

export default App;
