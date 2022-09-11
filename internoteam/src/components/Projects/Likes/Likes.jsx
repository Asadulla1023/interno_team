import "./Likes.css";

import React from "react";

export const Likes = () => {
  return (
    <div className="likes_section">
      <div className="container">
        <div className="boxes">
          <div className="small_box">
            <h1 className="number_likes">12</h1>
            <p>Years Of Experiance</p>
          </div>
          <div className="small_box">
            <h1 className="number_likes">5K</h1>
            <p>Success Project</p>
          </div>
          <div className="small_box">
            <h1 className="number_likes">1K</h1>
            <p>Active Project</p>
          </div>
          <div className="small_box no_line">
            <h1 className="number_likes">4K</h1>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};
