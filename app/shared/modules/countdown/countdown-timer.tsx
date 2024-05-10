'use client';
import { useEffect, useState } from 'react';
import { ClassNamesProps } from '@/app/widget/reservations/ui/class-time-picker';

interface CountDownTimerProps extends ClassNamesProps {
  onZero: () => void;
}

const CountDownTimer = ({ classNames, onZero }: CountDownTimerProps) => {
  const [timeRemaining, setTimeRemaining] = useState(300);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => prev - 1);
    }, 1000);

    if (timeRemaining === 0) {
      clearInterval(timer);
      onZero();
    }

    return () => clearInterval(timer);
  }, [timeRemaining]);

  const formatTime = (time: number) => {
    const minute = Math.floor(time / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');

    return `${minute}:${seconds}`;
  };

  return (
    <span
      className={`rounded-full text-brown bg-beige py-1 px-3 ${classNames}`}
    >
      {formatTime(timeRemaining)}
    </span>
  );
};

export default CountDownTimer;
