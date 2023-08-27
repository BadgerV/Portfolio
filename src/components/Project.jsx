import { ProjectCard } from "./ProjectCard.jsx";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import project1 from "../assets/img/LendSqr.png";
import project2 from "../assets/img/Dashboard.png";
import project3 from "../assets/img/Segunmaru.png";
import project4 from "../assets/img/img1.png";
import project5 from "../assets/img/Trillo.png";
import project6 from "../assets/img/SKKN.png";

const Project = () => {
  //lsit of propjects
  const projects = [
    {
      title: "Advanced Dashboard",
      description: "Dasboard built with ReactJS and SCSS ",
      imgUrl: project1,
      url: "https://shiny-starburst-53a0ab.netlify.app/",
      url2: "https://github.com/BadgerV/LendSQR",
    },
    {
      title: "Dashboard",
      description: "Built uisng ReactJS and styled-components",
      imgUrl: project2,
      url: "https://incandescent-biscotti-9bccf9.netlify.app/",
      url2: "https://github.com/BadgerV/Advance-Dashboard",
    },
    {
      title: "3D Portfolio",
      description: "Designed with ReactJS, ThreeJS and Framer-motion",
      imgUrl: project3,
      url: "https://642e6d2517a6b06d18a4bbb5--exquisite-bublanina-72c45c.netlify.app/",
      url2: "https://github.com/BadgerV/3d-portfolio",
    },
    {
      title: "SKKN Shopping Website",
      description: "Shopping website built with ReactJS and CSS",
      imgUrl: project6,
      url: "https://heartfelt-biscuit-cbdbaa.netlify.app/",
      url2: "https://github.com/BadgerV/SKKN-clone",
    },
    {
      title: "Trillo Hotel Website",
      description: "Hotel and flight booking app",
      imgUrl: project5,
      url: "https://tangerine-monstera-210b3f.netlify.app/",
      url2: "https://github.com/BadgerV/Trillo-project",
    },
    {
      title: "E-Commerce Website",
      description: "Simple E-commerce website",
      imgUrl: project4,
      url: "https://incandescent-biscotti-9bccf9.netlify.app/",
      url2: "https://github.com/BadgerV/crwn-clothings",
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p className="paragraph-text">
              Welcome to the project section of my portfolio, where I'm thrilled
              to showcase my professional accomplishments and skills. Here,
              you'll find three dedicated tabs: Projects, Skills, and
              Achievements, each offering a comprehensive look into my work
              experience and personal growth as a professional.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center tabs"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    <span className="tab-text">Projects</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    <span className="tab-text">Skills</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    <span className="tab-text">Achievements</span>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, idx) => {
                      return <ProjectCard key={idx} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div className="achieve">
                    <h4>Skills</h4>
                    <ul>
                      <li>
                        Proficiency in JavaScript programming language,
                        including modern frameworks like React.js and Vue.js.
                      </li>
                      <li>
                        Experience in server-side scripting with Node.js,
                        including building RESTful APIs and integrating with
                        databases like MongoDB, MySQL, or PostgreSQL.
                      </li>
                      <li>
                        Strong knowledge of HTML, CSS, and frontend frameworks
                        like Bootstrap and Tailwind.
                      </li>
                      <li>
                        Familiarity with version control systems like Git, and
                        the ability to collaborate effectively with other
                        developers using tools like GitHub.
                      </li>
                      <li>
                        Understanding of web development concepts like
                        responsive design, accessibility, and cross-browser
                        compatibility.
                      </li>
                    </ul>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <div className="achieve">
                    <h4>Achievements</h4>
                    <ul>
                      <li>
                        Participated and won a hackathon orgarnized my MIT,
                        worked with a team to develop a new, innovative web
                        application that received recognition from the judges.
                      </li>
                      <li>
                        Mentored and trained junior developers, helping them
                        increase their skills and achieve promotions within the
                        company.
                      </li>
                      <li>
                        Completed an intensive coding boot camp program, where I
                        developed advanced skills in React.js and other web
                        development technologies, culminating in a final project
                        that received an "A" grade from an instructor.
                      </li>
                      <li>Contributed to open-source projects.</li>
                    </ul>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

export default Project;
