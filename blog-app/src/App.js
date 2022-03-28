import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Write from "./pages/Write/Write";
import Body from "./components/Body/Body";
import BlogList from "./components/BlogList/BlogList";
import TrendingBlogs from "./components/TrendingBlogs/TrendingBlogs";
import Aside from "./components/Aside/Aside";
import "./App.css";

const NotFound = () => {
    return (
        <div className="not-found">
            The page you are looking for does not exist please check the URL.
        </div>
    );
};

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="about" element={<About />} />
                    <Route
                        path="/"
                        element={
                            <Body
                                BlogList={BlogList}
                                Aside={Aside}
                                TrendingBlogs={TrendingBlogs}
                            />
                        }
                    />
                    <Route path="write" element={<Write />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
