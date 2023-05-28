import React from 'react';
import Post from "./Post";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Posts() {

  useEffect(() => {
    getAllPosts();
  }, []);

  const [posts, setPosts] = useState([]);
  const getAllPosts = async () => {

    try {
      const response = await axios.get("http://localhost:3001/articles?take=100&skip=85");
      const allPosts = response.data;
      setPosts(allPosts.Articles);
      console.log(allPosts.Articles);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <div className="flex flex-wrap gap-3">
      {posts.map(post => (
        <Post title={post.title}
          image={post.image}
          content={post.content}
          createdAt={post.createdAt}
          keyid={post.id}
          categories={post.categories}  />
      ))}
    </div>

  );
}
