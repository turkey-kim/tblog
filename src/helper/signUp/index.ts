export function isPasswordValid(pw: string): boolean {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[a-z\d@$!%*?&]{8,20}$/;
  return passwordRegex.test(pw);
}
