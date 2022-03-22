import "./Body.css";

const Body = ({ BlogList, Aside, TrendingBlogs }) => {
    return (
        <div>
            <TrendingBlogs />
            <div className="body-content">
                <BlogList />
                <div className="vl"></div>
                <Aside />
            </div>
        </div>
    );
};

export default Body;
