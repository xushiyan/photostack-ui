import React from 'react';
import { Button, Card, CardImg, CardTitle, CardBody } from 'reactstrap';
import { connect } from 'react-redux';
import { deletePhoto as deletePhotoAction } from '../actions/photos';

class PhotoCard extends React.Component {
  performDeletePhoto = () => {
    const { photo, deletePhoto } = this.props;
    deletePhoto(photo.id);
  };

  render() {
    const { photo } = this.props;
    return (
      <Card>
        <CardImg top width="100%" src={photo.imgURL} alt="Card image cap" />
        <CardBody>
          <CardTitle>{photo.title}</CardTitle>
          <Button color="danger" onClick={this.performDeletePhoto}>
            delete
          </Button>
        </CardBody>
      </Card>
    );
  }
}

export default connect(
  null,
  {
    deletePhoto: deletePhotoAction,
  }
)(PhotoCard);
