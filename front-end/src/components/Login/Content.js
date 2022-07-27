import React, { useState, useCallback } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from 'modules/actions/user';
import { EmailError, PasswordError } from 'library/options/errors';
import { useForm } from 'react-hook-form';
import Logo from 'assests/Logo.png';
import Google from 'assests/Google.png';
import 'styles/container/styles';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import StyledCheckBox from 'styles/container/styles';
import googleLogin from 'components/Login/googleLogin';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId =
  '963235660579-40t446lr6tf6hk722t1eorab1l87chru.apps.googleusercontent.com';

import {
  FormBox,
  FormTitle,
  FormSmallTitle,
  InputBox,
  PasswordBox,
  PasswordButton,
  LoginButton,
  FilledInput,
  ErrorMessage,
  GoogleItem,
  TextBox,
} from 'styles/form/styles';

function LoginPage() {
  const [loading, setLoading] = useState('Loading...');
  const [user, setUser] = useState(null);

  const handleLoginSuccess = response => {
    console.log('Login Success ', response);
    setUser(response.profileObj);
    setLoading();
  };

  const handleLoginFailure = error => {
    console.log('Login Failure ', error);
    setLoading();
  };

  const handleLogoutSuccess = response => {
    console.log('Logout Success ', response);
    setUser(null);
  };

  const handleLogoutFailure = error => {
    console.log('Logout Failure ', error);
  };

  const handleRequest = () => {
    setLoading('Loading...');
  };

  const handleAutoLoadFinished = () => {
    setLoading();
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
  });
  const dispatch = useDispatch();
  const [ShowPassword, setShowPassword] = useState(false);
  const [RememberId, setRememberId] = useState(false);

  const handleVisibility = () => {
    setShowPassword(!ShowPassword);
  };
  const handleChange = e => {
    setRememberId(e.target.checked);
  };

  const onSubmit = useCallback(user => {
    dispatch(loginUser(user)).then(response => {
      if (response.payload.success) {
        alert(`${response.payload.name}님 환영합니다.`);
        console.log(response.payload._id);
        // 로컬스토리지 userId 저장
        window.localStorage.setItem('userId', response.payload._id);
        window.localStorage.setItem('userName', response.payload.name);
        window.location.replace('/');
      } else {
        alert(response.payload.message);
      }
    });
  }, []);

  return (
    <FormBox onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>
        <div className="logo-img">
          <img src={Logo} />
        </div>
        <div>QUOTKA</div>
      </FormTitle>
      <FormSmallTitle>로그인</FormSmallTitle>
      <InputBox>
        <FilledInput
          id="email"
          name="email"
          type="text"
          placeholder="이메일"
          {...register('email', {
            required: true,
            validate: {
              checkPattern: value =>
                [/^\S+@\S+$/i].every(pattern => pattern.test(value)),
            },
          })}
        />
        {errors.email && (
          <ErrorMessage>{EmailError[errors.email.type]}</ErrorMessage>
        )}
      </InputBox>
      <InputBox>
        <PasswordBox>
          <FilledInput
            id="password"
            name="password"
            type={ShowPassword ? 'text' : 'password'}
            placeholder="비밀번호"
            {...register('password', {
              required: true,
              minLength: 8,
              maxLength: 20,
              validate: {
                checkLang: value =>
                  ![/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/].every(pattern =>
                    pattern.test(value),
                  ),
                checkLower: value =>
                  [/[a-z]/].every(pattern => pattern.test(value)),
                checkUpper: value =>
                  [/[A-Z]/].every(pattern => pattern.test(value)),
                checkNumber: value =>
                  [/[0-9]/].every(pattern => pattern.test(value)),
                checkSpec: value =>
                  [/[^a-zA-Z0-9]/].every(pattern => pattern.test(value)),
              },
            })}
          />
          <PasswordButton>
            <IconButton aria-label="toggle_password" onClick={handleVisibility}>
              {ShowPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </PasswordButton>
        </PasswordBox>
        {errors.password && (
          <ErrorMessage>{PasswordError[errors.password.type]}</ErrorMessage>
        )}
      </InputBox>
      <LoginButton type="submit" onClick={handleSubmit(onSubmit)}>
        로그인
      </LoginButton>
      <StyledCheckBox
        name="RememberId"
        checked={RememberId}
        onChange={handleChange}
      ></StyledCheckBox>
      <GoogleItem>
        {user ? (
          <div>
            <div className="name">Welcome {user.name}!</div>
            <GoogleLogout
              clientId={clientId}
              onLogoutSuccess={handleLogoutSuccess}
              onFailure={handleLogoutFailure}
            />
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </div>
        ) : (
          <div className="google">
            <GoogleLogin
              clientId={clientId}
              render={renderProps => (
                <button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  className="button"
                >
                  <img src={Google} className="google-img" />
                </button>
              )}
              buttonText="Login"
              isSignedIn={true}
            />
          </div>
        )}
      </GoogleItem>
      <TextBox>
        <span>아직 QUOTKA 회원이 아니신가요?</span>
        <Link to="/register">
          <span>회원가입</span>
        </Link>
      </TextBox>
    </FormBox>
  );
}

export default withRouter(LoginPage);
