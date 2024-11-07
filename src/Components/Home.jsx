import React from "react";

Home=()=>
{
    <nav>
      <ul className="flex space-x-4 p-4 bg-gray-800 text-white">
        <li><Link to="/home" className="hover:text-blue-500">Home</Link></li>
        <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
        <li><Link to="/todo" className="hover:text-blue-500">To-Do</Link></li>
      </ul>
    </nav>
    
};

export default Home;