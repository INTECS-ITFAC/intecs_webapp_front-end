import React from "react";

import ArticleCard from "../articleCard/ArticleCard"; //A template to view student posts
import "./PostGrid.scss";

const StudentPostGrid = () => {
  const dummyPostList = [
    {
      id: 1,
      title: "A journey through javascript",
      author: "Sahan Amarsha",
      categories: ["javascript", "web"],
      description:
        "Let’s analyze javascript versions and understand the features of each version one at a time.",
      thumbnail:
        "https://cdn-images-1.medium.com/max/1024/1*ZEu_2nVjitpB-jhLRgfn4A.jpeg",
      date: "2020-05-04",
      link:
        "https://medium.com/@sahanamarsha/a-journey-through-javascript-208f2676f3e2?source=rss-2ac250657f25------2",
    },
    {
      id: 2,
      title: "Clean Architecture .NET Core",
      author: "Nishan Chathuranga",
      categories: ["Dot Net Core"],
      description:
        " Classes that might change at the same time and for the same reason should be grouped together into components.",
      thumbnail:
        "https://miro.medium.com/max/1400/1*EN-joV0Cr_gMn8aX06iHNQ.jpeg",
      date: "2020-05-04",
      link:
        "https://medium.com/@nishancw/clean-architecture-net-core-part-1-introduction-e70e1c49ef6",
    },
    {
      id: 3,
      title: "Getting started with React-Native",
      author: "Tharaka Munasinghe",
      categories: ["React Native", "Android"],
      description:
        "So, today I’m going to show you how to setup react-native in your computer for android development using Windows OS.",
      thumbnail: "https://miro.medium.com/max/1400/0*E2X1G3PbGBH1xn3s.png",
      date: "2020-05-04",
      link:
        "https://medium.com/the-t-word/getting-started-with-react-native-99a249d6cbc9",
    },
  ];

  return (
    <div className="p-2 grid-container row">
      {dummyPostList.map((postItem) => {
        return (
          <ArticleCard
            key={postItem.id}
            imageUrl={postItem.thumbnail}
            title={postItem.title}
            description={postItem.description}
            link={postItem.link}
            author={postItem.author}
            categories={postItem.categories}
          />
        );
      })}
    </div>
  );
};

export default StudentPostGrid;
