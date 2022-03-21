import "./BlogList.css";

const bloglist = [
    {
        authorName: "Tejasvee Dighe",
        profile: "https://img.icons8.com/ios-glyphs/30/000000/user--v1.png",
        title: "Vladimir Putin Has Already Won, but Nobody wants to Admit It",
        uploadData: "Dec 31",
        tags: "Ukraine",
        blog_img:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    },
    {
        authorName: "Shreesh",
        profile: "https://img.icons8.com/ios-glyphs/30/000000/user--v1.png",
        title: "Energy Cancelled",
        uploadData: "June 12",
        tags: "Ukraine",
        blog_img:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    },
    {
        authorName: "Himanshu",
        profile: "https://img.icons8.com/ios-glyphs/30/000000/user--v1.png",
        title: "Conerstone of early 2000s LA rotations, Odalis Perez passed away",
        uploadData: "March 9",
        tags: "Ukraine",
        blog_img:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    },
    {
        authorName: "Tiksha",
        profile: "https://img.icons8.com/ios-glyphs/30/000000/user--v1.png",
        title: "Apple: M1 Ultra Meanings and Consequences",
        uploadData: "Feb 1",
        tags: "Ukraine",
        blog_img:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    },
    {
        authorName: "Nitesh",
        profile: "https://img.icons8.com/ios-glyphs/30/000000/user--v1.png",
        title: "Why Russia's Tank Army has Suicidal Incompetence",
        uploadData: "Jan 12",
        tags: "Ukraine",
        blog_img:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    },
    {
        authorName: "Jayesh",
        profile: "https://img.icons8.com/ios-glyphs/30/000000/user--v1.png",
        title: "Keeping Developers Will be the priority in Great Developer Resignation Next Stage",
        uploadData: "Jan 1",
        tags: "Ukraine",
        blog_img:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    },
    {
        authorName: "Tejasvee Dighe",
        profile: "https://img.icons8.com/ios-glyphs/30/000000/user--v1.png",
        title: "Vladimir Putin Has Already Won, but Nobody wants to Admit It",
        uploadData: "Dec 31",
        tags: "Ukraine",
        blog_img:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    },
    {
        authorName: "Tejasvee Dighe",
        profile: "https://img.icons8.com/ios-glyphs/30/000000/user--v1.png",
        title: "Vladimir Putin Has Already Won, but Nobody wants to Admit It",
        uploadData: "Dec 31",
        tags: "Ukraine",
        blog_img:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    },
    {
        authorName: "Tejasvee Dighe",
        profile: "https://img.icons8.com/ios-glyphs/30/000000/user--v1.png",
        title: "Vladimir Putin Has Already Won, but Nobody wants to Admit It",
        uploadData: "Dec 31",
        tags: "Ukraine",
        blog_img:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    },
    {
        authorName: "Tejasvee Dighe",
        profile: "https://img.icons8.com/ios-glyphs/30/000000/user--v1.png",
        title: "Vladimir Putin Has Already Won, but Nobody wants to Admit It",
        uploadData: "Dec 31",
        tags: "Ukraine",
        blog_img:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    },
    {
        authorName: "Tejasvee Dighe",
        profile: "https://img.icons8.com/ios-glyphs/30/000000/user--v1.png",
        title: "Vladimir Putin Has Already Won, but Nobody wants to Admit It",
        uploadData: "Dec 31",
        tags: "Ukraine",
        blog_img:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    },
    {
        authorName: "Tejasvee Dighe",
        profile: "https://img.icons8.com/ios-glyphs/30/000000/user--v1.png",
        title: "Vladimir Putin Has Already Won, but Nobody wants to Admit It",
        uploadData: "Dec 31",
        tags: "Ukraine",
        blog_img:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    },
    {
        authorName: "Tejasvee Dighe",
        profile: "https://img.icons8.com/ios-glyphs/30/000000/user--v1.png",
        title: "Vladimir Putin Has Already Won, but Nobody wants to Admit It",
        uploadData: "Dec 31",
        tags: "Ukraine",
        blog_img:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    },
    {
        authorName: "Tejasvee Dighe",
        profile: "https://img.icons8.com/ios-glyphs/30/000000/user--v1.png",
        title: "Vladimir Putin Has Already Won, but Nobody wants to Admit It",
        uploadData: "Dec 31",
        tags: "Ukraine",
        blog_img:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    },
    {
        authorName: "Tejasvee Dighe",
        profile: "https://img.icons8.com/ios-glyphs/30/000000/user--v1.png",
        title: "Vladimir Putin Has Already Won, but Nobody wants to Admit It",
        uploadData: "Dec 31",
        tags: "Ukraine",
        blog_img:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    },
    {
        authorName: "Tejasvee Dighe",
        profile: "https://img.icons8.com/ios-glyphs/30/000000/user--v1.png",
        title: "Vladimir Putin Has Already Won, but Nobody wants to Admit It",
        uploadData: "Dec 31",
        tags: "Ukraine",
        blog_img:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
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
                    />{" "}
                    {blog.authorName}
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
                <img
                    className="save"
                    alt="save"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAB8UlEQVRIie2WzUtUURjGnzv3ehtHzdGRcaAgsU3t2kqQgVggQX9AhPS1aVn5Z4jMfmhlQpILqWxhthHaiKsEo6iujU5J03i/9N5z5pz3thgiK+becXBmdR84i8PzvO/vvIezOArCpQC4CCAZkftXHoC3AIKwxnWVONE/o3UP3tZ7z8ijULm1pQr3W4GY+bBeRgsFa9qlU9cen9TTQ1A7B1C1DGg9pyH9ChJaJwCAhAc12Q/hbKOjdwjSK4ObBorPrl8mFtI78viKAslsAAGkbwIkQMwBCa+2mAOQqHkIalkl9CKjJ/4tPT0MAEgOXqjt+87+MVPZv730MLzv65E9oydukWJwDI7BMTgGx+DjBxN3QdxtLzggAWNuzPkyO+oGkrcPvLvywK/ufV4RdnFp982U1xaw82ExMDfmSpKZN6S/N2luPCna7+eppWBe+Yidl3csYtYVAAcAfGLW1dKr+w4rb7YGTNzF1tMJh4R7F8CnQ5ZBzL35dX7CIWYfP7i0dG9f+mYBUi7878rnktmFnRe3Gn7mDYF/ruWr+8brTWLmVL0MMfvRQXH1XWUt39wzPyytK7ueG88HCb2nDCDXQEk20dH9Izc2HWhd2eg/bj2pqcyyouocwMgRykYUVedqKrPcNBhABsC5JurOAxgIC/wCK0LTzQu1PoMAAAAASUVORK5CYII="
                />
                <img alt="blog-img" className="blog-img" src={blog.blog_img} />
            </span>
        </div>
    );
};

export function BlogList() {
    return (
        <div className="blog-list-panel">
            <h5>RECENTLY UPLOADED ON BLOGHUB</h5>
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
