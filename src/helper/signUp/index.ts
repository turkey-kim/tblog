import { sendUserInfo } from "../../api/auth";

export function isPasswordValid(pw: string): boolean {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[a-z\d@$!%*?&]{8,20}$/;
  return passwordRegex.test(pw);
}

export async function idChecker(id: string) {
  const apiEndpoint = "api/id_checker";
  try {
    const response = await sendUserInfo(id, null, null, apiEndpoint);
    const result = response.duplicate;
    return result;
  } catch (error) {
    throw new Error("id_checker API error occured");
  }
}
