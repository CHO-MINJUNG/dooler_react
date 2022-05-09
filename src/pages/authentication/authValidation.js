

export function isEmailError (email, setError) {
  var regExp =  /^[A-Za-z0-9+]{4,}$/;
  const isError = !regExp.test(email); // 형식에 맞는 경우 true 리턴
  if (isError) {
    setError(true);
  } else {
    setError(false);
  }

  return isError;
}

export function isPasswordError (password, setError) {
  var regExp = /^(?=.*?[A-Z]|[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/; //  8자 이상, 영대소문자, 숫자, 특수문자 포함
  const isError = !regExp.test(password); // 형식에 맞는 경우 true 리턴
  if (isError) {
    setError(true);
  } else {
    setError(false);
  }

  return isError;
}