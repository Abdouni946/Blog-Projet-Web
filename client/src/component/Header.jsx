import React from 'react';
import {Link } from 'react-router-dom';

const Header = () => {

  return (
    <header className= "mt-7 bg-white dark:bg-gray-900">

      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Best place to Read & Create <br /> your <span className="text-green-500  cursor-default ">Blogs</span></h1>
              
              <p className="mt-3 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>
              
              
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img className="w-full h-full lg:max-w-3xl" src="https://wpimg.pixelied.com/blog/wp-content/uploads/2021/03/16212514/header-image-featured-image.png" alt="Catalogue-pana.svg" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
