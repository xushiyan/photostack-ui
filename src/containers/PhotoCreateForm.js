import React from 'react';
import { Button } from 'reactstrap';
import { API } from 'aws-amplify';

class PhotoCreateForm extends React.Component {
  createPhoto = () =>
    API.post('photos', '/photos', {
      body: {
        title: 'Lorem ipsum dolor sit amet',
        desc:
          'Sed interdum, quam et malesuada consectetur, tellus elit fermentum mi, fermentum placerat sapien neque eu quam. Pellentesque fringilla augue at nulla imperdiet faucibus. Quisque nisi ligula, cursus sit amet congue quis, commodo mattis est. Quisque sodales lectus non felis rhoncus posuere.',
        img: `p${Math.floor(Math.random() * 9) + 1}.jpg`,
      },
    });

  render() {
    return (
      <Button color="danger" onClick={this.createPhoto}>
        {' '}
        Post New{' '}
      </Button>
    );
  }
}

export default PhotoCreateForm;
