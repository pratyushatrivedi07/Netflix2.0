
export const validateEmail = (email) => {
  if (!email) return "Kindly enter your Email Id";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(email);
  if (!isEmailValid) return "Invalid Email Id";
  return null;
};

export const validatePassword = (password) => {
  if (!password) return "Kindly enter your Password";

  const pwdRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const isPasswordValid = pwdRegex.test(password);
  if (!isPasswordValid) return "Invalid Password";

  return null;
};

export const validateName = (name) => {
  if (!name) return "Kindly enter your Full Name";

  const nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)* [a-zA-Z]+$/;
  const isNameValid = nameRegex.test(name);
  if (!isNameValid) return "Invalid Name";
  return null;
};
