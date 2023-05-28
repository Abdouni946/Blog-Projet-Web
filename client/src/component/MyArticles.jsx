import { Link } from "react-router-dom";
import "../index.css";

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";

import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function MyArticles({ title, image, content, createdAt, key }) { // Renamed component to ArticleCard

    return (
                <Card className=" mt-5 flex-row w-full mx-auto max-w-[48rem]">
                    <CardHeader shadow={false} floated={false} className="w-2/5 shrink-0 m-0 rounded-r-none">
                        <img
                            src={image + "?random=" + key}
                            alt="image"

                            className="w-full h-full object-cover"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h6" color="black" className="uppercase mb-4">Post</Typography>
                        <Typography variant="h4" color="black-gray" className="mb-2">
                            {title}
                        </Typography>
                        <Typography color="gray" className="font-normal mb-8">
                            {content}
                        </Typography>
                        <p className=" font-semibold text-lg text-black-700 dark:text-black-400">
                            Created At:
                        </p>
                        <p className="mb-3 text-lg text-black-700 dark:text-black-400">
                            {createdAt.split("T")[0]} / { createdAt.split("T")[1].split(":")[0]}:{ createdAt.split("T")[1].split(":")[1]}
                        </p>
                        <div className="flex justify-between">
                        <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete Article</button>
                        <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Edit Article</button>
                        </div>
                    </CardBody>
                    
                </Card>

    );
}
