import Navbar from "../components/Navbar";
import { NavLink, Outlet } from "react-router-dom"
import Toast from "../components/Toast";


const routes = [
    { path: "/", name: "首頁" },
    { path: "/products", name: "產品列表" },
    { path: "/shoppcart", name: "購物車" },
    { path: "/login", name: "登入" }
];

export default function FrontLayout() {
    return (<>
    < Navbar routes={routes}/>
    <Outlet/>
    <Toast/>
    </>)
}