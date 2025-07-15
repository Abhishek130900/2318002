export const validateUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const validateCode = (code) => {
  return /^[a-zA-Z0-9]{3,20}$/.test(code);
};

export const validateValidity = (value) => {
  return /^[0-9]+$/.test(value);
};
