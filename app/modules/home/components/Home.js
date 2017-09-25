import React from 'react';

export default ({sampleAction, home:{sampleData}}) => (
  <div>
    <h1>Before click in any link or button, open the react devtools in your browser</h1>
    <h2>And check state</h2>
    <button onClick={() => sampleAction("I'm a lazy action...")}>
      Click here to see the action being trigerred!
    </button>
    {sampleData? <div className="m-t-sm">And the action set this on the store: <b>"{sampleData}"</b></div> : null }
  </div>
);