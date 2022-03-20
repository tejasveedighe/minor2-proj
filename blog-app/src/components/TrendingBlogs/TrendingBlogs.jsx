import React from "react";
import "./TrendingBlogs.css";

const bloglist = [
	{
		authorName: "Tejasvee Dighe",
		profile: "https://img.icons8.com/ios-glyphs/30/000000/user--v1.png",
		title: "Vladimir Putin Has Already Won, but Nobody wants to Admit It",
		uploadData: "Dec 31",
	},
	{
		authorName: "Shreesh",
		profile: "https://img.icons8.com/ios-glyphs/30/000000/user--v1.png",
		title: "Energy Cancelled",
		uploadData: "June 12",
	},
	{
		authorName: "Himanshu",
		profile: "https://img.icons8.com/ios-glyphs/30/000000/user--v1.png",
		title: "Conerstone of early 2000s LA rotations, Odalis Perez passed away",
		uploadData: "March 9",
	},
	{
		authorName: "Tiksha",
		profile: "https://img.icons8.com/ios-glyphs/30/000000/user--v1.png",
		title: "Apple: M1 Ultra Meanings and Consequences",
		uploadData: "Feb 1",
	},
	{
		authorName: "Nitesh",
		profile: "https://img.icons8.com/ios-glyphs/30/000000/user--v1.png",
		title: "Why Russia's Tank Army has Suicidal Incompetence",
		uploadData: "Jan 12",
	},
	{
		authorName: "Jayesh",
		profile: "https://img.icons8.com/ios-glyphs/30/000000/user--v1.png",
		title:
			"Keeping Developers Will be the priority in Great Developer Resignation Next Stage",
		uploadData: "Jan 1",
	},
];

function TrendingBlog({ blog }) {
	return (
		<div className="trendingBlogCard">
			<span className="author-info">
				<img
					className="author-profile-img"
					src={blog.profile}
					alt={blog.authorName}
				/>{" "}
				<b className="author-name">{blog.authorName}</b>
			</span>
			<p className="blog-title">{blog.title}</p>
			<span className="blog-info">{blog.uploadData}</span>
		</div>
	);
}

export default function TrendingBlogs() {
	return (
		<div className="trendingBlogsPanel">
			<h5>TRENDING ON BLOGHUB</h5>
			<ul className="trendingBlogList">
				{bloglist.map((blog, i) => (
					<li className="trendingBlogItem" key={i}>
						<TrendingBlog blog={blog} />
					</li>
				))}
			</ul>
			<hr></hr>
		</div>
	);
}
