import React from 'react';

const UserAccountDetails = () => (
  <div className="mr-12 bg-white rounded-lg shadow-sm mb-4">
    <div className="border-b p-4">
      <h6 className="m-0">User Profile</h6>
    </div>
    <div className="p-3">
      <div className="grid grid-cols-1 bg-grey md:grid-cols-2 gap-4">
        {/* First Name */}
        <div className="form-group ">
          <label htmlFor="feFirstName" className="block">Full Name</label>
          <input
            type="text"
            id="feFirstName"
            placeholder="Name"
            value=""
            onChange={() => { }}
            className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        {/* Email */}
        <div className="form-group ">
          <label htmlFor="feEmail" className="block">Email</label>
          <input
            type="email"
            id="feEmail"
            placeholder="Email Address"
            value=""
            onChange={() => { }}
            className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            autoComplete="email"
          />
        </div>
        <div className="form-group  mt-4">
          <label htmlFor="feEmail" >Confirm email</label>
          <input
            type="email"
            id="feEmail"
            placeholder="Email Address"
            value=""
            onChange={() => { }}
            className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            autoComplete="current-password"
          />
        </div>  
        {/* Password */}
        <div className="form-group  mt-4">
          <label htmlFor="fePassword" className="block">Password</label>
          <input
            type="password"
            id="fePassword"
            placeholder="Password"
            value=""
            onChange={() => { }}
            className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            autoComplete="current-password"
          />
        </div>
        {/* Address */}
        <div className="form-group  mt-4">
          <label htmlFor="fePassword" className="block">Confirm password</label>
          <input
            type="password"
            id="fePassword"
            placeholder="Password"
            value=""
            onChange={() => { }}
            className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            autoComplete="current-password"
          />
        </div>
      </div>
      <div className="mt-5 flex justify-between">
        <button className="bg-blue-500 text-white py-2 mt-5 px-3 rounded-lg">Update Account</button>
        <button className="bg-red-500 text-white py-2 mt-5 px-3 rounded-lg">Delete Account</button>
      </div>
    </div>
  </div>
);

const UserProfile = () => (
  <div className=" mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700">
    <div className="flex px-4 pt-4">
      <svg className="w-6 h-6"></svg>
      <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
      </div>
    </div>
    <div className="flex flex-col items-center pb-10">
      <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://randomuser.me/api/portraits/men/4.jpg" alt="Bonnie image" />
      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">Blogs Designer</span>

      <hr className="border-t border-gray-300 my-2 w-10/12 mt-5" /> {/* Divider Line */}

      <p className="mb-1 text-medium font-medium text-gray-900 mt-1">Description</p> {/* Description */}
      <div className="flex space-x-3 ">
        <span className="ml-3 text-sm text-gray-500 dark:text-gray-400 mt-1"> ipsum dolor sit amet consectetur, adipisicing elit. Laudantium nostrum inventore molestias architecto ullam eum asperiores unde! Odio totam at vero velit assumenda quam deserunt. Nihil fuga ab aspernatur tenetur!</span>

      </div>
      <hr className="border-t border-gray-300 my-2 w-10/12 mt-4 " /> {/* Divider Line */}
    </div>
  </div>


);

export default function App() {
  return (
<div className="h-screen bg-gradient-to-r from-cyan-100 to-blue-400">
  <div className="flex justify-center">
    <div className="mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <UserProfile />
        <UserAccountDetails />
      </div>
    </div>
  </div>
</div>





  );
}
