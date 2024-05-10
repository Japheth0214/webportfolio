
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import proj1 from "../../Assets/Projects/project1.png";
import proj2 from "../../Assets/Projects/project2.png";
import proj3 from "../../Assets/Projects/project3.png";
import proj4 from "../../Assets/Projects/project4.png";
import proj5 from "../../Assets/Projects/project5.png";
import proj6 from "../../Assets/Projects/project6.png";

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
              imgPath={proj1}
              isBlog={false}
              title="Real Estate"
              description="Real estate website offers a comprehensive platform for users to browse, buy, sell, and rent properties. Utilizing MongoDB for robust data storage, Express.js for efficient server-side handling, React for seamless and dynamic user interfaces, and Node.js for smooth back-end operations."
              ghLink="https://github.com/Japheth0214/realestate"
              demoLink="https://real-estate-com-u6ln.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proj2}
              isBlog={false}
              title="Little Lemon"
              description="This website demonstrates the implementation of a booking application on the Little Lemon Website, utilizing React components to showcase a solid understanding of React in web development.The project also highlights the integration of API calls, adding functionality and enhancing the overall user experience."
              ghLink="https://github.com/Japheth0214/littlelemon-app"
              demoLink="https://littlelemon-reservation.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proj3}
              isBlog={false}
              title="Mini Ecommerce"
              description="Our simple e-commerce site allows users to easily add items to their cart, make purchases, and calculate the estimated total amount before proceeding to checkout. The site enables smooth functionality for adding and removing items from the cart."
              ghLink="https://github.com/Japheth0214/shopping-cart"
              demoLink="https://japheth0214.github.io/shopping-cart/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proj4}
              isBlog={false}
              title="Task list"
              description="Task list is a straightforward Todo list application. It provides basic CRUD functionalities - users can create new tasks, read existing tasks, update task details, and delete tasks they no longer need. The application has a clean and intuitive user interface, making it easy for users to interact with their tasks."
              ghLink="https://github.com/Japheth0214/task-list"
              demoLink="https://japheth0214.github.io/task-list/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proj5}
              isBlog={false}
              title="Tic-Tac-Toe Game"
              description="Experience the classic game of Tic Tac Toe in this HTML, CSS, and JavaScript rendition. Navigate effortlessly through its clean interface, challenging friends or the computer on a familiar grid layout. Responsive design and smooth animations enhance the experience, ensuring every move is fluid and satisfying, whether you're playing solo or with friends."
              ghLink="https://github.com/Japheth0214/Tiktaktoe-Game"
              demoLink="https://japheth0214.github.io/Tiktaktoe-Game/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proj6}
              isBlog={false}
              title="Youtube Clone"
              description="Dive into HTML and CSS basics with this YouTube clone. Learn fundamental structure, text styling, image handling, and layout techniques including CSS Grid and Flexbox. Perfect for beginners and those seeking a solid foundation in web development, this project offers a streamlined introduction to essential concepts."
              ghLink="https://github.com/Japheth0214/youtubeclone"
              demoLink="https://japheth0214.github.io/youtubeclone/youtubeclone"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
