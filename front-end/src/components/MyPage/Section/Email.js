import React, { useState, useCallback, useEffect, useRef } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { updatePassword } from 'modules/actions/user';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { withdrawalUser } from 'modules/actions/user';
import { getEmail, updateEmail } from 'modules/actions/user';
import { PasswordError, PasswordConfirmError } from 'library/options/errors';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Profile from './Profile';
import {
  FormBox,
  ProfileBox,
  ContentBox,
  FormTitle,
  ErrorMessage,
  InputBox,
  FilledInput,
  PasswordBox,
  PasswordButton,
  RegistButton,
  Title,
} from 'styles/form/change-styles';

function Email({ history }) {
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors },
  } = useForm({
    mode: 'onTouched',
  });
  const dispatch = useDispatch();
  const userFrom = localStorage.getItem('userId');
  const [ShowPassword, setShowPassword] = useState(false);
  const [ShowPassword2, setShowPassword2] = useState(false);
  const password = useRef();
  password.current = watch('password');

  const newPassword = useRef();
  newPassword.current = watch('newPassword');
  const [oldEmail, getOldEmail] = useState('');
  const handleVisibility = () => {
    setShowPassword(!ShowPassword);
  };

  const handleVisibility2 = () => {
    setShowPassword2(!ShowPassword2);
  };

  useEffect(() => {
    dispatch(getEmail(userFrom)).then(response => {
      getOldEmail(response.payload.email);
    });
  }, []);

  const onSubmit = useCallback(user => {
    user._id = localStorage.getItem('userId');
    dispatch(updatePassword(user)).then(response => {
      if (!response.payload.changeSuccess) {
        alert(response.payload.message);
      } else {
        if (response.payload.changeSuccess) {
          alert('비밀번호가 변경되었습니다.');
          history.push('/mypage');
        } else {
          alert('비밀번호 변경에 실패했습니다.');
        }
      }
    });

    user._id = localStorage.getItem('userId');
    let confirmWithdrawal = window.confirm(
      '탈퇴하시겠습니까?                                                                              ※ 개인정보, 모든 게시물 등의 데이터가 삭제되며, 복구할 수 없습니다. ※',
    );
    confirmWithdrawal &&
      dispatch(withdrawalUser(user)).then(response => {
        if (!response.payload.changeSuccess) {
          alert(response.payload.message);
        } else {
          if (response.payload.changeSuccess) {
            alert('회원탈퇴가 완료되었습니다.');
            history.push('/');
          } else {
            alert('회원탈퇴에 실패했습니다.');
          }
        }
      });
    user._id = userFrom;
    dispatch(updateEmail(user)).then(response => {
      if (!response.payload.changeSuccess) {
        alert(response.payload.message);
      } else {
        if (response.payload.changeSuccess) {
          alert('이메일이 변경되었습니다.');
          history.push('/mypage');
        } else {
          alert(response.payload.message);
        }
      }
    });
  }, []);

  return (
    <FormBox onSubmit={handleSubmit(onSubmit)}>
      <ProfileBox className="left">
        <Profile name={'프로필 수정'} go={'/mypage/password'} />
      </ProfileBox>
      <ContentBox className="right">
        <Title>이메일 변경</Title>

        <InputBox>
          <label htmlFor="oldEmail">현재 이메일</label>
          <FilledInput
            id="oldEmail"
            name="oldEmail"
            value={oldEmail}
            readOnly
          />
        </InputBox>
        <InputBox>
          <label htmlFor="email">변경할 이메일</label>
          <FilledInput
            id="email"
            name="email"
            type="email"
            placeholder="변경할 이메일을 입력하세요"
            {...register('email', {
              required: '이메일을 입력하세요',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: '이메일 형식이 올바르지 않습니다',
              },
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </InputBox>
        <InputBox>
          <label htmlFor="password">비밀번호 </label>
          <PasswordBox>
            <FilledInput
              id="password"
              name="password"
              type={ShowPassword ? 'text' : 'password'}
              placeholder="비밀번호를 입력하세요"
              {...register('password', {
                required: true,
                minLength: 8,
                maxLenght: 20,
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
          <li>
            <RegistButton type="submit" onClick={handleSubmit(onSubmit)}>
              이메일 변경
            </RegistButton>
          </li>
        </InputBox>

        <Title>비밀번호 변경</Title>
        <InputBox>
          <label htmlFor="currentPassword">현재 비밀번호</label>
          <PasswordBox>
            <FilledInput
              id="currentPassword"
              name="currentPassword"
              type={ShowPassword2 ? 'text' : 'password'}
              placeholder="현재 비밀번호를 입력하세요"
              {...register('currentPassword', {
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
                onClick={handleVisibility2}
              >
                {ShowPassword2 ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </PasswordButton>
          </PasswordBox>
          {errors.currentPassword && (
            <ErrorMessage>
              {PasswordError[errors.currentPassword.type]}
            </ErrorMessage>
          )}
        </InputBox>

        <InputBox>
          <label htmlFor="newPassword">새 비밀번호</label>
          <PasswordBox>
            <FilledInput
              id="newPassword"
              name="newPassword"
              type={ShowPassword ? 'text' : 'password'}
              placeholder="새 비밀번호를 입력하세요"
              {...register('newPassword', {
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
          {errors.newPassword && (
            <ErrorMessage>
              {PasswordError[errors.newPassword.type]}
            </ErrorMessage>
          )}
        </InputBox>
        <InputBox>
          <label htmlFor="confirmNewPassword">새 비밀번호 확인</label>
          <FilledInput
            id="confirmNewPassword"
            name="confirmNewPassword"
            type="password"
            placeholder="새 비밀번호를 다시 입력하세요"
            {...register('passwordConfirm', {
              required: true,
              validate: value => value === newPassword.current,
            })}
          />
          {errors.passwordConfirm && (
            <ErrorMessage>
              {PasswordConfirmError[errors.passwordConfirm.type]}
            </ErrorMessage>
          )}
        </InputBox>
        <InputBox>
          <li>
            <RegistButton type="submit" onClick={handleSubmit(onSubmit)}>
              비밀번호 변경
            </RegistButton>
          </li>
        </InputBox>
        <Title>회원탈퇴</Title>
        <InputBox>
          <label htmlFor="password">비밀번호</label>
          <PasswordBox>
            <FilledInput
              id="password"
              name="password"
              type={ShowPassword ? 'text' : 'password'}
              placeholder="대/소문자,숫자,특수문자 포함 8~20자"
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
          <label htmlFor="confirmPassword">비밀번호 확인</label>
          <FilledInput
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="비밀번호를 다시 입력해주세요."
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
        <InputBox>
          <li>
            <RegistButton type="submit" onClick={handleSubmit(onSubmit)}>
              회원탈퇴
            </RegistButton>
          </li>
        </InputBox>
      </ContentBox>
    </FormBox>
  );
}

export default withRouter(Email);
