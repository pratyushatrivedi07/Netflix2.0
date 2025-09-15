export const generateRandomNumber = (arr) =>
  Math.floor(Math.random() * arr.length);

export const calculateRuntime = (runtime) => {
  if (!runtime || runtime <= 0) return "N/A";

  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  if (hours > 0 && minutes > 0) {
    return `${hours}h ${minutes}m`;
  } else if (hours > 0) {
    return `${hours}h`;
  } else {
    return `${minutes}m`;
  }
};

export const extractYear = (date) => {
  if (!date) return "N/A";
  return new Date(date).getFullYear();
};
