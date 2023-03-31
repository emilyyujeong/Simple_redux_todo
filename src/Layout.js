import { Link, Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div>
            <h1>HOME</h1>
            <nav>
                <Link to='/'>home</Link> &nbsp;&nbsp;
                <Link to='/board'>board</Link>&nbsp;&nbsp;
                <Link to='/write'>write</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default Layout