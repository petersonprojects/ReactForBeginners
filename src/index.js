import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import BaseLayout from './components/layout/BaseLayout';

ReactDOM.render(

    <Router>
      <BaseLayout>
        <Switch>

          <Route exact path='/' component={App}/>

        </Switch>
      </BaseLayout>
    </Router>,
  document.getElementById('root')

);

