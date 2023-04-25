export function checkWhiteSpace(id: string, pw: string, pw2: string): boolean {
  if (id && pw && pw2 != "") {
    return false;
  } else {
    return true;
  }
}
