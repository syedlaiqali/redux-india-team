import React from "react";
import { Card, Button,} from "react-bootstrap";
// import React, { useState, useEffect } from "react";

export const Home = (props) => {
  return (
    <div>
   
      <br/>
      <Card
        style={{ width: "18rem", height: "400px", margin: "20px" }}
        variant="primary"
      >
        <Card.Img variant="top" src={props.img} width="200px" height="200px" />
        <Card.Body>
          <Card.Title>{props.up}</Card.Title>
          <Card.Title>{props.ply}</Card.Title>
          <Card.Text>{props.stt}</Card.Text>
          <Button variant="primary">player Info</Button>
        </Card.Body>
      </Card>

      {/* <input
     type="text"
     onChange={(e) => setText(e.target.value)}
     placeholder="Enter Player Rank"
   />
   <input
     type="text"
     onChange={(e) => setText1(e.target.value)}
     placeholder="Enter Player Name"
   />
   <input
     type="text"
     onChange={(e) => setText2(e.target.value)}
     placeholder="Enter Player Country"
   />
   <br />
   <button onClick={handleEvent}>Submit</button>
   <input
   type="text"
   onChange={(e) => setText(e.target.value)}
   placeholder="Enter Player Rank"
 />
 <input
   type="text"
   onChange={(e) => setText1(e.target.value)}
   placeholder="Enter Player Name"
 />
 <input
   type="text"
   onChange={(e) => setText2(e.target.value)}
   placeholder="Enter Player Country"
 />
 <br />
 <button onClick={handleEvent}>Submit</button> */}
    </div>
  );
};
