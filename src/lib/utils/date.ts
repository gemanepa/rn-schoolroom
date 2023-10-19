const formatIsoDate = (isoDate: string) => {
  const date = new Date(isoDate);
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
};

// eslint-disable-next-line import/prefer-default-export
export { formatIsoDate };
