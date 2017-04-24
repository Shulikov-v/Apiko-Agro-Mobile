const emailRegexp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

export const isValidEmail = email => emailRegexp.test(email);

const passwordRegexp = /[a-zA-Z0-9!@#$%^&*]{6,}/;

export const isValidPassword = password => passwordRegexp.test(password);
