import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 1, name: 'Outdoors' },
  { id: 2, name: 'Movies' },
  { id: 3, name: 'Home' },
  { id: 4, name: 'Shoes' },
  { id: 5, name: 'Electronics' },
  { id: 6, name: 'Cats' },
  { id: 7, name: 'Music' },
  { id: 8, name: 'Series' },
  { id: 9, name: 'Health' },
  { id: 10, name: 'Computers' },
 
];

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
  return (
    <div className="flex flex-wrap items-center justify-center py-4 md:py-8">
      <Link to="/categories" className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">All categories</Link>
      {categories.map(category => (
        <Link
          key={category.id}
          to={`/categories/${category.id}`}
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          {category.name}
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
