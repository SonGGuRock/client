import isDefaultImage from './isDefaultImage';

const getImageWithFallback = (imageUrl: string, defaultSrc: string) => {
  return isDefaultImage(imageUrl) ? defaultSrc : imageUrl;
};

export default getImageWithFallback;
