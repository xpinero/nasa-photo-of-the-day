import React, { useEffect, useState } from "react";
import "./App.css";
import Picture from "./components/Picture/Picture";
import { PhotoService } from "./services/photo-service";

function App() {
  const [photo, setPhoto] = useState();
  useEffect(() => {
    PhotoService.getDailyPhoto().then(photo => {
      setPhoto(photo);
    });
  }, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      {photo && <Picture photo={photo}></Picture>}
    </div>
  );
}

export default App;
