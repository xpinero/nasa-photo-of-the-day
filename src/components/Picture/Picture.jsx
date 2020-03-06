import React from "react";
import { Card, CardBody, CardImg, CardText, Jumbotron } from "reactstrap";
import "./Picture.css";

function Picture(props) {
  const photo = props.photo;
  return (
    <div className="photo-container">
      <Jumbotron>
        <h1 className="display-4">{photo.title}</h1>
        <h2>{photo.date}</h2>
      </Jumbotron>
      <Card>
        <CardImg top width="100%" src={photo.hdurl} alt={photo.title} />
        <CardBody>
          <CardText>{photo.explanation}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default Picture;
