import React from "react";
import "./LeftSidebar.scss";

export default function LeftSideBar() {
  const theme = {
    //background color and text color can be either 'dark' or 'light'
    bgColor: "light",
    textColor: "dark",
  };

  const items = [
    {
      name: "home",
      header: "Home",
      content: (
        <ul>
          <li>Events</li>
          <li>Posts</li>
        </ul>
      ),
    },
    {
      name: "follow",
      header: "Follow Us",
      content: (
        <span>
          Follow us on Twiiter click <a href="https://www.twitter.com">here</a>{" "}
          for our twitter page
        </span>
      ),
    },
    {
      name: "menu",
      header: "Menu",
      content: (
        <ul>
          <li>Menu item</li>
          <li>Menu item</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="sidebar-container">
      {items.map(function (sidebaritem, index) {
        return (
          <div
            className={`sidebar-card shadow  bg-${theme.bgColor} rounded mt-5 mb-5 `}
            key={index}
          >
            <div>
              <p className={`item-header text-${theme.textColor}`}>
                {sidebaritem.header}
              </p>
            </div>

            <p className={`text-${theme.textColor}  sidebar-content`}>
              {sidebaritem.content}
            </p>
          </div>
        );
      })}
    </div>
  );
}
