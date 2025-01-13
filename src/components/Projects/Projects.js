import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import havenfurnish from "../../Assets/Projects/havenfurnish.png";
import currencyconverter from "../../Assets/Projects/currencyconverter.png";
import goodfood from "../../Assets/Projects/goodfood.png";
import massenger from "../../Assets/Projects/massenger.png";
import shiloh from "../../Assets/Projects/shiloh.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={havenfurnish}
              isBlog={false}
              title="Haven-Furnish"
              description="A modern e-commerce platform for selling high-quality home furniture."
              ghLink="https://github.com/Mohamedabdelhady279/Haven-Furnish"
              demoLink="https://haven-furnish.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currencyconverter}
              isBlog={false}
              title="Currency-converter"
              description="A simple app that allows users to convert amounts between different currencies using real-time exchange rates."
              ghLink="https://github.com/Mohamedabdelhady279/Currency-converter"
              demoLink="https://forex-converter.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={goodfood}
              isBlog={false}
              title="Good-Food"
              description="The website is designed to showcase a variety of recipes along with detailed preparation instructions."
              ghLink="https://github.com/Mohamedabdelhady279/Good-food"
              demoLink="https://good-food-86e3.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={massenger}
              isBlog={false}
              title="Massenger-Clone"
              description="A simple app that allows users to convert amounts between different currencies using real-time exchange rates."
              ghLink="https://github.com/Mohamedabdelhady279/Massenger-Clone"
              demoLink="https://massenger-clone-alpha.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shiloh}
              isBlog={false}
              title="Shiloh-Creative"
              description="build marketing websites that help you sell on autopilot."
              ghLink="https://github.com/Mohamedabdelhady279/Shiloh-Creative"
              demoLink="https://shiloh-reative.vercel.app/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
