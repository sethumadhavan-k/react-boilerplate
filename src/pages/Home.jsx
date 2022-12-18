import { Link } from "react-router-dom"


const Home = () => {
    return(
        <>
            <h1>Index Page</h1>
            <Link to={"/overview"}>Overview</Link>
        </>
    )
}   


export default Home