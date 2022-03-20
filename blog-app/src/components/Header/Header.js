import "./Header.css";
import profile from "./images/profile.png";

export default function Header() {
	return (
		<nav>
			<div className="left">BlogHUB</div>
			<div className="center">
				<ul className="centerList">
					<li className="centerListItem">Home</li>
					<li className="centerListItem">About</li>
					<li className="centerListItem">Write</li>
					<li className="centerListItem">Sign In</li>
				</ul>
			</div>
			<div className="right">
				<img className="profile" src={profile} alt="profile" />
				<img
					className="searchIcon"
					src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"
					alt="search"
				/>
			</div>
		</nav>
	);
}
