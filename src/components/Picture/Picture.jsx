import React from "react";
import "./Picture.css";

function Picture(props) {
  const photo = props.photo;
  return (
    <div className="photo-container">
      <h2>{photo.title} - {photo.date}</h2>
      <img className="photo" src={photo.hdurl} alt="" />
      <div>{photo.explanation}</div>
    </div>
  );
}

export default Picture;
