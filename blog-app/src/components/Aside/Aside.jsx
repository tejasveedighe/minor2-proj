import "./Aside.css";

export default function Aside() {
    return (
        <div className="aside">
            <footer className="footer">
                <span className="company">
                    <h3>BlogHUB</h3>
                    <span className="company-item location">
                        <img
                            className="location"
                            alt="location"
                            src="https://img.icons8.com/material-outlined/30/000000/marker.png"
                        />{" "}
                        2nd Floor, L-86, L.I.G Colony, Indore, Madhya Pradesh -
                        452001
                    </span>
                    <br />
                    <span className="company-item mail">
                        <img
                            className="mail-img"
                            alt="mail"
                            src="https://img.icons8.com/material-outlined/30/000000/new-post.png"
                        />
                        tejasvee@gmail.com
                    </span>
                    <span className="socials">
                        <a
                            href="https://www.facebook.com/tejasveedighe"
                            target="_top"
                        >
                            <img
                                alt="facebook"
                                src="https://img.icons8.com/small/32/000000/facebook.png"
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/teja5veed1ghe"
                            target="_top"
                        >
                            <img
                                alt="instagram"
                                src="https://img.icons8.com/small/32/000000/instagram-new.png"
                            />
                        </a>
                        <a
                            href="https://www.youtube.com/tejasveedighe"
                            target="__top"
                        >
                            <img
                                alt="youtube"
                                src="https://img.icons8.com/small/32/000000/youtube-play.png"
                            />
                        </a>
                    </span>
                </span>
            </footer>
        </div>
    );
}
