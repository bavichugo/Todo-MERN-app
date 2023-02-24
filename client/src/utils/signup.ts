export const validPassword = (password: string) => {
  if (password.trim().length < 5) {
    alert("Invalid password");
    return false;
  }

  return true;
}

export const validPasswordAndConfirmPassword = (password: string, confirmPassword: string) => {

  if (password.trim().length === 0 || confirmPassword.trim().length === 0) {
    alert("Password or confirm password cannot be emtpy");
    return false;
  }

  if (password.trim().length < 5 || confirmPassword.trim().length < 5) {
    alert("Password or confirm password has to be greater than 5");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return false;
  }

  return true;
} 