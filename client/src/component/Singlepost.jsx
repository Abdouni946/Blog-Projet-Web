import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Comment from "../component/Comment"

export default function Singlepost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([])

  useEffect(() => {
    const getpost = async () => {
      const res = await axios.get("http://localhost:3001/articles/" + path);
      setPost(res.data.Article);
      console.log(res.data.Article);
      if (res.data.Article.comments) {
        setComments(res.data.Article.comments);
      }
    };
    getpost();
  }, [path]);



  return (
    <>
      <div className="singlepost">
        <div className="singlepostwrapper">
          <a

            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mx-auto"
          >
            <img
              className="object-cover w-full h-96 md:h-auto md:w-2/5 md:rounded-l-lg m-4"
              src={post.image}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal w-full md:w-3/5">
              <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                {post.title}
              </h5>
              <p className="mb-3 font-normal text-lg text-gray-700 dark:text-gray-400">
                {post.content}
              </p>
              <p className="mb-3 font-semibold text-lg text-black-700 dark:text-black-400">
                Created At:
              </p>
              <p className="inline-flex self-end">{post.createdAt}</p>
              <p className="mb-3 font-semibold text-lg text-black-700 dark:text-black-400">
                Author:
              </p>
              <p className="inline-flex self-end">{post.author?.name}</p>
            </div>
          </a>
        </div>

        <div class="bg-white dark:bg-gray-900 py-8 lg:py-1 max-w-2xl mx-auto px-4 flex justify-between items-center mb-4">

          <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Discussion (20)</h2>
        </div>
        <form class="mb-4 ml-64 mr-64">
          <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <label for="comment" class="sr-only">Your comment</label>
            <textarea id="comment" rows="6"
              class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
              placeholder="Write a comment..." required></textarea>
          </div>
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Post Comment</button>

        </form>

      </div>
      {comments.map((comment) =>
      (
        <Comment
          email={comment.email}

          content={comment.content}

          key={comment.id}
        />
      )
      )
      }
    </>

  );
}
