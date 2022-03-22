import { BlogList } from "./components/BlogList/BlogList";
import Header from "./components/Header/Header";
import TrendingBlogs from "./components/TrendingBlogs/TrendingBlogs";
import Aside from "./components/Aside/Aside";
import Body from "./components/Body/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/about" element={<About />} />
                    {
                        //<Route path="/write" element={<Write />} />
                        //<Route path="/signin" element={<SingIn />} />
                    }{" "}
                </Routes>
                <Header />
                <TrendingBlogs />
                <Body BlogList={BlogList} Aside={Aside} />
            </BrowserRouter>
        </div>
    );
}

export default App;
