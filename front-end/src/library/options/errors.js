// 이메일
export const EmailError = {
  required: '이메일을 입력해주세요.',
  checkPattern: '이메일 형식이 올바르지 않습니다.',
};

// 비밀번호
export const PasswordError = {
  required: '비밀번호를 입력해주세요.',
  minLength: '비밀번호를 8글자 이상 입력해주세요.',
  maxLength: '비밀번호를 20글자 이내로 입력해주세요.',
  checkLower: '비밀번호에 소문자를 포함해주세요.',
  checkUpper: '비밀번호에 대문자를 포함해주세요.',
  checkSpec: '비밀번호에 특수문자를 포함해주세요.',
  checkLang: '비밀번호에 한글은 포함할 수 없습니다.',
};

// 비밀번호 확인
export const PasswordConfirmError = {
  required: '비밀번호를 다시 입력해주세요.',
  validate: '비밀번호가 일치하지 않습니다.',
};

// 이름
export const NameError = {
  required: '닉네임을 입력해주세요.',
  minLength: '닉네임을 2글자 이상 입력해주세요.',
  maxLength: '닉네임을 10글자 이내로 작성해주세요.',
};
