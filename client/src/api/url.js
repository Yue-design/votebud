export default function getBaseUrl() {
    // console.log('read api base url from env: ', process.env.REACT_APP_API_BASE_URL);
    // let baseUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:7000';
    // console.log('api base url is ' + baseUrl);
    // return baseUrl;

    return "";
}

export function getSitesUrl() {
    return `${getBaseUrl()}/sites`;
}

export function getLoginUrl() {
    return `${getBaseUrl()}/auth/login`;
}

export function getRegisterUrl() {
    return `${getBaseUrl()}/auth/registration`;
}

export function getUserUrl() {
    return `${getBaseUrl()}/user`;
}
