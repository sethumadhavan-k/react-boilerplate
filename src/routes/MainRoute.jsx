import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import Dashboard from "../layout/DashboardLayout"
import NotFound from "../pages/404"
import Home from "../pages/Home"
import Overview from "../pages/overview"


const MainRoute = ()=>{
    return(
        <Routes>
            <Route element={<Dashboard/>} >
                <Route path="/" element={<Home/>} />
                <Route path="/overview" element={<Overview/>} />
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    )
}

export default MainRoute