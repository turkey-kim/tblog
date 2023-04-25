import axios from "axios";
import useIdChecker from "../../hooks/signUp/idChecker";

export function checkWhiteSpace(id: string, pw: string, pw2: string): boolean {
  if (id && pw && pw2 != "") {
    return false;
  } else {
    return true;
  }
}

export function isPasswordMatch(pw: string, pw2: string): boolean {
  if (pw == pw2) {
    return true;
  } else {
    return false;
  }
}

export function isPasswordValid(pw: string): boolean {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[a-z\d@$!%*?&]{8,20}$/;
  return passwordRegex.test(pw);
}
