import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { auth } from 'modules/actions/user';
import { useDispatch } from 'react-redux';
import { HeadbarData } from './HeadbarData';
import { IconContext } from 'react-icons';
import 'styles/header/header.css';
import Profile from 'assests/Profile.png';

const Header = props => {
  const dispatch = useDispatch();
  const [sign, setSign] = useState(true);
  const onClick = () => {
    setSign(prev => !prev);
  };
  const [userName, setUserName] = useState('');
  const user = useSelector(state => state.user);

  const onClickLogout = () => {
    axios.get('/api/user/logout').then(response => {
      if (response.data.success) {
        localStorage.removeItem('key');
        localStorage.clear();
        props.history.push('/');
      } else {
        alert('로그아웃 실패');
      }
    });
  };

  const getName = () => {
    dispatch(auth()).then(response => {
      if (response.payload.userData != null) {
        setUserName(response.payload.userData.name);
      }
    });
  };

  useEffect(() => {
    getName();
    console.log('어디에 쓰이는 곳일까');
    console.log('모르겠군');
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: '#000', size: '25px' }}>
        <div className="HeaderBox">
          <div className="navbar">
            <div className="login-register">
              {user.userData && !user.userData.isAuth ? (
                <nav className="userView">
                  <Link
                    to="/login"
                    onClick={onClick}
                    className="loginbar"
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    로그인
                  </Link>

                  <Link
                    to="/register"
                    onClick={onClick}
                    className="registbar"
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    회원가입
                  </Link>
                </nav>
              ) : (
                <>
                  <nav className="userView">
                    <button onClick={onClickLogout} className="logoutbar">
                      로그아웃
                    </button>
                    <Link
                      to="/mypage"
                      className="profileBox"
                      style={{ textDecoration: 'none', color: 'black' }}
                    >
                      <img src={Profile} className="profile" />
                      <input
                        type="text"
                        className="userName"
                        value={userName + ' ' + '님!'}
                        readOnly
                      />
                    </Link>
                  </nav>
                </>
              )}
            </div>
            <div className="logo-menu">
              <p className="QuotkaNav">
                <Link
                  to="/"
                  className="Quotka"
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  QUOTKA
                </Link>
                {HeadbarData.map((item, index) => {
                  return (
                    <li key={index} className={item.Name}>
                      <Link to={item.path}>
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default withRouter(Header);
