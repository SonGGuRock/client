'use client';

import { useEffect, useState } from 'react';

type WORK_TYPE = 'throw' | 'hand';

export type Reservation = {
  student_id?: number;
  student_name?: string;
  reservation_date?: string;
  reservation_class_time_id?: string;
  work_type?: WORK_TYPE;
};

const useReservationCreate = () => {
  const [reservation, setReservation] = useState<Reservation>();

  const fill = (reservationProperty: Partial<Reservation>) => {
    const updated = reservation
      ? { ...reservation, ...reservationProperty }
      : reservationProperty;
    setReservation(updated);
  };

  useEffect(() => {
    console.log(reservation);
  }, [reservation]);
  return { data: reservation, fill };
};

export default useReservationCreate;
