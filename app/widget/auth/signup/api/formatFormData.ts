// import { formatPhoneNumber } from '@/app/shared/lib/formatPhoneNumber';

// export function formatFormData (formData: FormData){

//     const phoneNumber: FormDataEntryValue | null = formData.get('phone_number');
//     if (phoneNumber && typeof phoneNumber === 'string') {
//       const formattedPhoneNumber = formatPhoneNumber(phoneNumber);
//       formData.set('phone_number', formattedPhoneNumber);
//     }

//     const userType = path.includes('teacher') ? 'teacher' : 'student';
//     formData.set('user_type', userType);

//     const body = formDataToJSON(formData);
// }