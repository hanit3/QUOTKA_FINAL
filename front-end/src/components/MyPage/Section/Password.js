import React, { useState, useCallback, useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { getName, updateName } from 'modules/actions/user';
import Profile from './Profile';
import Uploader from './Uploader';
import {
  FormBox,
  ProfileBox,
  ContentBox,
  ErrorMessage,
  InputBox,
  FilledInput,
  UploaderBox,
  RegistButton,
  Title,
} from 'styles/form/change-styles';

function Email({ history }) {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    mode: 'onTouched',
  });
  const dispatch = useDispatch();
  const userFrom = localStorage.getItem('userId');

  const [oldName, getOldName] = useState('');

  useEffect(() => {
    dispatch(getName(userFrom)).then(response => {
      getOldName(response.payload.name);
    });
  }, []);

  const onSubmit = useCallback(user => {
    user._id = userFrom;
    dispatch(updateName(user)).then(response => {
      if (!response.payload.changeSuccess) {
        alert(response.payload.message);
      } else {
        if (response.payload.changeSuccess) {
          alert('이름이 변경되었습니다.');
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
        <Profile name={'개인정보 수정'} go={'/mypage/email'} />
      </ProfileBox>
      <ContentBox className="right">
        <Title>프로필 사진 변경</Title>
        <InputBox>
          <UploaderBox>
            <Uploader />
          </UploaderBox>
        </InputBox>

        <InputBox>
          <li>
            <RegistButton type="submit" onClick={handleSubmit(onSubmit)}>
              프로필 변경
            </RegistButton>
          </li>
        </InputBox>
        <Title>닉네임 변경</Title>
        <InputBox>
          <label htmlFor="oldName">현재 닉네임</label>
          <FilledInput id="oldName" name="oldName" value={oldName} readOnly />
        </InputBox>
        <InputBox>
          <label htmlFor="name">변경할 닉네임</label>
          <FilledInput
            id="name"
            name="name"
            type="name"
            placeholder="변경할 닉네임을 입력하세요"
            {...register('name', {
              required: '닉네임을 입력하세요',
            })}
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </InputBox>
        <InputBox>
          <li>
            <RegistButton type="submit" onClick={handleSubmit(onSubmit)}>
              닉네임 변경
            </RegistButton>
          </li>
        </InputBox>
      </ContentBox>
    </FormBox>
  );
}

export default withRouter(Email);
