import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import TitleBoxContainer from 'components/BoardPlayground/Section/Board/BoardTitle';
import { Link } from 'react-router-dom';
import BoardListTextBox from './Section/List/BoardListText';
import styled from 'styled-components';
import WriteButton from './Section/List/WriteButton';
import Axios from 'axios';
import CommonTable from 'components/table/CommonTable';
import CommonTableColumn from 'components/table/CommonTableColumn';
import CommonTableRow from 'components/table/CommonTableRow';

/**
 * BoardList class
 */

const BoardTopBlock = styled.ul`
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2px;
  margin-bottom: 0px;
  margin-top: 0px;
`;

function GetData() {
  const [data, setData] = useState({});

  useEffect(() => {
    Axios.post('/playground').then(response => {
      if (response.data) {
        setData(response.data);
      } else {
        alert('failed to');
      }
    });
  }, []);

  const item = Object.values(data).map(item => (
    <CommonTableRow key={item.id}>
      <CommonTableColumn>{item.id}</CommonTableColumn>
      <CommonTableColumn>{item.title}</CommonTableColumn>
      <CommonTableColumn>{item.author}</CommonTableColumn>
      <CommonTableColumn>{item.createAt}</CommonTableColumn>
      <CommonTableColumn>{item.count}</CommonTableColumn>
    </CommonTableRow>
  ));

  return item;
}

function BoardList() {
  const item = GetData();
  return (
    <>
      <TitleBoxContainer></TitleBoxContainer>
      <BoardTopBlock>
        <BoardListTextBox></BoardListTextBox>
        <WriteButton></WriteButton>
      </BoardTopBlock>
      <BoardTable>
        <CommonTable
          headersName={['번호', '제목', '작성자', '등록일', '조회수']}
        >
          {item}
        </CommonTable>
      </BoardTable>
    </>
  );
}

export default BoardList;

const BoardTable = styled.table`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-collapse: separate;
  border-spacing: 0 10px;

  .num {
    width: 5%;
    text-align: center;
  }
  .date {
    width: 7%;
  }
  .title {
    width: 25%;
    text-align: center;
  }
  .content {
    width: 63%;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
    border-top: 1px solid #444444;
    margin-top: 7px;
  }

  td {
    text-aligh: left;
    padding: 10px;
    border-bottom: 1px solid #444444;
    margin-left: 10px;
  }
  th {
    padding: 15px;
    border-bottom: 1px solid #444444;
    margin-left: 10px;
  }

  thead {
    font-family: 'SCDream-bold';
    font-weight: 100;
  }
`;
