import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";

import store from './store';
import module from './module';
import AppTemplate from './commons/ui/components/AppTemplate';
import AsyncComponent from './AsyncComponent';
import basePath from './commons/utils/basePath';

import "./style/app.scss";

const register = module(store);
const home = () => register('home', import(/* webpackChunkName: "home" */ './modules/home/index'));
const projects = () => register('projects', import(/* webpackChunkName: "projects" */ './modules/projects/index'));
const contact = () => register('contact', import(/* webpackChunkName: "contact" */ './modules/contact/index'));

render(
  <Provider store={store}>
    <Router>
      <AppTemplate>
        <Route path={basePath``} exact={true} component={() => <AsyncComponent moduleProvider={home} />} />
        <Route path={basePath`projects`} exact={true} component={() => <AsyncComponent moduleProvider={projects} />} />
        <Route path={basePath`contact`} exact={true} component={() => <AsyncComponent moduleProvider={contact} />} />
      </AppTemplate>
    </Router>
   </Provider>,
  document.getElementById("app")
);