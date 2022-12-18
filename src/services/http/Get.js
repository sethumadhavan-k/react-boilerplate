
 import Axios from 'axios';
 export default function Get(URL){
    let response = Axios.get(URL, { withCredentials: false, headers: { "Content-Type": "application/json" } })
    return response
}
 