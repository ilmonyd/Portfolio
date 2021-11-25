import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BtnStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    padding: 0.7em 2em;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid var(--gray-1);
  }
  .fill {
    background-color: var(--gray-1);
    color: var(--deep-dark);
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export default function Button({ btnLink, btnText, fill, external }) {
  return (
    <BtnStyle>
      {!external ? (
        <Link className={fill ? 'button fill' : 'button'} to={btnLink}>
          {btnText}
        </Link>
      ) : (
        <a
          className={fill ? 'button fill' : 'button'}
          href={btnLink}
          target="_blank"
          rel="noreferrer"
        >
          {btnText}
        </a>
      )}
    </BtnStyle>
  );
}
