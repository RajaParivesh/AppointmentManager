const location = window.location;

const getHost = () => {
    if (process.env.REACT_APP_ENV === "development")  return "http://localhost:8080";
    return `${location.protocol}//${location.hostname}:${location.port}`;
}

export default {
    BASE_URL: `${getHost()}/api`,
    STATUS_MAP: {
        1: "Available",
        2: "Booked",
        3: "Cancelled"
    }
};
