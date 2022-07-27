import React, { useRef, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser, checkUser } from 'modules/actions/user';
import { useForm } from 'react-hook-form';
import Logo from 'assests/Logo.png';
import {
  PasswordError,
  PasswordConfirmError,
  NameError,
} from 'library/options/errors';
import {
  FormBox,
  FormTitle,
  FormSmallTitle,
  InputBox,
  PasswordBox,
  PasswordButton,
  RegistButton,
  FilledInput,
  ErrorMessage,
  TextBox,
} from 'styles/form/styles';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

function RegisterPage(props) {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
  });
  const dispatch = useDispatch();
  const password = useRef();
  password.current = watch('password');

  const [ShowPassword, setShowPassword] = useState(false);
  const handleVisibility = () => {
    setShowPassword(!ShowPassword);
  };

  const onSubmit = async data => {
    console.log(data);
    try {
      await dispatch(checkUser(data.email))
        .then(response => {
          if (response.payload.success) {
            dispatch(registerUser(data));
            alert(`${data.name}님 회원가입을 축하드립니다.`);
            props.history.push('/login');
          } else {
            setError('email', {
              type: 'validate',
              message: response.payload.message,
            });
          }
        })
        .catch(error => {
          console.log('response: ', error.response);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <FormBox onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>
          <div className="logo-img">
            <img src={Logo} />
          </div>
          <div>QUOTKA</div>
        </FormTitle>
        <FormSmallTitle>회원가입</FormSmallTitle>
        <InputBox>
          <FilledInput
            id="name"
            name="name"
            type="text"
            placeholder="닉네임"
            {...register('name', {
              required: true,
              minLength: true,
              minLength: 2,
              maxLength: 10,
            })}
          />
          {errors.name && (
            <ErrorMessage>{NameError[errors.name.type]}</ErrorMessage>
          )}
        </InputBox>

        <InputBox>
          <FilledInput
            id="email"
            name="email"
            type="email"
            placeholder="이메일"
            {...register('email', {
              required: '이메일 형식에 맞게 입력해주세요.',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: '이메일 형식이 올바르지 않습니다.',
              },
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
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
              <IconButton
                aria-label="toggle_password"
                onClick={handleVisibility}
              >
                {ShowPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </PasswordButton>
          </PasswordBox>
          {errors.password && (
            <ErrorMessage>{PasswordError[errors.password.type]}</ErrorMessage>
          )}
        </InputBox>
        <InputBox>
          <FilledInput
            id="confirmpassword"
            name="confirmpassword"
            type="password"
            placeholder="비밀번호 확인"
            {...register('passwordConfirm', {
              required: true,
              validate: value => value === password.current,
            })}
          />
          {errors.passwordConfirm && (
            <ErrorMessage>
              {PasswordConfirmError[errors.passwordConfirm.type]}
            </ErrorMessage>
          )}
        </InputBox>
        <RegistButton type="submit" onClick={handleSubmit(onSubmit)}>
          회원가입
        </RegistButton>
        <TextBox>
          <span>이미 QUOTKA 회원이신가요?</span>
          <Link to="/login">
            <span>로그인</span>
          </Link>
        </TextBox>
      </FormBox>
    </>
  );
}

export default withRouter(RegisterPage);
