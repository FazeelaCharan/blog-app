import React from "react";
import blogData from "../Data/blogData";
import BlogCard from "../Components/BlogCard";

const Home = () => {
  return (
    <>
      <div className="container mx-auto p-4   bg-blue-300">
        <h1 className="text-3xl font-bold text-center my-6 text-white">
          My Life. My Blogs.
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogData.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              description={blog.description}
              image={blog.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
