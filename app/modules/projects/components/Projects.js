import React, {PureComponent} from 'react';

export default class Projects extends PureComponent {
  render() {
    // This will ensure that even if this state is not yet on the store, we'll not get
    // an undefined value, causing exceptions when trying to access any property
    const {home = {}} = this.props;

    return (
      <div>
        <h1>You can see the state being filled</h1>
        <h2>This is because new reducers are being added, and their <b>initial state</b>, being set </h2>
        <div className="m-t-sm">
          <p>You can even get data from other already loaded states</p>
          {home.sampleData?
            <span>Like the data from "home" state: <b>{home.sampleData}</b></span> :
            <span>Go back to the "Home" page and click on the button and then, come back here :)</span>
          }
          <p><small>Just make sure the informations of other states be always optionals to you feature</small></p>
        </div>
      </div>
    );
  }
}