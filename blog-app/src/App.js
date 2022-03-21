import { BlogList } from "./components/BlogList/BlogList";
import Header from "./components/Header/Header";
import TrendingBlogs from "./components/TrendingBlogs/TrendingBlogs";
import Aside from "./components/Aside/Aside";
import Body from "./components/Body/Body";
function App() {
    return (
        <div>
            <Header />
            <TrendingBlogs />
            <Body BlogList={BlogList} Aside={Aside} />
        </div>
    );
}

export default App;
