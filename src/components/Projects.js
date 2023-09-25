import { Container, Row, Col, Tab, } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Thibandit Sculpture",
      description: "Design & Développement",
      imgUrl: projImg1,
      link:"https://thibandit-sculpture.netlify.app/",
    },
    {
      title: "NexBank",
      description: "Démo React + Vite",
      imgUrl: projImg2,
      link:"https://nexbank-project.netlify.app/",
    },
    {
      title: "Kasa",
      description: "React - Figma",
      imgUrl: projImg3,
      link:"https://github.com/Vlad-auvray/Projet-Kasa-React-App",
    },
    {
      title: "Les Gigs",
      description: "Démo PHP - Laravel",
      imgUrl: projImg4,
      link:"https://github.com/Vlad-auvray/LesGigs",
    },
    {
      title: "Hot Takes",
      description: "Gestion des opérations CRUD",
      imgUrl: projImg5,
      link:"https://github.com/Vlad-auvray/P6_Piiqante",
    },
    {
      title: "Kanap",
      description: "Gestion des événements JS - validation de données",
      imgUrl: projImg6,
      link:"https://github.com/Vlad-auvray/P5-Dev-Web-Kanap",
    },
    {
      title: "OhMyFood",
      description: "Dynamisation d'une page Web - Sass",
      imgUrl: projImg7,
      link:"https://vlad-auvray.github.io/OMF/",
    },
    {
      title: "La Panthère",
      description: "Optimisation d'une page web - SEO et accessibilité",
      imgUrl: projImg8,
      link:"https://vlad-auvray.github.io/P4/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projets</h2>
                <p>Retrouvez ci-dessous tous les projets de développement réalisés par mes soins.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project} 
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="fond"></img>
    </section>
  )
}
