'use client';

import { ReactNode, createContext } from 'react';
import useReservationCreate, {
  Reservation,
} from '../widget/reservations/lib/use-reservation-create';

type ReservationCreateContext = {
  data?: Reservation;
  fill: (reservationProperty: Partial<Reservation>) => void;
};

export const ReservationCreateContext =
  createContext<ReservationCreateContext | null>(null);

export default function ReservationCreateProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ReservationCreateContext.Provider value={useReservationCreate()}>
      {children}
    </ReservationCreateContext.Provider>
  );
}
