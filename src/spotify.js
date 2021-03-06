export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://spotify-clone-a2bb3.web.app/";

const clientId = "b5d17259a6714706bc1f9aa1fc589a6f";

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`;
