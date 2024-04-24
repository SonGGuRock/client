const isValidVerficationCode = (code: string) => {
  const regex: RegExp = /^[0-9]{6}$/;
  return regex.test(code);
};

export default isValidVerficationCode;
