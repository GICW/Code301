/* eslint-disable react/prop-types */
import React from 'react';
import { Container, Row } from 'react-bootstrap';
// import CardColumns from 'react-bootstrap/CardColumns';
import HornedBeast from './HornedBeast';

function Gallery(props) {

  return (
    <Container id="beast-container">
      <Row xs={1} md={3}>
        {props.allBeasts.map((beast, idx) => (
          <HornedBeast
            key={idx}
            index={idx}
            src={beast.image_url}
            title={beast.title}
            description={beast.description}
            displayAsModal={props.displayAsModal}
          />
        ))}
      </Row>

    </Container>
  );
}

export default Gallery;
