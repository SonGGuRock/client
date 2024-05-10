export function formDataToJSON(formData: FormData) {
  return Object.fromEntries(formData.entries());
}
