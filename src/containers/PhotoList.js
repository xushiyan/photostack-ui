import React from 'react';
import { API } from 'aws-amplify';
import { CardColumns } from 'reactstrap';
import PhotoCard from './PhotoCard';

class PhotoList extends React.Component {
  static getPhotos = () => API.get('photos', '/photos');

  constructor(props) {
    super(props);

    this.state = {
      photos: null,
    };
  }

  async componentDidMount() {
    let photos;
    try {
      const resp = await PhotoList.getPhotos();
      photos = resp.items.map(item => ({
        imgURL: `https://s3-ap-southeast-1.amazonaws.com/rxu-photostack-api-photostorage/${
          item.img
        }`,
        ...item,
      }));
    } catch (e) {
      alert(e);
    } finally {
      this.setState({
        photos,
      });
    }
  }

  render() {
    const { photos } = this.state;
    return (
      <CardColumns>
        {' '}
        {Array.isArray(photos) &&
          !!photos.length &&
          photos.map(photo => <PhotoCard key={photo.id} photo={photo} />)}{' '}
      </CardColumns>
    );
  }
}

export default PhotoList;
