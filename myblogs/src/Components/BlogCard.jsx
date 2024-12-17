import React from "react";

const BlogCard = ({ title, description, image }) => {
  return (
    <>
      <div className="border rounded-lg shadow-md p-4 bg-white">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500">
          Read More
        </button>
      </div>
    </>
  );
};

export default BlogCard;
