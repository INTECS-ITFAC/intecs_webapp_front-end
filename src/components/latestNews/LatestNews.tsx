import React, { useState } from "react";
// @ts-ignore
// import PropTypes from 'prop-types'
import "./LatestNews.scss";
import Ticker from "react-ticker";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBView,
} from "mdbreact";

const News = () => (
  <div className={"latest-news-container"}>
    <div className="jumbotron-fluid" id={"breaking"}>
      Latest News:
    </div>
    <div id={"newsTicker"}>
      <Ticker mode="smooth" speed={15}>
        {({ index }) => (
          <div>
            <h2 className="jumbotron-fluid">
              This is the Headline of element {index}!<br />
            </h2>
          </div>
        )}
      </Ticker>
    </div>
  </div>
);

function LatestNews() {
  const [buttonClassID, setButtonClassID] = useState(1);

  const onChangeCompetitionsButton = () => {
    setButtonClassID(1);
  };

  const onChangeOthersButton = () => {
    setButtonClassID(0);
  };

  return (
    <div>
      <div>
        <News />
      </div>
      <div className="latest-news-container">
        <h2 className="header-of-latest-programs-container">LATEST PROGRAMS</h2>
        <div className="buttons-container">
          <button
            className={
              buttonClassID === 0
                ? "competions-and-others-buttons"
                : "competions-and-others-buttons-active"
            }
            onClick={() => onChangeCompetitionsButton()}
          >
            Competitions
          </button>
          <button
            className={
              buttonClassID === 1
                ? "competions-and-others-buttons"
                : "competions-and-others-buttons-active"
            }
            onClick={() => onChangeOthersButton()}
          >
            Others
          </button>
        </div>
        <br />
        <br />
        <div style={{ marginLeft: "200px" }}>
          {buttonClassID === 1 && (
            <MDBRow>
              <MDBCol
                md="4"
                style={{ maxWidth: "30rem", border: "2px solid #fff" }}
              >
                <MDBCard wide cascade>
                  <MDBView cascade>
                    <MDBCardImage
                      hover
                      overlay="white-slight"
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                      alt="Card cap"
                    />
                  </MDBView>

                  <MDBCardBody cascade className="text-center">
                    <MDBCardTitle className="card-title">
                      <strong>BI</strong>
                    </MDBCardTitle>

                    <p
                      style={{ color: "blue" }}
                      className="font-weight-bold blue-text"
                    >
                      Business Intelligence
                    </p>

                    <MDBCardText>
                      Sed ut perspiciatis unde omnis iste natus sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam.{" "}
                    </MDBCardText>

                    <MDBCol md="12" className="d-flex justify-content-center">
                      <MDBBtn color="primary">Read more</MDBBtn>
                    </MDBCol>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol
                md="4"
                style={{ maxWidth: "30rem", border: "2px solid #fff" }}
              >
                <MDBCard wide cascade>
                  <MDBView cascade>
                    <MDBCardImage
                      hover
                      overlay="white-slight"
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg"
                      alt="Card cap"
                    />
                  </MDBView>

                  <MDBCardBody cascade className="text-center">
                    <MDBCardTitle className="card-title">
                      <strong>Marketing Web</strong>
                    </MDBCardTitle>

                    <p
                      style={{ color: "blue" }}
                      className="font-weight-bold blue-text"
                    >
                      SEO
                    </p>

                    <MDBCardText>
                      Sed ut perspiciatis unde omnis iste natus sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam.{" "}
                    </MDBCardText>

                    <MDBCol md="12" className="d-flex justify-content-center">
                      <MDBBtn color="primary">Read more</MDBBtn>
                    </MDBCol>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol
                md="4"
                style={{ maxWidth: "30rem", border: "2px solid #fff" }}
              >
                <MDBCard wide cascade>
                  <MDBView cascade>
                    <MDBCardImage
                      hover
                      overlay="white-slight"
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2821%29.jpg"
                      alt="Card cap"
                    />
                  </MDBView>

                  <MDBCardBody cascade className="text-center">
                    <MDBCardTitle className="card-title">
                      <strong>ERP Systems</strong>
                    </MDBCardTitle>

                    <p
                      style={{ color: "blue" }}
                      className="font-weight-bold blue-text"
                    >
                      Enterprise Resource Planning
                    </p>

                    <MDBCardText>
                      Sed ut perspiciatis unde omnis iste natus sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam.{" "}
                    </MDBCardText>

                    <MDBCol md="12" className="d-flex justify-content-center">
                      <MDBBtn color="primary">Read more</MDBBtn>
                    </MDBCol>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          )}

          {buttonClassID === 0 && <div>Allocated space for others tab</div>}
        </div>
      </div>
    </div>
  );
}

export default LatestNews;
