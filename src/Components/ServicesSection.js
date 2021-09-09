import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import ServiceCard from "../Components/ServiceCard";
import design from "../img/design.svg";
import intelligence from "../img/intelligence.svg";
import gamedev from "../img/game-dev.svg";

function ServicesSection() {
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title={"Experiences"} span={"Experiences"} />
        <div className="services">
          <ServiceCard
            image={design}
            title={"Web Development"}
            paragraph={
              "I am a professional web developer with more than 6 months of experiences"
            }
          />
          <div className="mid-card">
            <ServiceCard
              image={gamedev}
              title={"Programming"}
              paragraph={
                "I have experience in Object Oriented Programming and Structured Programming languages such as C, C++, Java, Python."
              }
            />
          </div>
          <ServiceCard
            image={intelligence}
            title={"Machine Learning"}
            paragraph={
              "I have good experience in Machine Learning as well as in Deep Learning and Image Processing"
            }
          />
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
}

const ServicesSectionStyled = styled.section`
  .services {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
    @media screen and (max-width: 950px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default ServicesSection;
