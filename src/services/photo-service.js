import axios from "axios";

export class PhotoService {
  static getDailyPhoto() {
    return axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        console.log(response);
        return response.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
}