export const getAssetsFile = (url) => {
  try {
    return new URL(`../assets/images/${url}`, import.meta.url).href;
  } catch (error) {
    console.warn(error);
  }
};