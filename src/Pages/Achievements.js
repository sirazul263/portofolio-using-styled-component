import React from "react";
import styled from "styled-components";
import Title from "../Components/Title";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import vc from "../img/acheivements/vc.jpg";
import dean1 from "../img/acheivements/dean.jpg";
import dean2 from "../img/acheivements/deann.jpg";
import icpc from "../img/acheivements/icpc.jpg";
import iccit from "../img/acheivements/iccit.jpg";
import research from "../img/acheivements/conference.jpg";
const Achievements = () => {
  const info = [
    {
      id: 1,
      title: "VC Award 2018",
      date: "01",
      month: "April",
      image: vc,
    },
    {
      id: 2,
      title: "Dean's Award 2019",
      date: "01",
      month: "April",
      image: dean1,
    },
    {
      id: 3,
      title: "Dean's Award 2018",
      date: "01",
      month: "April",
      image: dean2,
    },
  ];
  const coInfo = [
    {
      id: 1,
      title: "ACM ICPC-2017",
      date: "01",
      month: "April",
      image: icpc,
    },
    {
      id: 2,
      title: "ICCIT-2019",
      date: "01",
      month: "April",
      image: iccit,
    },
  ];
  return (
    <div>
      <MainLayout>
        <AchievementsStyled>
          <Title title={"Achievements"} span={"Achievements"} />
          <InnerLayout className={"achievements"}>
            {info.map((info) => {
              return (
                <div key={info.id} className={"achievements-item"}>
                  <div className="image">
                    <img src={info.image} alt="" />
                  </div>
                  <div className="title">
                    <a href="">{info.title}</a>
                  </div>
                </div>
              );
            })}
          </InnerLayout>
          <h1>Research Work</h1>
          <h2>
            Published in: KES-HCIS 2021: Human Centred Intelligent Systems
            Conference{" "}
          </h2>
          <InnerLayout className={"achievements"}>
            <div className={"achievements-item"}>
              <div className="image">
                <img src={research} alt="" />
              </div>
              <div className="title">
                <a href="https://link.springer.com/chapter/10.1007/978-981-16-3264-8_5">
                  Identifying Counterfeit Medicine in Bangladesh Using Deep
                  Learning
                </a>
              </div>
            </div>
          </InnerLayout>
        </AchievementsStyled>
      </MainLayout>

      <MainLayout>
        <AchievementsStyled>
          <Title
            title={"Co-Curricular Activities"}
            span={"Co-Curricular Activities"}
          />
          <InnerLayout className={"achievements"}>
            {coInfo.map((info) => {
              return (
                <div key={info.id} className={"achievements-item"}>
                  <div className="image">
                    <img src={info.image} alt="" />
                  </div>
                  <div className="title">
                    <a href="">{info.title}</a>
                  </div>
                </div>
              );
            })}
          </InnerLayout>
        </AchievementsStyled>
      </MainLayout>
    </div>
  );
};
const AchievementsStyled = styled.div`
  .achievements {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
    @media screen and (max-width: 770px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .achievements-item {
      background-color: var(--background-dark-grey);
      padding: 1rem 1rem;
    }
    .image {
      width: 100%;
      overflow: hidden;
      padding-bottom: 0.5rem;
      img {
        width: 100%;
        height: 90%;
        object-fit: cover;
        transition: all 0.4s ease-in-out;
        &:hover {
          cursor: pointer;
          transform: rotate(3deg) scale(1.1);
        }
      }
    }

    .title {
      text-align: center;
      a {
        font-size: 1.8rem;
        padding: 2rem 0;
        color: var(--white-color);
        cursor: pointer;
        transition: all 0.4s ease-in-out;
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
`;

export default Achievements;
