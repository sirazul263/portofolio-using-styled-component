import React from "react";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Particle from "../Components/Particle";

function HomePage() {
  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hi, I'm <span>Md. Sirazul Islam</span>
        </h1>
        <p>
          A fresh university graduate and web developer. I have completed my
          BSc. in Computer Science and Engineering from University of Asia
          Pacific, with a CGPA of 3.79. Now I am looking for a full time job in
          the sector of Web/Software development.
        </p>
        <div className="icons">
          <a
            href="https://www.facebook.com/sirazul.islam.5243/"
            target="_blank"
            className="icon i-facebook"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/sirazul263/"
            target="_blank"
            className="icon i-linkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/sirazul263"
            target="_blank"
            className="icon i-github"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.instagram.com/sirazul.islam.263/"
            target="_blank"
            className="icon i-instagram"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }

      .i-linkedIn {
        &:hover {
          border: 2px solid #0077b5;
          color: #0077b5;
        }
      }
      .i-instagram {
        &:hover {
          border: 2px solid red;
          color: red;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }
`;

export default HomePage;
