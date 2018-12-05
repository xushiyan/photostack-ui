import React from 'react';
import { PhotoAddForm, PhotoList } from './containers';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <PhotoAddForm />
        <PhotoList />
      </React.Fragment>
    );
  }
}

export default App;
