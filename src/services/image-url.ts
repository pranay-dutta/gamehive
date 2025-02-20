// Inserts "crop/600/400" into the URL to resize the image.
const getCroppedImage = (url: string): string | undefined => {
  if (!url) return;
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  const updatedUrl = url.slice(0, index) + "crop/600/400/" + url.slice(index);
  return updatedUrl;
};

export default getCroppedImage;
