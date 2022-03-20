import { BlogList } from "./components/BlogList/BlogList";
import Header from "./components/Header/Header";
import TrendingBlogs from "./components/TrendingBlogs/TrendingBlogs";

function App() {
	return (
		<div>
			<Header />
			<TrendingBlogs />
			<BlogList />
		</div>
	);
}

export default App;
