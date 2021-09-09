import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import SmallTitle from "../Components/SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "../Components/ResumeItem";

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"resume"} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={"Working Experience"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={" Aug 2021 - Present"}
            title={"React Developer"}
            subTitle={"eDakpeon E-Commerce"}
            text={
              "Working as a React developer to build a e-commerce site named edakpeon.com. "
            }
          />
          <ResumeItem
            year={"Sep 2019 - Oct 2019"}
            title={"Internship"}
            subTitle={"PeopleNTech Ltd."}
            text={
              "I have learned basic web development technologies such as HTML, CSS, Bootstrap etc.  "
            }
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={"2016 - 2020"}
            title={"Computer Science & Engineering  "}
            subTitle={"University of Asia Pacific"}
            text={`Bachelor of Science 
                `}
            text2={"CGPA: 3.79"}
          />
          <ResumeItem
            year={"2012 - 2014"}
            title={"Higher Secondary Certificate"}
            subTitle={"Rajbari Govt. College"}
            text={`Department: Science`}
            text2={"GPA: 4.70"}
          />
          <ResumeItem
            year={"2010 - 2012"}
            title={"Secondary School Certificate"}
            subTitle={"Barat Vhakla School and College"}
            text={`Department: Science 
            `}
            text2={"GPA: 5"}
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;
