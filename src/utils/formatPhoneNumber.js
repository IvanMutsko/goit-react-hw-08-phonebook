export const formatPhoneNumber = number => {
  const cleaned = ('' + number).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{2})(\d{2})$/);

  if (match) {
    return '(' + match[1] + ')-' + match[2] + '-' + match[3] + '-' + match[4];
  }

  return null;
};

export const delSeparators = number => {
  const cleanedNumber = number.replace(/[()-]/g, '');

  return cleanedNumber;
};
