import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import Button from './Button';
import SectionTitle from './SectionTitle';

const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .aboutSection_buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="aboutSection_left">
          <SectionTitle
            className="section-title"
            sub="Let me introduce myself"
            head="About Me"
          />
          <PText>
            I am an aspiring frontend developer studying applied computer
            science at Jagiellonian University in Cracow.
          </PText>
          <div className="aboutSection_buttons">
            <Button fill btnLink="/projects" btnText="Works" />
            <Button
              external
              btnLink="https://www.linkedin.com/in/oleg-semenov-776a18210/"
              btnText="LinkedIn"
            />
          </div>
        </div>
        <div className="aboutSection_right" />
      </div>
    </AboutSectionStyles>
  );
}
