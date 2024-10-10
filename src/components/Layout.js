import AppBar from "./AppBar";
import {Outlet} from "react-router-dom";

function Layout() {
    return (
        <div className="container">
            <AppBar />

            <Outlet />
        </div>
    )
}
export default Layout;