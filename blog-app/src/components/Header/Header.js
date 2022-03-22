import "./Header.css";
import profile from "./images/profile.png";
import { Link, Outlet } from "react-router-dom";

const Left = () => {
    return <div className="left">BlogHUB</div>;
};

const Center = () => {
    return (
        <div className="center">
            <ul className="centerList">
                <Link className="centerListItem" to="/">
                    Home
                </Link>
                <Link className="centerListItem" to="/about">
                    About
                </Link>
                <Link className="centerListItem" to="/write">
                    Write
                </Link>
                <Link className="centerListItem" to="/signin">
                    Sign In
                </Link>
            </ul>
        </div>
    );
};

const Right = () => {
    return (
        <div className="right">
            <img className="profile" src={profile} alt="profile" />
            <img
                className="searchIcon"
                src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"
                alt="search"
            />
        </div>
    );
};

const Nav = () => {
    return (
        <div>
            <nav>
                <Left />
                <Center />
                <Right />
            </nav>
            <Outlet />
        </div>
    );
};
const Header = () => {
    return <Nav />;
};
export default Header;
