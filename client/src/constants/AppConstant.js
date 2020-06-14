const location = window.location;

const getHost = () => {
    if (process.env.REACT_APP_ENV === "development")  return "http://localhost:3000";
    return `${location.protocol}//${location.hostname}:${location.port}`;
}

export default {
    BASE_URL: `${getHost()}/api`
};
