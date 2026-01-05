import "./../styles/blog.css";
import { blogPosts } from "../data/blogpost.js";

// // Sample blog posts data
// const blogPosts = [
//   {
//     title: "Day 1: Starting Over as an IT Graduate in 2026",
//     image: "/src/assets/img/blog1.png",
//     link: "https://www.linkedin.com/embed/feed/update/urn:li:share:7398040652292395008?collapsed=1"
//   },
//   {
//     title: "Day 2: Relearning HTML",
//     image: "/src/assets/img/blog2.png",
//     link: "https://www.linkedin.com/embed/feed/update/urn:li:share:739804277..."
//   },
//   {
//     title: "Day 3: CSS Projects",
//     image: "/src/assets/img/blog3.png",
//     link: "#"
//   }
// ];

export default function Blog() {
  return (
    <section id="BLOG" className="blog">
      <h2>Blog Posts</h2>
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <a
            key={index}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-card"
          >
            <img src={post.img} alt={post.title} className="blog-img" />
            <h3 className="blog-title">{post.title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}
