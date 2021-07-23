export default function checkHttpStatus(response) {
    if (response.ok) {
        return Promise.resolve(response);
    } else {
        const error = new Error(response.statusText);
        error.response = response;
        return Promise.reject(error);
    }
}
