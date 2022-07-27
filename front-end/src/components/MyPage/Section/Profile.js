import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';
import Profile from 'assests/Profile.png';

const ProfileLeft = props => {
  return (
    <>
      <Box>
        <Title>PROFILE</Title>
        <Img>
          <div>
            <img src={Profile} className="imgFile" />
          </div>
        </Img>
        <div className="name"> 쿼억카</div>
        <div className="right">
          <Link to={props.go}>{props.name}</Link>
        </div>
        <div className="follow">Follower0Following0</div>
        <div className="inform">안녕하세요 쿼카에오 만나서 반가워오</div>
      </Box>
    </>
  );
};

export default ProfileLeft;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 10px;
  .name {
    font-weight: 800;
    font-size: 20px;
    margin-bottom: 10px;
  }
  .right {
    box-shadow: 0 0 0.1px 0 rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    background-color: #c5ad81;
    color: #fff;
    padding: 9px;
    font-size: 12px;
    float: left;
    font-weight: 900;
    margin-bottom: 10px;
  }
  .follow {
    font-size: 14px;
    margin-bottom: 10px;
    font-weight: 700;
  }
  .inform {
    font-size: 12px;
    margin-bottom: 10px;
    font-weight: 600;
  }
`;

const Img = styled.div`
  .imgFile {
    width: 100px;
  }
  margin-top: 15px;
  justify-content: center;
`;

const Title = styled.h1`
  font-family: SCDream-thick;
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 1.2px;
`;
