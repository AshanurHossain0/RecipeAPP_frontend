import React, { useEffect, useState } from "react";
import {Redirect, Route, Link } from "react-router-dom"
import { getPosts ,giveReview, deletePost} from "../../scripts/recipes"
// import Givereview from "./Review"
import "./ArrayInputForm.css"


const userId = localStorage.getItem("userId");
export default function Recipes() {
  const [posts, setPosts] = useState([]);
    const [flag, setFlag] = useState(false);

  useEffect(() => {
    getPosts()
      .then((response) => {
        setPosts(response.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  if(flag) return <Redirect to="/dashboard"/>
  return (
    <div className="cont">
      {posts.length > 0 &&
        posts.map((post) => {
          const { name, items, process, author, totalReview, rating, _id } = post;
          return (
            <div key={Math.random()} className="cont-box">
              <div className="upper">
                <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/chana-masala-recipe-500x500.jpg"></img>
                <h1>{name}</h1>
              </div>
              <div className="lower">
                <div className="author">
                  <h2>Author Details</h2>
                  <div>
                    <p>Name : {author.fullName}</p>
                    <p>Email : {author.email}</p>
                    <p>Gender : {author.gender}</p>
                    <p>City : {author.city}</p>
                  </div>
                </div>
                <div className="recipe">
                  <div className="items">
                    <h2>Items</h2>
                    {items.map((item) => {
                      return (
                        <li key={Math.random()}>{item}</li>
                      )
                    })}
                  </div>

                </div>
                <div className="process">
                  <h2>Making Process</h2>
                  <div className="para">
                    <p >{process}</p>
                  </div>
                </div>
              </div>

              <div className="tail">
                <div className="rating" style={{color:"red"}}>
                  Rating : <span style={{color:"green"}}>{(rating) ? (rating) : <span>No Rating</span>}</span>
                </div>
                <div className="total-review" style={{color:"red"}}>
                  Total Review : <span style={{color:"green"}}>{totalReview}</span>
                </div>
                <button>See Review</button>
                <button onClick={()=>{giveReview(_id); setFlag(true)}} className="review">Give Review</button>
                <button id="dlt" onClick={()=>{deletePost(_id,author._id);setFlag(true)}}>Delete</button>
              </div>
            </div>
          );
        })}
    </div>
  );
}