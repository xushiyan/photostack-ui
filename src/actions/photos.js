import { API } from 'aws-amplify';

export const LIST_PHOTOS = 'LIST_PHOTOS';
export const listPhotos = () => {
  const request = API.get('photos', '/photos');
  return {
    type: LIST_PHOTOS,
    payload: request,
  };
};
export const ADD_PHOTO = 'ADD_PHOTO';
export const addPhoto = data => {
  const request = API.post('photos', '/photos', data);
  return {
    type: ADD_PHOTO,
    payload: request,
  };
};
export const DELETE_PHOTO = 'DELETE_PHOTO';
export const deletePhoto = (photoId, callback = () => {}) => {
  API.del('photos', '/photos', {
    body: {
      id: photoId,
    },
  }).then(() => callback());
  return {
    type: DELETE_PHOTO,
    payload: photoId,
  };
};
