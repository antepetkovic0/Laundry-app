export function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cname}=${cvalue};${expires};path=/`;
}

export function getCookie(cname) {
  const value = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${cname}=`))
    ?.split("=")[1];

  return value;
}
