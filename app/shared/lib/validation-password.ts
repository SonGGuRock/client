export const isValidPassword = (password: string) => {
  return password.length > 9;
};

export const isPasswordConfirmed = ({
  passwordFirst,
  passwordSecond,
}: {
  passwordFirst: string;
  passwordSecond: string;
}): boolean => {
  return (
    passwordFirst.length !== 0 &&
    passwordSecond.length !== 0 &&
    passwordFirst === passwordSecond
  );
};
