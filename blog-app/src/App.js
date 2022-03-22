import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";

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
                <Routes>
                    <Route path="/" element={<Header />}>
                        <Route path="/about" element={<About />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
