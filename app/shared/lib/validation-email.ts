const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function isValidEmail(email: string): boolean {
  return emailRegex.test(email);
}
