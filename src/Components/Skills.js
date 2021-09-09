import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import ProgressBar from "./ProgressBar";

function Skills() {
  return (
    <SkillsStyled>
      <Title title={"My Skills"} span={"my skills"} />
      <InnerLayout>
        <h2 className="skill-title">Frontend</h2>
        <div className="skills">
          <ProgressBar title={"HTML5"} width={"80%"} text={"80%"} />
          <ProgressBar title={"CSS3"} width={"75%"} text={"75%"} />
          <ProgressBar title={"SASS"} width={"90%"} text={"90%"} />
          <ProgressBar title={"Bootstrap"} width={"80%"} text={"80%"} />
          <ProgressBar title={"Material-UI"} width={"50%"} text={"50%"} />
          <ProgressBar title={"JAVASCRIPT"} width={"85%"} text={"85%"} />
          <ProgressBar title={"React.js"} width={"75%"} text={"75%"} />
          <ProgressBar title={"Next.js"} width={"40%"} text={"40%"} />
        </div>
      </InnerLayout>
      <InnerLayout>
        <h2 className="skill-title">Backend</h2>
        <div className="skills">
          <ProgressBar title={"Node.js"} width={"70%"} text={"70%"} />
          <ProgressBar title={"Express.js"} width={"65%"} text={"65%"} />
          <ProgressBar title={"PHP"} width={"50%"} text={"50%"} />
        </div>
      </InnerLayout>
      <InnerLayout>
        <h2 className="skill-title">Database</h2>
        <div className="skills">
          <ProgressBar title={"MongoDb"} width={"70%"} text={"70%"} />
          <ProgressBar title={"MySQL"} width={"65%"} text={"65%"} />
        </div>
      </InnerLayout>
      <InnerLayout>
        <h2 className="skill-title">Programming Languages</h2>
        <div className="skills">
          <ProgressBar title={"C"} width={"80%"} text={"80%"} />
          <ProgressBar title={"C++"} width={"65%"} text={"65%"} />
          <ProgressBar title={"Java"} width={"70%"} text={"70%"} />
          <ProgressBar title={"Python"} width={"65%"} text={"65%"} />
        </div>
      </InnerLayout>
      <div className="others">
        <h2 className="skill-title">Others </h2>
        <div className="others-section">
          <div className="title">
            <p>Familiar with</p>
            <p>Tools</p>
            <p>Microsoft Office Tools</p>
          </div>
          <div className="info">
            <p>
              : Next.js, Redux, Firebase, AWS, GraphQl, Postman Api, Machine
              Learning
            </p>
            <p>: Git, VsCode, Chrome Dev tool</p>
            <p>: MS Word, PowerPoint</p>
          </div>
        </div>
      </div>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section`
  .skill-title {
    font-size: 50px;
    padding-bottom: 30px;
  }
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .others-section {
    display: flex;
    padding-bottom: 1.4rem;
    .title {
      padding-right: 3rem;
      p {
        font-weight: 600;
      }
    }
    .title,
    .info {
      p {
        padding: 0.3rem 0;
      }
    }
  }
`;

export default Skills;
