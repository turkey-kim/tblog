import { useState } from "react";
import axios from "axios";
import postUserInfo from "../../api/sendUserInfo";

function useIdChecker(id: string) {
  const [idValidity, setValidity] = useState(false);

  axios
    .post("http://localhost:5000/api/id_checker", { id: id })
    .then((response) => {
      const data = response.data;
      if (data.duplicate) {
        setValidity(true);
      } else {
        setValidity(false);
      }
    })
    .catch((error) => {
      console.log(error);
    });

  return [idValidity];
}

export default useIdChecker;
