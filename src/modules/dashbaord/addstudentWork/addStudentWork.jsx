import React, { useState } from "react";
import "./addStudentWork.scss";
import ListIcon from "@material-ui/icons/List";
import ProjectsListTableComponent from "./ProjectsListsTables/projectsListTable";

const AddStudentWork = () => {
  //dummy data of projects
  const firstYearProjectsList = [
    {
      projectName: "Surveillance Camera using IoT",
      batch: "16",
      technologies: "React, Javascript, Nodejs",
      contactPerson: "Amal",
      contctNo: "0123456789",
    },
    {
      projectName: "Machine Learning (Career Building Course)",
      batch: "15",
      technologies: "React, Javascript, Nodejs",
      contactPerson: "Kamal",
      contctNo: "0123456789",
    },
    {
      projectName: " Fraud Detection using Machine Learning",
      batch: "17",
      technologies: "React, Javascript, Nodejs",
      contactPerson: "Amal",
      contctNo: "0123456789",
    },
  ];

  const secondYearProjectsList = [
    {
      projectName: "Machine Learning using Python",
      batch: "14",
      technologies: "React, Javascript, Nodejs",
      contactPerson: "Amal",
      contctNo: "0123456789",
    },
    {
      projectName: "Movie Recommendation using ML",
      batch: "15",
      technologies: "React, Javascript, Nodejs",
      contactPerson: "Amal",
      contctNo: "0123456789",
    },
    {
      projectName: "Handwritten Digits Recognition using ML",
      batch: "12",
      technologies: "React, Javascript, Nodejs",
      contactPerson: "Amal",
      contctNo: "0123456789",
    },
  ];

  const thirdYearProjectsList = [
    {
      projectName: "Digital Signal Processing using Python",
      batch: "16",
      technologies: "React, Javascript, Nodejs",
      contactPerson: "Amal",
      contctNo: "0123456789",
    },
    {
      projectName: "Computer Vision Based Smart Selfie",
      batch: "15",
      technologies: "React, Javascript, Nodejs",
      contactPerson: "Amal",
      contctNo: "0123456789",
    },
    {
      projectName: "Automatic Human Following Trolley",
      batch: "14",
      technologies: "React, Javascript, Nodejs",
      contactPerson: "Amal",
      contctNo: "0123456789",
    },
  ];

  const finalYearProjectsList = [
    {
      projectName: "IoT using Raspberry Pi",
      batch: "14",
      technologies: "React, Javascript, Nodejs",
      contactPerson: "Amal",
      contctNo: "0123456789",
    },
    {
      projectName: "Surveillance Camera using IoT",
      batch: "15",
      technologies: "React, Javascript, Nodejs",
      contactPerson: "Amal",
      contctNo: "0123456789",
    },
    {
      projectName: "Automatic Human Following Trolley",
      batch: "13",
      technologies: "React, Javascript, Nodejs",
      contactPerson: "Amal",
      contctNo: "0123456789",
    },
  ];

  const allProjectsList = firstYearProjectsList.concat(
    secondYearProjectsList,
    thirdYearProjectsList,
    finalYearProjectsList
  );

  const [showAllProjectTable, setShowAllProjectTable] = useState(true);
  const [showFirstYearProjectTable, setShowFirstYearProjectTable] = useState(
    false
  );
  const [showSecondYearProjectTable, setShowSecondYearProjectTable] = useState(
    false
  );
  const [showThirdYearProjectTable, setShowThirdYearProjectTable] = useState(
    false
  );
  const [showFinalYearProjectTable, setShowFinalYearProjectTable] = useState(
    false
  );

  const showAllProjectTableFunction = () => {
    setShowAllProjectTable(true);
    setShowFirstYearProjectTable(false);
    setShowSecondYearProjectTable(false);
    setShowThirdYearProjectTable(false);
    setShowFinalYearProjectTable(false);
  };

  const showFirstYearProjectTableFunction = () => {
    setShowAllProjectTable(false);
    setShowFirstYearProjectTable(true);
    setShowSecondYearProjectTable(false);
    setShowThirdYearProjectTable(false);
    setShowFinalYearProjectTable(false);
  };

  const showSecondYearProjectTableFunction = () => {
    setShowAllProjectTable(false);
    setShowFirstYearProjectTable(false);
    setShowSecondYearProjectTable(true);
    setShowThirdYearProjectTable(false);
    setShowFinalYearProjectTable(false);
  };

  const showThirdYearProjectTableFunction = () => {
    setShowAllProjectTable(false);
    setShowFirstYearProjectTable(false);
    setShowSecondYearProjectTable(false);
    setShowThirdYearProjectTable(true);
    setShowFinalYearProjectTable(false);
  };

  const showFinalYearProjectTableFunction = () => {
    setShowAllProjectTable(false);
    setShowFirstYearProjectTable(false);
    setShowSecondYearProjectTable(false);
    setShowThirdYearProjectTable(false);
    setShowFinalYearProjectTable(true);
  };

  return (
    <div className="addStudentWorkContainer">
      <div className="blocksContainer">
        <div className="blocks" onClick={() => showAllProjectTableFunction()}>
          <div className="projectCategoryIcon">
            <ListIcon className="listIcon" />
          </div>
          <div className="projectCategoryNameAndCount">
            <div className="projectCategoryName">All Projects</div>
            <div className="projectCategoryProjectCount">
              {allProjectsList.length}
            </div>
          </div>
        </div>
        <div
          className="blocks"
          onClick={() => showFirstYearProjectTableFunction()}
        >
          <div className="projectCategoryIcon">
            <ListIcon className="listIcon" />
          </div>
          <div className="projectCategoryNameAndCount">
            <div className="projectCategoryName">First Year Projects</div>
            <div className="projectCategoryProjectCount">
              {firstYearProjectsList.length}
            </div>
          </div>
        </div>
        <div
          className="blocks"
          onClick={() => showSecondYearProjectTableFunction()}
        >
          <div className="projectCategoryIcon">
            <ListIcon className="listIcon" />
          </div>
          <div className="projectCategoryNameAndCount">
            <div className="projectCategoryName">Second Year Projects</div>
            <div className="projectCategoryProjectCount">
              {secondYearProjectsList.length}
            </div>
          </div>
        </div>
        <div
          className="blocks"
          onClick={() => showThirdYearProjectTableFunction()}
        >
          <div className="projectCategoryIcon">
            <ListIcon className="listIcon" />
          </div>
          <div className="projectCategoryNameAndCount">
            <div className="projectCategoryName">Third Year Projects</div>
            <div className="projectCategoryProjectCount">
              {thirdYearProjectsList.length}
            </div>
          </div>
        </div>
        <div
          className="blocks"
          onClick={() => showFinalYearProjectTableFunction()}
        >
          <div className="projectCategoryIcon">
            <ListIcon className="listIcon" />
          </div>
          <div className="projectCategoryNameAndCount">
            <div className="projectCategoryName">Final Year Projects</div>
            <div className="projectCategoryProjectCount">
              {finalYearProjectsList.length}
            </div>
          </div>
        </div>
      </div>
      <div>
        {showAllProjectTable && (
          <ProjectsListTableComponent projectList={allProjectsList} />
        )}
        {showFirstYearProjectTable && (
          <ProjectsListTableComponent projectList={firstYearProjectsList} />
        )}
        {showSecondYearProjectTable && (
          <ProjectsListTableComponent projectList={secondYearProjectsList} />
        )}
        {showThirdYearProjectTable && (
          <ProjectsListTableComponent projectList={thirdYearProjectsList} />
        )}
        {showFinalYearProjectTable && (
          <ProjectsListTableComponent projectList={finalYearProjectsList} />
        )}
      </div>
    </div>
  );
};

export default AddStudentWork;
