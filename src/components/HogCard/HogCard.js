import React, { useState } from "react";
import { Card, Image } from "semantic-ui-react";

function HogCard({ name, image, greased, specialty, highestMedal, weight }) {
  const [showData, setShowData] = useState(false);

  function handleToggleData() {
    setShowData((oldState) => !oldState);
  }

  function renderDetails() {
    return (
      <>
        <div className="specialty">Specialty: {specialty}</div>
        <div className="weight">Weight: {weight}</div>
        <div className="highestMedal">Highest Medal: {highestMedal}</div>
        <div className="greased">Greased: {greased ? "Yes" : "No"}</div>
      </>
    );
  }

  return (
    <Card color="pink" onClick={handleToggleData}>
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        {showData ? renderDetails() : null}
      </Card.Content>
    </Card>
  );
}

export default HogCard;