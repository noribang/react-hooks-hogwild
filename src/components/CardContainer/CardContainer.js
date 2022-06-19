import React, { useState } from "react";
import HogCard from "../HogCard/HogCard";
import { Card } from "semantic-ui-react";

function CardContainer({ hogData, showGreased, sortBy }) {
  // Create a copy of our data - the array regardless of the
  // current state of showGreased

  function handleData() {
    // if sortBy is a falsey value, just return
    const hogDataCopy = showGreased
      ? hogData.filter((hog) => hog.greased)
      : [...hogData];

      // If sortBy is falsey (empty string), do nothing to the array and return hogDataCopy.
      if(!sortBy) return hogData
      // If sortBy is the same as "weight", sort the hogDataCopy based on the weight property.
      if(sortBy === "weight") return hogDataCopy.sort((firstHog, secondHog) => firstHog.weight - secondHog.weight)
      // If sortBy is the same as "name", sort the hogDataCopy based on the name property.
      if(sortBy === "name") return hogDataCopy.sort((firstHog, secondHog) => {
        if(firstHog.name > secondHog.name){
            return 1
        } else if (firstHog.name < secondHog.name){
            return -1
        }
        return 0
      })


    // Return an array of filtered datafirstHog.name < secondHog.name
    return hogDataCopy;
  }

  return (
    <Card.Group itemsPerRow={4}>
      {handleData().map((hog) => {
        return (
          <HogCard
            key={hog.name}
            name={hog.name}
            image={hog.image}
            greased={hog.greased}
            specialty={hog.specialty}
            weight={hog.weight}
            highestMedal={hog["highest medal achieved"]}
          />
        );
      })}
    </Card.Group>
  );
}

export default CardContainer;
