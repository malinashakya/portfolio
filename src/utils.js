export const getImageUrl = (path) => {
  // generate and return a fully qualified URL for an image asset based on the provided path.
  return new URL(`/assets/${path}`, import.meta.url).href;
};
