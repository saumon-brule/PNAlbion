import { Link, Outlet } from "react-router-dom";
import "./Header.css";

export default function Header({ children, account }) {
    return <header>
        <Link to="members">members</Link>
        <Link to="account">account</Link>
        <Link to="guild">guild</Link>
    </header>
}