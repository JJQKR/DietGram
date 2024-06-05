export const checkLengthValidation = (text, num) => {
  if (text.trim().length < num) return false;
  return true;
};

export const checkEqualValidation = (text1, text2) => {
  if (text1.trim() !== text2.trim()) return false;
  return true;
};
