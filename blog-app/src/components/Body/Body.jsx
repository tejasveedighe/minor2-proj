import "./Body.css";

export default function Body({ BlogList, Aside }) {
    return (
        <div className="body-content">
            <BlogList />
            <div className="vl"></div>
            <Aside />
        </div>
    );
}
