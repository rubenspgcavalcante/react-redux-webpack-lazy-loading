import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import basePath from 'commons/utils/basePath';

export default ({children}) => (
  <div className="flex-container">
    <nav>
      <Link to={basePath``} >Home</Link>
      <Link to={basePath`projects`}>Projects</Link>
      <Link to={basePath`contact/byMail`} >Contact</Link>
    </nav>
    <div className="container">
      <div className="card text-center">
        {children}
      </div>
    </div>
    <hr/>
    <footer>
      <span><b>Created by Rubens Pinheiro Gonçalves Cavalcante</b></span>
      <a href="https://github.com/rubenspgcavalcante/react-webpack-lazy-loading">Check the source here</a>
    </footer>
  </div>
);