const location = window.location;

const getHost = () => {
    if (process.env.ENV === "development")  return "http://localhost:3000";
    return `${location.protocol}//${location.hostname}:${location.port}`;
}

export default {
    BASE_URL: `${getHost()}/api`
};
