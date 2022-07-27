import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  getScrap,
  ischeckScrap,
  subtractionScrap,
  additionScrap,
} from 'modules/actions/scrap';
import styled from 'styled-components';
import ScrapIcon from 'assests/star.png';

function ScrapButton({ boardId, boardTitle, boardContent, boardWriter }) {
  const dispatch = useDispatch();
  const userFrom = localStorage.getItem('userId');
  const [scrapCounts, setScrapCounts] = useState(0);
  const [userScrapped, setUserScrapped] = useState(false);
  let variables = {
    userFrom: userFrom,
    boardFrom: boardId,
    boardWriter: boardWriter,
    boardTitle: boardTitle,
    boardContent: boardContent,
  };

  const getScrapNumber = () => {
    dispatch(getScrap(variables))
      .then(response => {
        if (!response.payload.success) {
          alert('스크랩 정보를 가져오는데 실패했습니다.');
          return;
        }
        setScrapCounts(response.payload.scrapCounts);
      })
      .catch(e => console.log(e));
  };

  const isCheckScrap = () => {
    dispatch(ischeckScrap(variables))
      .then(response => {
        if (!response.payload.success) {
          alert('스크랩 정보를 가져오는데 실패했습니다.');
          return;
        }
        setUserScrapped(response.payload.scrapped);
      })
      .catch(e => console.log(e));
  };

  const subScrap = () => {
    dispatch(subtractionScrap(variables))
      .then(response => {
        if (!response.payload.success) {
          alert('스크랩 삭제를 실패했습니다.');
          return;
        }
        setScrapCounts(scrapCounts - 1);
      })
      .catch(e => console.log(e));
  };

  const addScrap = () => {
    dispatch(additionScrap(variables))
      .then(response => {
        if (!response.payload.success) {
          alert('스크랩 등록을 실패했습니다.');
          return;
        }
        setScrapCounts(scrapCounts + 1);
      })
      .catch(e => console.log(e));
  };

  const handleScrap = e => {
    e.preventDefault();
    userScrapped ? subScrap() : addScrap();
  };

  useEffect(() => {
    getScrapNumber();
    isCheckScrap();
  }, [scrapCounts, userScrapped]);

  return (
    <>
      <button onClick={handleScrap}>
        <Scrap src={ScrapIcon} />
        <Counts>
          <span>{scrapCounts}</span>
        </Counts>
      </button>
    </>
  );
}

export default ScrapButton;

const Scrap = styled.img`
  width: 15px;
  height: 15px;
  margin-right: -23px;
  margin-top: 3px;
`;

const Counts = styled.span`
  font-size: 15px;
  color: gray;
  text-align: left;
  margin-top: 4px;
  margin-right: 10px;
`;
