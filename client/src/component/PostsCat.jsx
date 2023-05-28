import React from 'react';
import Post from "./Post";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Posts() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [articles, setArticles] = useState([]);
    
    useEffect(() => {
        const getArticles = async () => {
            const res = await axios.get("http://localhost:3001/categories/" + path);
            setArticles(res.data.category.articles);

        };
        getArticles();
    }, [path]);


    return (
        <div className="flex flex-wrap gap-3">
            {articles.map(post => (
                <Post title={post.title}
                    image={post.image}
                    content={post.content}
                    createdAt={post.createdAt}
                    keyid={post.id} 
                    categories={post.categories} />
            ))}
        </div>
    );
}
