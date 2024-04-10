'use client';

import { useState } from 'react';

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
    setReservation(reservationProperty);
  };

  return { data: reservation, fill };
};

export default useReservationCreate;
