import {
  checkEmailExistedApi,
  checkUsernameExistedApi,
} from "../../../services/auth";

const MIN_LENGTH = { USERNAME: 6 };

const PATTERN = {
  EMAIL: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
  USERNAME: /^[A-Za-z][A-Za-z0-9_]{5,}$/g,
};

const MESSAGE = {
  EMAIL: {
    UNMATCHED: "Please enter a valid email",
    EXISTED: "This email has already been registered. Please input a new email",
  },
  USERNAME: {
    MIN_LENGTH:
      "That’s too short. A great username must include at least 6 characters",
    UNMATCHED:
      "Username must begin with a letter and can include numbers and underscores",
    EXISTED: "This Username already existed. Please enter a new one",
  },
};

const checkNull = (value, fieldName) => {
  if (!value) {
    throw new Error(`Please input your ${fieldName}`);
  }
};

const checkPatternMatched = (value, pattern, message) => {
  const isMatched = value.match(pattern);
  if (!isMatched) {
    throw new Error(message);
  }
};

const emailValidation = async (_, value) => {
  //check null
  try {
    checkNull(value, "email");
  } catch (error) {
    return Promise.reject(error);
  }
  // check email pattern
  try {
    checkPatternMatched(value, PATTERN.EMAIL, MESSAGE.EMAIL.UNMATCHED);
  } catch (error) {
    return Promise.reject(error);
  }
  // check email existed
  let emailExisted = await checkEmailExistedApi({ email: value });
  emailExisted = emailExisted.data.content.existed;
  return emailExisted
    ? Promise.reject(new Error(MESSAGE.EMAIL.EXISTED))
    : Promise.resolve();
};

const usernameValidation = async (_, value) => {
  //check null
  try {
    checkNull(value, "Username");
  } catch (error) {
    return Promise.reject(error);
  }
  // check min length
  if (value.length < MIN_LENGTH.USERNAME) {
    return Promise.reject(new Error(MESSAGE.USERNAME.MIN_LENGTH));
  }
  // check username pattern
  try {
    checkPatternMatched(value, PATTERN.USERNAME, MESSAGE.USERNAME.UNMATCHED);
  } catch (error) {
    return Promise.reject(error);
  }
  // check username existed
  let existed = await checkUsernameExistedApi({ name: value });
  existed = existed.data.content.existed;
  return existed
    ? Promise.reject(new Error(MESSAGE.USERNAME.EXISTED))
    : Promise.resolve();
};

export { emailValidation, usernameValidation };
