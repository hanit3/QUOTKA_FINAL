import React, { useState } from 'react';
import MyBoardList from './MyBoardList';
import MyComment from './MyComment';
import Favorite from './MyFavorite';
import { MenuList } from 'styles/mypage/styles';

export default function Orgchart() {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabClickHandler = index => {
    setActiveIndex(index);
  };

  const tabContArr = [
    {
      tabTitle: (
        <li
          className={activeIndex === 0 ? 'submenu focused' : 'submenu'}
          onClick={() => tabClickHandler(0)}
        >
          저장한 게시글
        </li>
      ),
      tabCont: (
        <div>
          <Favorite />
        </div>
      ),
    },
    {
      tabTitle: (
        <li
          className={activeIndex === 1 ? 'submenu focused' : 'submenu'}
          onClick={() => tabClickHandler(1)}
        >
          내가 쓴 게시글
        </li>
      ),
      tabCont: (
        <div>
          <MyBoardList />
        </div>
      ),
    },
    {
      tabTitle: (
        <li
          className={activeIndex === 2 ? 'submenu focused' : 'submenu'}
          onClick={() => tabClickHandler(2)}
        >
          내가 쓴 댓글
        </li>
      ),
      tabCont: (
        <div>
          <MyComment />
        </div>
      ),
    },
  ];

  return (
    <div>
      <hr className="line"></hr>
      <MenuList>
        <ul className="menu-box">
          <div className="element">
            <li className="menu-list">
              {tabContArr.map((section, index) => {
                return section.tabTitle;
              })}
            </li>
          </div>
        </ul>
      </MenuList>

      <div>{tabContArr[activeIndex].tabCont}</div>
    </div>
  );
}
