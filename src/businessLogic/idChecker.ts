import axios from "axios";

function idChecker(id: string) {
  axios
    .post("http://localhost:5000/api/id_checker", { id: id })
    .then((response) => {
      const data = response.data;
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
}

export default idChecker;
