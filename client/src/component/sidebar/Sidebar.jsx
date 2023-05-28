import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebaritem">
        <span className="sidebartitle">ABOUT ME</span>
        <img
          className="flex-container"
          src="https://images.pexels.com/photos/3153204/pexels-photo-3153204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
          illo molestiae quaerat maiores, fugit recusandae vel. Ex explicabo
          enim voluptatem, aut iste corrupti, fuga, sint doloremque itaque
          pariatur fugiat perferendis.
        </p>
      </div>

      <div className="sidebaritem">
        <span className="sidebartitle">CATEGORIES</span>
        <ul className="sidebarlist">
          <li className="sidebarlistitem">Life</li>
          <li className="sidebarlistitem">music</li>
          <li className="sidebarlistitem">style</li>
          <li className="sidebarlistitem">sporrt</li>
          <li className="sidebarlistitem">cinema</li>
          <li className="sidebarlistitem">tags</li>
        </ul>
      </div>

      <div className="sidebaritem">
        <span className="sidebartitle">FOLLOW US</span>
        <div className="sidebarsocial">
          <i className="sidebaricon topicon fa-brands fa-facebook fa-xl"></i>
          <i className="sidebaricon fa-brands fa-github fa-xl"></i>
          <i className="sidebaricon fa-brands fa-instagram fa-xl"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
