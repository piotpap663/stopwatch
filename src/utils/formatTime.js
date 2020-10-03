export default (sec) => {
  const hours = Math.floor(sec / 3600) || 0;
  const minutes = Math.floor((sec - hours * 3600) / 60) || 0;
  const seconds = sec - hours * 3600 - minutes * 60 || 0;

  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedHours = hours < 10 ? `0${hours}` : hours;

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};
