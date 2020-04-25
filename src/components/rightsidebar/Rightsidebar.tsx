import React from "react";
import Card from "react-bootstrap/Card";
import "./Rightsidebar.scss";
import about from "./about.png";

function RightNavBar() {
  return (
    <div>
      <Card className="right-sidebar mt-3">
        <Card.Body>
          <img src={about} className="about" alt="About" />
          <h2>About</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          odit doloremque ad dicta aut maiores tempora. Natus explicabo quam
          reprehenderit nam nihil dignissimos? Fugit nemo temporibus, eos
          dolores, odit sunt, a aut dolor tenetur totam velit incidunt mollitia
          explicabo inventore? Unde minima tenetur vitae quos eveniet facilis
          repudiandae doloribus nisi?
        </Card.Body>
      </Card>
      <Card className="right-sidebar mt-3">
        <Card.Body>
          <h2>Posts</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          odit doloremque ad dicta aut maiores tempora. Natus explicabo quam
          reprehenderit nam nihil dignissimos? Fugit nemo temporibus, eos
          dolores, odit sunt, a aut dolor tenetur totam velit incidunt mollitia
          explicabo inventore? Unde minima tenetur vitae quos eveniet facilis
          repudiandae doloribus nisi?
        </Card.Body>
      </Card>
    </div>
  );
}

export default RightNavBar;
