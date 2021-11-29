import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import BannerImg from '../assets/images/bannerImg.png';
import Button from './Button';
import PText from './PText';

const BannerStyles = styled.div`
  .container {
    height: 100vh;
    min-height: 900px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column;
  }
  .banner_heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
      letter-spacing: 0.7rem;
    }
    .banner_name {
      letter-spacing: 0;
      font-size: 7rem;
      font-family: 'Montserrat SemiBold';
      color: white;
    }
  }
  .banner_image {
    max-width: 980px;
    width: 100%;
    height: 680px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .banner_info {
    margin-top: -12rem;
    p {
      color: white;
    }
  }
  @media only screen and (max-width: 800px) {
    .container {
      height: 700px;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      min-height: 750px;
      width: 95%;
    }
    .banner_heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .banner_name {
        font-size: 4.5rem;
      }
    }
    .banner_image {
      color: var(--gray-1);
      height: 400px;
    }
    .banner_info {
      margin-top: 3rem;
    }
    .banner_social {
      left: 0px;
      bottom: 15px;
      width: 20px;
      .banner_social_indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 20px;
        }
      }
      .banner_social_content {
        ul {
          display: flex;
          flex-direction: row;
          gap: 1rem;
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
              transform: none;
            }
          }
        }
      }
    }
  }
`;

export default function MainBanner() {
  const { t } = useTranslation();
  return (
    <BannerStyles>
      <div className="container">
        <h1 className="banner_heading">
          <span>{t('banner_Hello')}</span>
          <span className="banner_name">Oleg Semenov</span>
        </h1>
        <div className="banner_image">
          <img src={BannerImg} alt="" />
        </div>
        <div className="banner_info">
          <PText>{t('banner_Bio')}</PText>
          <Button
            btnLink="https://www.github.com/ilmonyd"
            btnText={t('banner_GitHub')}
            fill
            external
          />
        </div>
      </div>
    </BannerStyles>
  );
}
