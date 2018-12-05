import React from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { addPhoto as addPhotoAction } from '../actions/photos';

class PhotoAddForm extends React.Component {
  performAddPhoto = () => {
    const { addPhoto } = this.props;
    const data = {
      body: {
        title: 'Lorem ipsum dolor sit amet',
        desc:
          'Sed interdum, quam et malesuada consectetur, tellus elit fermentum mi, fermentum placerat sapien neque eu quam. Pellentesque fringilla augue at nulla imperdiet faucibus. Quisque nisi ligula, cursus sit amet congue quis, commodo mattis est. Quisque sodales lectus non felis rhoncus posuere.',
        img: `p${Math.floor(Math.random() * 9) + 1}.jpg`,
      },
    };
    addPhoto(data);
  };

  render() {
    return (
      <Button color="primary" onClick={this.performAddPhoto}>
        Post New
      </Button>
    );
  }
}

export default connect(
  null,
  {
    addPhoto: addPhotoAction,
  }
)(PhotoAddForm);
