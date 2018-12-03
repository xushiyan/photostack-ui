import React from 'react';
import { API } from 'aws-amplify';
import { Button, Card, CardImg, CardTitle, CardBody } from 'reactstrap';

class PhotoCard extends React.Component {
  constructor(props) {
    super(props);

    this.deletePhoto.bind(this);
  }

  deletePhoto = () => {
    const { photo } = this.props;
    return API.del('photos', '/photos', {
      body: { id: photo.id }
    }).then();
  }

  render() {
    const { photo } = this.props;
    return (
      <Card>
        <CardImg top width="100%" src={photo.imgURL} alt="Card image cap" />
        <CardBody>
          <CardTitle>{photo.title}</CardTitle>
          <Button color="danger" onClick={this.deletePhoto}>X</Button>
        </CardBody>
      </Card>
    );
  }
}

export default PhotoCard;
