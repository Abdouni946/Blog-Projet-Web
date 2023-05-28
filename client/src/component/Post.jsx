import { Link } from "react-router-dom";
import "../index.css";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";

export default function Post(post) {
  const { keyid } = post;

  return (
    <Card id="cards" className=" w-96 mx-2 mt-20">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={post.image + "?random=" + keyid} alt="img-blur-shadow" layout="fill" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2 h-[15vh]">
          {post.title}
        </Typography>
        <Typography className="h-[20vh]">
          {post.content}
        </Typography>
      </CardBody>
      {post.categories && (
          <div className=" flex justify-end">
            {post.categories.map(category => (
              <Link to={`/categories/${category.id}`}>
                <button
                  key={category.id}
                  className="badge badge-outline px-2 py-1 m-1 text-xs text-white bg-cyan-500 border border-cyan-500 rounded cursor-pointer transition-colors duration-200"
                >
                  {category.name}
                </button>
              </Link>
            ))}
          </div>
        )}
      <CardFooter className="pt-0">
        <Link to={`/post/${keyid}`}>
          <Button>Read More</Button>
        </Link>
      </CardFooter>
    </Card>

  );
}
