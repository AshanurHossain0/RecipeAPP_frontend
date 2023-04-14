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
  catch(err){
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

export async function giveReview(rating,review,_id){
  console.log(rating,review,_id);
}
// export async function giveReview(recipeId){
//   console.log(recipeId);
// }

// export async function getReviews() {}
