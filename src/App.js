import React from 'react';
import { PhotoCreateForm, PhotoList } from './containers';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <PhotoCreateForm />
        <PhotoList />
      </React.Fragment>
    );
  }
}

export default App;
