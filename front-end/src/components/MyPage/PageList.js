import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Profile from 'assests/Profile.png';
import Tab from './Section/TabMenu';
import {
  MyPageBox,
  MyPageTitle,
  MyPageList,
  MyPagefollow,
  MyInform,
  MyChange,
} from 'styles/mypage/styles';

function PageList() {
  return (
    <>
      <MyPageBox>
        <MyPageTitle>MY PAGE</MyPageTitle>
        <img src={Profile} className="profile" />

        <div className="id">쿼억하</div>
        <MyChange>
          <ul>
            <li>
              <Link to="/mypage/email">개인정보 수정</Link>
            </li>
            <li>
              <Link to="/mypage/password">프로필 수정</Link>
            </li>
          </ul>
        </MyChange>
        <MyPagefollow>
          <div>Follower</div>0<div>Following</div>0
        </MyPagefollow>
        <MyInform>안녕하세요 쿼억하 입니다. 행복하세요 ^^</MyInform>
        <Tab />
      </MyPageBox>
    </>
  );
}

export default withRouter(PageList);
