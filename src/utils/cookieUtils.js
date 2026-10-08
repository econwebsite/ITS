// Cookie utility functions for managing pop-up visibility

export const setCookie = (name, value, days = 7) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  const cookieString = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/`;
  document.cookie = cookieString;
};

export const getCookie = (name) => {
  const nameEQ = name + '=';
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(nameEQ) === 0) {
      return decodeURIComponent(cookie.substring(nameEQ.length));
    }
  }
  return null;
};

export const deleteCookie = (name) => {
  setCookie(name, '', -1);
};

export const hasViewedPopup = (popupId) => {
  return getCookie(popupId) === 'true';
};

export const markPopupAsViewed = (popupId, days = 7) => {
  setCookie(popupId, 'true', days);
};
