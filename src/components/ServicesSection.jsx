import React from 'react';
import styled from 'styled-components';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesSectionStyle = styled.div`
  padding: 5rem 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  .services_allItems {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services_allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  const { t } = useTranslation();
  return (
    <ServicesSectionStyle>
      <div className="container">
        <div className="servicesSection_container">
          <SectionTitle head={t('services_Head')} sub={t('services_Sub')} />
          <div className="services_allItems">
            <ServicesSectionItem
              icon={<MdDesktopMac />}
              title="Web Design"
              desc={t('services_WebDesign_desc')}
            />
            <ServicesSectionItem
              icon={<MdCode />}
              title="Web Dev"
              desc={t('services_WebDev_desc')}
            />
            <ServicesSectionItem
              icon={<MdPhonelinkSetup />}
              title="Responsive Web Apps"
              desc={t('services_Responsive_desc')}
            />
          </div>
        </div>
      </div>
    </ServicesSectionStyle>
  );
}
