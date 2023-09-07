export const checkValidName = (name) => {
  const isNameValid = /^[a-z ,.'-]+$/i.test(name);
  if (!isNameValid) return "Name is not valid!";

  return null;
};

export const checkValidEmail = (email) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email,
  );
  if (!isEmailValid) return "Email is not valid!";

  return null;
};

export const checkValidPassword = (password) => {
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isPasswordValid) return "Password is not valid!";

  return null;
};
