import React, { useEffect, useState } from "react";
import {getPosts} from "../../scripts/recipes"

export default function Recipes() {
  const [posts, setPosts] = useState([]);
//   const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getPosts()
      .then((response) => {
        setPosts(response.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {posts.length > 0 &&
        posts.map((post) => {
          const {name, items,process, author, totalReview, rating } = post;
          return (
            <div key={Math.random()}>
              <div className="max-w-md rounded overflow-hidden shadow-lg">
                <img className="w-full" style={{width:"100px"}} src="https://media.istockphoto.com/id/1402004971/photo/healthy-heart-food-high-in-flavonoids-and-polyphenols.jpg?s=1024x1024&w=is&k=20&c=tNHyUcoK9Veqhs5mfNenLTyQ6PTjm-WR4SL_WZEAgQ4=" alt="Recipe Image" />
                <div className="px-6 py-4">
                  <div className="flex items-center mb-2">
                    <div>
                      <div className="font-bold text-xl">{name}</div>
                      <p className="text-gray-700 text-base">{author.fullName}</p>
                    </div>
                  </div>
                  <ul className="list-disc ml-5 mb-4">
                    <li>{items[0]}</li>
                    <li>{items[1]}</li>
                    <li>{items[2]}</li>
                  </ul>
                  <p className="text-gray-700 text-base mt-4">Recipe Procedure:</p>
                  <p className="text-gray-700 text-base">{process}</p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}