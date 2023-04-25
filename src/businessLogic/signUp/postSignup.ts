import axios from "axios";

function postSignUp(id: string, pw: string) {
  axios
    .post("http://localhost:5000/sign_up", {
      id: id,
      pw: pw,
    })
    .then(() => {
      console.log("성공");
      alert("회원가입 성공!");
    })
    .catch(() => {
      console.log("실패");
    });
}

export default postSignUp;
