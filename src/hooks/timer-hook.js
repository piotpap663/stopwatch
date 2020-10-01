import { useEffect, useState } from 'react';

function useTimer() {
  const [time, setTime] = useState(130);

  useEffect(() => {
    const timeout = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);

    return () => {
      clearInterval(timeout);
    };
  }, []);

  return [time, setTime];
}

export default useTimer;
