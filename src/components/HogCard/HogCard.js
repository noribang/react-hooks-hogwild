import React, { useState } from "react";
import { Card, Image } from "semantic-ui-react";

function HogCard({ name, image }) {


    return (
        <Card color="pink">
            <Image src={image} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{name}</Card.Header>
            </Card.Content>
        </Card>
    );
}

export default HogCard;