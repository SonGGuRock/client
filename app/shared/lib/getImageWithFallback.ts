import { isDefaultProfilePicture } from './isDefaultImage';

const getImageWithFallback = (imageUrl: string, defaultSrc: string) => {
  return isDefaultProfilePicture(imageUrl) ? defaultSrc : imageUrl;
};

export default getImageWithFallback;
