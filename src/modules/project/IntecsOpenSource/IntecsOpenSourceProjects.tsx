import React from "react";
// import PropTypes from 'prop-types'
import "./IntecsOpenSourceProjects.scss";
import pic1 from "../../../assets/images/IntecsOpenSourceProjects/ProjectPictures/project_1.jpg";
import githubLogo from "../../../assets/images/IntecsOpenSourceProjects/github.png";
import gitterLogo from "../../../assets/images/IntecsOpenSourceProjects/gitter.png";
import OpenSourceProjectsHeader from "../../../components/openSourceProjectsHeader/openSourceProjectsHeader";

const IntecsOpenSourceProjects = () => {
  const project_list = [
    {
      projectHeader: "INTECS WEBFRONT PROJECT1 INTECS WEBFRONT PROJECT1",
      projectDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      projectPic: pic1,
      githubLink: "https://github.com",
      gitterLink: "#",
    },
    {
      projectHeader: "INTECS WEBFRONT PROJECT2",
      projectDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      projectPic: pic1,
      githubLink: "https://github.com",
      gitterLink: "#",
    },
    {
      projectHeader: "INTECS WEBFRONT PROJECT3",
      projectDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      projectPic: pic1,
      githubLink: "https://github.com",
      gitterLink: "#",
    },
    {
      projectHeader: "INTECS WEBFRONT PROJECT 4",
      projectDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      projectPic: pic1,
      githubLink: "https://github.com",
      gitterLink: "#",
    },
    {
      projectHeader: "INTECS WEBFRONT PROJECT 5",
      projectDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      projectPic: pic1,
      githubLink: "https://github.com",
      gitterLink: "#",
    },
  ];

  return (
    <div className="intecs-open-source-projects-container">
      <div className="header-component-space"><OpenSourceProjectsHeader /></div>
      <div className="content-space-of-all-intecs-open-source-projects">
        {project_list.map((project_list, index) => {
          return (
            <>
              {index % 2 === 0 && (
                <div key={index} className="projects">
                  <div className="image-container-of-the-project">
                    <img
                      className="project-picture"
                      src={project_list.projectPic}
                      alt=""
                    />
                  </div>
                  <div className="description-container-of-the-project">
                    <hr className="horizontal-line" />
                    <div className="header-of-the-project">
                      {project_list.projectHeader}
                    </div>
                    <div className="project-description">
                      {project_list.projectDescription}
                    </div>
                    <div>
                      <a href={project_list.githubLink} target="blank">
                        <img
                          src={githubLogo}
                          alt="Avatar"
                          className="avatar"
                        ></img>
                      </a>
                      <a href={project_list.gitterLink} target="blank">
                        <img
                          src={gitterLogo}
                          alt="Avatar"
                          className="gitter-avatar"
                        ></img>
                      </a>
                    </div>
                  </div>
                </div>
              )}
              {index % 2 === 1 && (
                <div key={index} className="projects">
                  <div className="description-container-of-the-project">
                    <hr className="horizontal-line" />
                    <div className="header-of-the-project">
                      {project_list.projectHeader}
                    </div>
                    <div className="project-description">
                      {project_list.projectDescription}
                    </div>
                    <div>
                      <a href={project_list.githubLink} target="blank">
                        <img
                          src={githubLogo}
                          alt="Avatar"
                          className="avatar"
                        ></img>
                      </a>
                      <a href={project_list.gitterLink} target="blank">
                        <img
                          src={gitterLogo}
                          alt="Avatar"
                          className="gitter-avatar"
                        ></img>
                      </a>
                    </div>
                  </div>
                  <div className="image-container-of-the-project">
                    <img
                      className="project-picture"
                      src={project_list.projectPic}
                      alt=""
                    />
                  </div>
                </div>
              )}
            </>
          );
        })}
    </div>
    </div>
  );
};

export default IntecsOpenSourceProjects;
