import React from "react";
import styled from "styled-components";
import resume from "../img/avatar.jpg";
import PrimaryButton from "./PrimaryButton";

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="" />
      </div>
      <div className="right-content">
        <h4>
          I am <span>Md. Sirazul Islam</span>
        </h4>
        <p className="paragraph">
          A fresh university graduate and a professional web developer.. I have
          completed my BSc. in Computer Science and Engineering from University
          of Asia Pacific, with a CGPA of 3.79. Now I am looking for a full time
          job in the sector of Web/Software development.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality </p>
            <p>Languages </p>
            <p>Address</p>
            <p>Service</p>
          </div>
          <div className="info">
            <p>: Md. Sirazul Islam</p>
            <p>: 25</p>
            <p>: Bangladeshi </p>
            <p>: Bangla, English, Hindi </p>
            <p>: Dhaka, Bangladesh</p>
            <p>: Fresh Graduate</p>
          </div>
        </div>
        <a
          href="../data/cv.pdf"
          download
          rel="noopener noreferrer"
          target="_blank"
        >
          {" "}
          <PrimaryButton title={"Download Cv"} />
        </a>
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
    img {
      width: 95%;
      object-fit: cover;
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;
export default ImageSection;
