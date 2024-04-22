'use server';

import { revalidatePath, unstable_noStore } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createInvoice(formData: FormData) {}

export async function updateTodo(id: number) {
  try {
    const res = await fetch(`http://localhost:3000/api/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id }),
    });

    revalidatePath('/home');
    redirect('/home');
  } catch (error) {
    console.error('Failed to fetch todos:', error);
    throw new Error('Failed to fetch todos.');
  }
}
