import { readFromLocalStorage } from './localStorage';

function restoreTimer() {
  const timer = JSON.parse(readFromLocalStorage('timer'));
  if (!isNaN(timer)) {
    return timer;
  } else {
    return null;
  }
}

export default restoreTimer;
