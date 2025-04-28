export const cropTitle = (title: string) => {
  console.log('TITLE');
  console.log(title);
  if (title.length >= 23) {
    return title.substring(0, 20) + '...';
  }
  return title;
};
