import React, { useState } from "react";
import HogCard from "../HogCard/HogCard";
import { Card } from "semantic-ui-react";


function CardContainer({ hogData }) {

    return (
        <Card.Group itemsPerRow={4}>
            {hogData.map((hog) => {
                return (
                    <HogCard 
                        key={hog.name}
                        name={hog.name}
                        image={hog.image}
                    />
                );
            })}
        </Card.Group>
    );
}

export default CardContainer;