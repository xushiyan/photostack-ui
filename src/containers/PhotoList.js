import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { CardColumns } from 'reactstrap';
import { listPhotos as listPhotosAction } from '../actions/photos';
import PhotoCard from './PhotoCard';

class PhotoList extends React.Component {
  componentDidMount() {
    const { listPhotos } = this.props;
    listPhotos();
  }

  render() {
    const { photos } = this.props;
    return (
      <CardColumns>
        {!_.isEmpty(photos) && photos.map(photo => <PhotoCard key={photo.id} photo={photo} />)}
      </CardColumns>
    );
  }
}
const mapStateToProps = ({ photos }) => {
  const sortedPhotos = _.orderBy(photos, ['updTs'], ['desc']);
  return {
    photos: sortedPhotos,
  };
};
export default connect(
  mapStateToProps,
  {
    listPhotos: listPhotosAction,
  }
)(PhotoList);
