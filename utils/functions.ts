export const shortTitle = (title: any) => {
  const MAX_LENGTH = 18;
  if(title.length > MAX_LENGTH) {
    return title.substring(0, MAX_LENGTH) + '...';
  } else {
    return title;
  }
};