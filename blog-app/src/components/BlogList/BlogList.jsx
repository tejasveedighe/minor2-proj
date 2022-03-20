import "./BlogList.css";

const bloglist = [
    {
        authorName: "Tejasvee Dighe",
        profile: "https://img.icons8.com/ios-glyphs/30/000000/user--v1.png",
        title: "Vladimir Putin Has Already Won, but Nobody wants to Admit It",
        uploadData: "Dec 31",
        tags: "Ukraine",
    },
    {
        authorName: "Shreesh",
        profile: "https://img.icons8.com/ios-glyphs/30/000000/user--v1.png",
        title: "Energy Cancelled",
        uploadData: "June 12",
        tags: "Ukraine",
    },
    {
        authorName: "Himanshu",
        profile: "https://img.icons8.com/ios-glyphs/30/000000/user--v1.png",
        title: "Conerstone of early 2000s LA rotations, Odalis Perez passed away",
        uploadData: "March 9",
        tags: "Ukraine",
    },
    {
        authorName: "Tiksha",
        profile: "https://img.icons8.com/ios-glyphs/30/000000/user--v1.png",
        title: "Apple: M1 Ultra Meanings and Consequences",
        uploadData: "Feb 1",
        tags: "Ukraine",
    },
    {
        authorName: "Nitesh",
        profile: "https://img.icons8.com/ios-glyphs/30/000000/user--v1.png",
        title: "Why Russia's Tank Army has Suicidal Incompetence",
        uploadData: "Jan 12",
        tags: "Ukraine",
    },
    {
        authorName: "Jayesh",
        profile: "https://img.icons8.com/ios-glyphs/30/000000/user--v1.png",
        title: "Keeping Developers Will be the priority in Great Developer Resignation Next Stage",
        uploadData: "Jan 1",
        tags: "Ukraine",
    },
];

const BlogCard = ({ blog }) => {
    return (
        <div className="blog-card">
            <span className="blog-card-left">
                <span className="author-info">
                    <img
                        src={blog.profile}
                        alt=""
                        className="author-profile-img"
                    />
                </span>
                <span className="blog-title">{blog.title}</span>
                <p className="blog-desc">{blog.desc}</p>
                <span className="blog-info">
                    {blog.uploadData}
                    {" | "}
                    {blog.tags}
                </span>
            </span>
            <span className="blog-card-right">
                <img src="" alt="save" className="save-blog" />
                <img
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
                    alt="blog-img"
                    className="blog-img"
                />
            </span>
        </div>
    );
};

export function BlogList() {
    return (
        <div className="blog-list-panel">
            <ul className="blog-list">
                {bloglist.map((blog, i) => (
                    <li className="blog-list-item" key={i}>
                        {<BlogCard blog={blog} />}
                    </li>
                ))}
            </ul>
        </div>
    );
}
