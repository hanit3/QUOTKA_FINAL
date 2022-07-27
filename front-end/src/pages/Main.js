import React from 'react';
import styled from 'styled-components';
import Logo from 'assests/Logo.png';
import Banner from 'assests/Banner.svg';
import TrendingBox from '../components/Main/TrendingBox';
import HOF from '../components/Main/HOF';

const Main = () => {
  return (
    <>
      <MainBox>
        <img src={Banner} alt="banner" />
      </MainBox>

      <MainTitle>
        <Img src={Logo} />
        Trending on QUOTKA
      </MainTitle>
      <TrendingContent>
        <TrendingBox num={'01'} />
        <TrendingBox num={'02'} />
        <TrendingBox num={'03'} />
      </TrendingContent>
      <TrendingContent>
        <TrendingBox num={'04'} />
        <TrendingBox num={'05'} />
        <TrendingBox num={'06'} />
      </TrendingContent>
      <hr></hr>
      <MainTitle>
        <Img src={Logo} />
        This Week Quote Master
      </MainTitle>
      <TrendingContent>
        <HOF></HOF>
        <HOF></HOF>
        <HOF></HOF>
        <HOF></HOF>
      </TrendingContent>
    </>
  );
};

export default Main;

const MainTitle = styled.h2`
  margin: 0 auto;
  padding-top: 15px;
  font-size: 23px;
  font-weight: 900;
  padding-bottom: 25px;
`;

const Img = styled.img`
  width: 27px;
  height: 27px;
  margin-right: 5px;
  padding-top: 5px;
`;
const MainBox = styled.div`
  margin-left: -200px;
  margin-top: -100px;
  width: 1100px;
`;

const TrendingContent = styled.div`
  display: float;
`;
