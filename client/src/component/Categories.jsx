import axios from 'axios';
import React from 'react';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
/*
const categories = [
  { id: 1, name: 'Outdoors', total: 39 },
  { id: 2, name: 'Movies', total: 30 },
  { id: 3, name: 'Home', total: 20 },
  { id: 4, name: 'Shoes', total: 17 },
  { id: 5, name: 'Electronics', total: 29 },
  { id: 6, name: 'Cats', total: 25 },
  { id: 7, name: 'Music', total: 18 },
  { id: 8, name: 'Series', total: 26 },
  { id: 9, name: 'Health', total: 30 },
  { id: 10, name: 'Computers', total: 15 },

];
*/




const images = [
  "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/5214139/pexels-photo-5214139.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/4709822/pexels-photo-4709822.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/3547176/pexels-photo-3547176.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/115655/pexels-photo-115655.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/5082567/pexels-photo-5082567.jpeg?auto=compress&cs=tinysrgb&w=400",
];

function App() {

  const [categories, setCategories] = useState([])
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("http://localhost:3001/categories?take=100&skip=0");
      setCategories(res.data.categorys);
      console.log(res.data.categorys);
    };
    getCats();
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center py-4 md:py-8">
      <Link to="/categories" className="text-green-700 hover:text-white border border-green-600 bg-white hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-500 dark:bg-gray-900 dark:focus:ring-green-800">All categories</Link>
      {categories.map(category => (
        <Link
        key={category.id}
          to={`/categories/${category.id}`}
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          {category.name} ({category.articles.length})
        </Link>
      ))}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index}>
            <img className="h-auto max-w-full rounded-lg" src={image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
