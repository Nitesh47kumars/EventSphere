import React from 'react';
import styled from 'styled-components';

const Register = () => {
  return (
    <StyledWrapper>
      <button className="cssbuttons-io-button">
        Login In/Sign up
        <div className="icon">
          <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" />
          </svg>
        </div>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .cssbuttons-io-button {
    background: #a370f0;
    color: white;
    font-family: inherit;
    padding: 0.25em;
    padding-left: 0.9em;
    font-size: 14px;
    font-weight: 500;
    border-radius: 0.6em;
    border: none;
    letter-spacing: 0.03em;
    display: flex;
    align-items: center;
    box-shadow: inset 0 0 1em -0.4em #714da6;
    overflow: hidden;
    position: relative;
    height: 2.2em;
    padding-right: 2.5em;
    cursor: pointer;
  }

  .cssbuttons-io-button .icon {
    background: white;
    margin-left: 0.7em;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.8em;
    width: 1.8em;
    border-radius: 0.5em;
    box-shadow: 0.1em 0.1em 0.4em 0.1em #7b52b9;
    right: 0.25em;
    transition: all 0.3s;
  }

  .cssbuttons-io-button:hover .icon {
    width: calc(100% - 0.5em);
  }

  .cssbuttons-io-button .icon svg {
    width: 0.9em;
    transition: transform 0.3s;
    color: #7b52b9;
  }

  .cssbuttons-io-button:hover .icon svg {
    transform: translateX(0.1em);
  }

  .cssbuttons-io-button:active .icon {
    transform: scale(0.95);
  }
`;

export default Register;
