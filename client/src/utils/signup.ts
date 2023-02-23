export const validPassword = (password: string, confirmPassword: string) => {

  if (password.length === 0 || confirmPassword.length === 0) {
    alert("Password or confirm password cannot be emtpy");
    return false;
  }

  if (password.length < 5 || confirmPassword.length < 5) {
    alert("Password or confirm password has to be greater than 5");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return false;
  }
} 