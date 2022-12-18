import { Link } from "react-router-dom"
import {useEffect} from "react"
import Get from "../services/http/Get"
const Home = () => {

    useEffect(()=>{
        Get("https://jsonplaceholder.typicode.com/todos").then(resp=>{
            console.log({resp})
        })
    })

    return(
        <>
            <h1>Index Page</h1>
            <Link to={"/overview"}>Overview</Link>
        </>
    )
}   


export default Home