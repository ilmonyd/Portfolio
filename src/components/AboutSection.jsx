import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
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
  @media only screen and (max-width: 768px) {
    padding-top: 5rem;
    padding-bottom: 3rem;
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection_left,
    .aboutSection_right {
      width: 100%;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 1rem;
    }
    .aboutSection_buttons {
      width: 100%;
      justify-content: center;
    }
  }
  @media only screen and (max-width: 420px) {
    .aboutSection_buttons {
      flex-direction: column;
      gap: 0rem;
    }
  }
`;

export default function AboutSection() {
  const { t } = useTranslation();
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="aboutSection_left">
          <SectionTitle
            className="section-title"
            sub={t('about_Intro')}
            head={t('about_About')}
          />
          <PText style={{ 'text-align': 'right' }}>{t('banner_Bio')}</PText>
          <div className="aboutSection_buttons">
            <Button fill btnLink="/projects" btnText={t('about_Works')} />
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
