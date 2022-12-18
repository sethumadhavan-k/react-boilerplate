import Axios from 'axios';

export default function Post(URL, data) {
    let config = { withCredentials: false, headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    let response = Axios.post(URL, data, config);
    return response
}