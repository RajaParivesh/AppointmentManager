const location = window.location;

const getHost = () => {
    if (process.env.REACT_APP_ENV === "development")  return "http://localhost:8080";
    return `${location.protocol}//${location.hostname}:${location.port}`;
}

export default {
    BASE_URL: `${getHost()}/api`
};
