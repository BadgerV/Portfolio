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
import firtProject from "../assets/img/solpayplus.png";
import secondProject from "../assets/img/realmomentum.png";
import thirdProject from "../assets/img/mithackathon.png";
import fourthProject from "../assets/img/medcon.png";

const Project = () => {
  //lsit of propjects
  const projects = [
    {
      title: "MedCon",
      description:
        "A web app that allows you to Instantly connect with doctors online for secure video consultations.Prioritize your health effortlessly with secure messaging, timely reminders, and reliable healthcare at your fingertips.",
      imgUrl: fourthProject,
      url: "https://medconnig.netlify.app",
      url2: "https://github.com/BadgerV/Virtual-med",
    },
    {
      title: "SolPayPlus",
      description:
        "SolPayPlus allow for payment of several kinds of bills (including airtime, data bundles, Internet, electricity and cable TV) in Nigeria and across multiple African countries.",
      imgUrl: firtProject,
      url: "https://solpayplus.com.ng/",
      url2: "https://github.com/BadgerV/SolPayPlus",
    },
    {
      title: "Real Momentum",
      description: "Built uisng ReactJS and styled-components",
      imgUrl: secondProject,
      url: "https://realmomemtum.netlify.app/",
      url2: "https://github.com/BadgerV/Real-Momentum",
    },
    {
      title: "Etherino UI",
      description: "Designed with React js and styled component",
      imgUrl: thirdProject,
      url: "https://etherino.netlify.app/",
      url2: "https://github.com/BadgerV/MIT-hackathon",
    },
    {
      title: "Dashboard",
      description: "Dasboard built with ReactJS and SCSS ",
      imgUrl: project1,
      url: "https://shiny-starburst-53a0ab.netlify.app/",
      url2: "https://github.com/BadgerV/LendSQR",
    },
    {
      title: "3D Portfolio",
      description: "Designed with ReactJS, ThreeJS and Framer-motion",
      imgUrl: project3,
      url: "https://642e6d2517a6b06d18a4bbb5--exquisite-bublanina-72c45c.netlify.app/",
      url2: "https://github.com/BadgerV/3d-portfolio",
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
                        Full Stack Developer: Over one year of experience in
                        developing end-to-end solutions, with a focus on
                        JavaScript technologies.
                      </li>
                      <li>
                        Frontend Proficiency: Skilled in modern frontend
                        frameworks, including React.js and Vue.js, ensuring
                        intuitive and dynamic user interfaces.
                      </li>
                      <li>
                        Backend Expertise: Proven track record in server-side
                        scripting with Node.js, adept at constructing robust
                        RESTful APIs and integrating with databases such as
                        MongoDB, MySQL, and PostgreSQL.
                      </li>
                      <li>
                        Web Technology Mastery: Strong foundational knowledge in
                        HTML and CSS, complemented by expertise in frontend
                        frameworks like Bootstrap and Tailwind.
                      </li>
                      <li>
                        Version Control and Collaboration: Familiarity with
                        version control systems like Git, showcasing effective
                        collaboration with developers through platforms such as
                        GitHub.
                      </li>
                      <li>
                        Web Development Best Practices: Understanding of key
                        concepts such as responsive design, accessibility, and
                        cross-browser compatibility, ensuring the delivery of
                        high-quality, user-centric applications.
                      </li>
                      <li>
                        AI Adaptability: Recognizing the evolving landscape, I
                        have a keen awareness of industry changes, particularly
                        in the realm of AI. I am committed to staying abreast of
                        emerging trends and technologies, demonstrating a
                        willingness to adapt and integrate AI solutions where
                        applicable.
                      </li>
                      <li>
                        Fast Learner: Demonstrated ability to quickly adapt to
                        new technologies and methodologies, underlining a
                        commitment to continuous learning and professional
                        growth.
                      </li>
                      <li>
                        Eager Contributor: Enthusiastic about making meaningful
                        contributions to development teams and passionate about
                        staying ahead in the ever-evolving field of Full Stack
                        Development.
                      </li>
                    </ul>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <div className="achieve">
                    <h4>Achievements</h4>
                    <ul>
                      <li>
                        Successful Hackathon Victory: Emerged triumphant in a
                        prestigious hackathon hosted by MIT, showcasing
                        collaborative excellence within a team. Developed an
                        innovative web application that garnered recognition
                        from discerning judges for its creativity and technical
                        prowess.
                      </li>
                      <li>
                        Leadership and Mentorship: Demonstrated leadership by
                        mentoring and training junior developers, significantly
                        contributing to their skill advancement and facilitating
                        their promotions within the company. Fostered a
                        collaborative and growth-oriented environment.
                      </li>
                      <li>
                        Coding Boot Camp Distinction: Successfully completed an
                        intensive coding boot camp program, honing advanced
                        skills in React.js and various cutting-edge web
                        development technologies. Achieved an outstanding "A"
                        grade for the final project, reflecting a commitment to
                        excellence and mastery in the field.
                      </li>
                      <li>
                        Dedication to Open Source: Actively contributed to
                        open-source projects, exemplifying a commitment to the
                        broader developer community. Collaborated with diverse
                        teams to enhance and innovate in the open-source
                        landscape.
                      </li>
                      <li>
                        Continuous Learning: Engaged in ongoing professional
                        development to stay abreast of industry trends and
                        emerging technologies, reflecting a commitment to
                        continuous learning and adaptability.
                      </li>
                      <li>
                        Problem Solving: Demonstrated proficiency in solving
                        complex challenges with a strategic and analytical
                        mindset, contributing to the success of various projects
                        and initiatives.
                      </li>
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
