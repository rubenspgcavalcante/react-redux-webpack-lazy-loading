import React from 'react';

export default ({sampleAction, home:{sampleData}}) => (
  <div>
    <h1>Before click in any link, open the debug tools of your browser</h1>
    <h2>And check the network tab (filter by .js files)</h2>
    <button onClick={() => sampleAction("I'm a lazy action...")}>
      Click here to see the action being trigerred!
    </button>
    {sampleData? <div>And the action set this on the store: {sampleData}</div> : null }
  </div>
);