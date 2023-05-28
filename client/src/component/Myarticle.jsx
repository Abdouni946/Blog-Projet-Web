import React from 'react';
import MyArticles from "./MyArticles";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Posts() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const res = await axios.get("http://localhost:3001/users/" + path);
            setArticles(res.data.articles);
            console.log(res.data.articles);

        };
        getArticles();
    }, [path]);


    return (
        <div className="flex flex-wrap gap-3">

            <label class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-3 mx-auto  uppercase block  dark:text-white" for="user_avatar">Upload New Article</label>
            <input class="mr-14 ml-14 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file"></input>
            <label for="small-input" class="mr-14 ml-14 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
            <input type="text" id="small-input" class="mr-14 ml-14 block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
            <label for="small-input" class="mr-14 ml-14 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Content</label>
            <input type="text" id="small-input" class="mr-14 ml-14 block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
            {articles.map(post => (
                <MyArticles title={post.title}
                    image={post.image}
                    content={post.content}
                    createdAt={post.createdAt}
                    keyid={post.id}
                />
            ))}
        </div>
    );
}
