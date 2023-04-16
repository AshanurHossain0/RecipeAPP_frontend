import axios from "axios";

import { appConfig } from "../config/config";


export async function postRecipe({ name, items, process }) {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": localStorage.getItem("token"),
    },

  };
  const body = JSON.stringify({ name, items, process });
  try {
    const res = await axios.post(`${appConfig.API_URL}/api/recipes`, body, config);
    alert(res.data.msg)
  }
  catch (err) {
    alert(err.message);
  }
}
export async function getPosts() {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": localStorage.getItem("token"),
    },
  };
  const res = await axios.get(`${appConfig.API_URL}/api/recipes`, config);
  return res;
}

export async function deletePost(recipeId, authorId) {
  
  const userId = localStorage.getItem("userId");
  if (userId !== authorId) {
    alert("You can't delete other user's recipe");
    return;
  }
  const confirmed = window.confirm("Are you sure to want to delete?");
  if(!confirmed) return;

  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.delete(`${appConfig.API_URL}/api/recipes/${recipeId}`, config);
  }
  catch (err) {
    alert(err.message);
  }

}


export async function giveReview(recipeId) {
  let review = prompt("Enter Your Review");
  let rate = prompt("Enter Rating out of 5");
  if (review.trim().length === 0) { alert("Please give proper review"); return }
  if (rate < 1 || rate > 5) { alert("Please give valid rating"); return }
  else {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },

    };
    const body = JSON.stringify({ review, rate });
    try {
      await axios.post(`${appConfig.API_URL}/api/reviews/${recipeId}`, body, config);
      alert("Successfully reviewed");
      return;
    }
    catch (err) {
      alert(err.message);
    }
  }
}

// export async function getReviews() {}
