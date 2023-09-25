import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <a href={link}> <img src={imgUrl} alt="imgproject"/> </a>
        <div className="proj-txtx">
        <a href={link}>
          <h4>{title}</h4>
          <span>{description}</span>
          </a>
        </div>
      </div>
    </Col>
  )
}
