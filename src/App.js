import React, { useEffect, useState } from "react";
import "./App.css";
import Picture from "./components/Picture/Picture";
import { PhotoService } from "./services/photo-service";

function App() {
  const [photo, setPhoto] = useState();
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    PhotoService.getDailyPhoto().then(photo => {
      setPhoto(photo);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      {photo && <Picture photo={photo}></Picture>}
    </div>
  );
}

export default App;
