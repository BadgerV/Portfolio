import { Col } from "react-bootstrap";
import git from "../assets/img/github-mark-white.png";

export const ProjectCard = ({ title, description, imgUrl, url, url2 }) => {
  const handleClick = (e, link) => {
    e.preventDefault();
    window.open(link, "_blank");
  };
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <a href={url} target="_blank">
          <img src={imgUrl} alt="" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <img
              src={git}
              className="git-image"
              onClick={(e) => handleClick(e, url2)}
            />
          </div>
        </a>
      </div>
    </Col>
  );
};
