import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { MdQueryBuilder } from 'react-icons/md';
import SectionTitle from './SectionTitle';

const ProjectStyles = styled.div`
  padding: 10rem;
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  top: 50%;
  transform: translateY(-50%);

  .projectsContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    .iconContainer {
      svg {
        width: 22rem;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .projectsContainer {
      flex-direction: column-reverse;
      .iconContainer {
        svg {
          width: 10rem;
        }
      }
    }
  }
`;

export default function Projects() {
  const { t } = useTranslation();
  return (
    <ProjectStyles>
      <div className="projectsContainer">
        <div className="iconContainer">
          <MdQueryBuilder />
        </div>
        <SectionTitle sub={t('projects_Sub')} head={t('projects_Head')} />
      </div>
    </ProjectStyles>
  );
}
