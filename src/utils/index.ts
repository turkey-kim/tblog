export const truncateString = (str: string, maxLength: number) => {
  if (str) {
    if (str.length >= maxLength) {
      return str.slice(0, maxLength) + "...";
    } else {
      return str;
    }
  }
};
