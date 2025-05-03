export const cropTitle = (title: string, length: number) => {
  if (title.length >= length) {
    const titleEndLength = length - 1 > 0 ? length - 1 : 1;
    return title.substring(0, titleEndLength) + '…';
  }
  return title;
};
