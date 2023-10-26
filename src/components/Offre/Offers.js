import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { DeleteOffre } from "../../Service/offre";

export default function Offres(props) {
    console.log(props)
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          //add space between cards
          gap: "1rem",
          alignItems: "center",
          alignContent: "center",
          marginTop: "5vh",
        }}
      >
        {props.offers.map((product) => (
          <Card
            key={product.id}
            style={{ width: "16rem", boxShadow: "0 0 10px rgba(0,0,0,0.5)" }}
          >
            <Card.Img
              variant="top"
              src={product.image}
              style={{
                boxShadow: "0 0 10px rgba(0,0,0,0.3)",
              }}
            />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>{product.status}</Card.Text>
              <Button variant="danger" onClick={()=>DeleteOffre(product.id)}>Delete</Button>
        <Button variant="primary" >Update</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}
