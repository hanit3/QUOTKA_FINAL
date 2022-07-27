import styled from 'styled-components';

export const FormBox = styled.form`
  display: float;

  .google-img {
    width: 30px;
    margin: 0 auto;
  }
`;
export const UploaderBox = styled.div`
  width: 375px;
`;
export const ProfileBox = styled.form`
  width: 60%;
  padding: 5%;
  margin-left: -100px;
`;
export const ContentBox = styled.form`
  width: 70%;
  margin-right: -100px;
`;

export const Title = styled.form`
  font-famliy: SCDream-thick;
  font-size: 21px;
  font-weight: 900;
  display: flex;
  justify-content: left;
  margin-left: 10px;
  margin-bottom: 12px;
  margin-top: 10px;
  letter-spacing: 1.2px;
`;

export const FormSmallTitle = styled.h1`
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 13px;
`;

export const InputBox = styled.div`
  margin-bottom: 3px;
  width: 100%;
  position: relative;
  display: flex;
  margin-left: 20px;
  flex-direction: column;
  align-items: start;
  & label {
    display: flex;
    align-items: start;
    font-size: 14px;
    font-weight: 700;
    margin-right: 220px;
  }
  &: focus-within {
    color: #4957a5;
  }
`;

/**아이디 비밀번호 치는 디자인width280px이었음. */
export const FilledInput = styled.input`
  position: relative;
  width: 380px;
  height: 48px;
  padding: 0 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: #eee;
  font-weight: 500;
`;
export const GoogleImg = styled.img`
  width: 10px;
`;
export const ErrorMessage = styled.p`
  color: #de506b;
  font-size: 11px;
  padding: 4px 4px;
  font-weight: 700;
`;

export const PasswordBox = styled.div`
  position: relative;
  width: 100%;
`;

export const PasswordButton = styled.div`
  position: absolute;
  bottom: 0;
  left: 300px;
`;

export const LoginButton = styled.button`
  margin: 0 auto;
  width: 280px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #c5ad81;
  color: #fff;
  font-weight: 700;

  &:active {
    opacity: 0.7;
  }
`;

export const TextBox = styled.div`
  width: 100%;
  margin-top: 20px;
  font-size: 14px;
  text-align: center;
  padding-right: 17px;
  & span {
    font-size: 14px;
    font-weight: 500;
    color: #aaa;
  }
  & a span {
    color: #c5ad81;
    font-weight: 600;
  }
`;

export const RadioBox = styled.div`
  margin-top: 10px;
  width: 100%;
  position: relative;
  display: flex;
  margin-left: 110px;
  flex-direction: row;
  align-items: start;
  font-size: 14px;
  & label {
    display: flex;
    align-items: start;
    font-size: 14px;
    font-weight: 700;
    margin-right: 140px;
  }
  &: focus-within {
    color: #4957a5;
  }
`;

export const RegistButton = styled.button`
  margin: 0 auto;
  width: 380px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #c5ad81;
  color: #fff;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 40px;
  &:active {
    opacity: 0.7;
  }
`;
