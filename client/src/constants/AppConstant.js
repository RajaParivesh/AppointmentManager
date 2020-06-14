const location = window.location;
export default {
    BASE_URL: `${location.protocol}//${location.hostname}:${location.port}/api`
};
