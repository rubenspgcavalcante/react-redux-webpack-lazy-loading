import React from 'react';

export default ({ match, location, history }) => (
  <div>
    <h1>You can even integrate with the router </h1>
    <h2> Like getting informations about the location and route parameters </h2>
    <div className="m-t-sm text-left">
      <hr/>
      <ul>
        <li>Like the current location: {location.pathname}</li>
        <li>Or the given params: {JSON.stringify(match.params)}</li>
      </ul>
    </div>
  </div>
);