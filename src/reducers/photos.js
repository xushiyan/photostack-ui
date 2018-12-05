import _ from 'lodash';
import { LIST_PHOTOS, DELETE_PHOTO, ADD_PHOTO } from '../actions/photos';

export const imgKeyToURL = img =>
  `https://s3-ap-southeast-1.amazonaws.com/rxu-photostack-api-photostorage/${img}`;

export const photos = (state = {}, action) => {
  switch (action.type) {
    case LIST_PHOTOS: {
      const photosArray = action.payload.items.map(item => ({
        imgURL: imgKeyToURL(item.img),
        ...item,
      }));
      return _.mapKeys(photosArray, 'id');
    }
    case ADD_PHOTO: {
      const newPhoto = action.payload;
      return { ...state, [newPhoto.id]: { ...newPhoto, imgURL: imgKeyToURL(newPhoto.img) } };
    }
    case DELETE_PHOTO: {
      const newState = { ...state };
      delete newState[action.payload];
      return newState;
    }
    default:
      return state;
  }
};
