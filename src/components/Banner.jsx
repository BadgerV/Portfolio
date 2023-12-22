import { ArrowRightCircle } from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "React JS Developer",
    "Node JS Developer",
    "Technical Lead",
    "Web Developer",
    "Software Engineer",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleClick = (e, link) => {
    e.preventDefault();

    window.open(link, "_blank");
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline"> Welcome to my Portfolio</span>
            <h1>
              {`Hi, I'm Pelumi `} <br />
              <span className="wrap">{text}</span>
            </h1>
            <p>
              As a seasoned Full Stack Developer with a year of expertise in
              Node.js and React.js, I specialize in creating visually striking
              and responsive user interfaces. I collaborate seamlessly with
              back-end developers and designers to transform user requirements
              into aesthetically pleasing and functionally impeccable UI
              designs. My commitment to staying abreast of the latest front-end
              trends ensures every project benefits from cutting-edge
              innovation, delivering a superior user experience. In the dynamic
              landscape of web development, I lead the charge, crafting digital
              experiences that transcend expectations
            </p>
            <button>
              <a href="#connect">Let's Connect</a>
              <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
