import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import "../../index"



export default function Dashboard() {
  return (
      <div className="container">
        <div className="box1">
          <img src="https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g" alt="post-recipe" />
          <Link to="/post/recipe"><button id="post-rec">Post Your Recipe</button></Link>
        </div>
        <div className="box2">
          <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="get-recipe" />
          <Link to="/recipes"><button id="get-rec">Recipes</button></Link>
        </div>
      </div>
  )
}


// export default function Dashboard() {
//   const [posts, setPosts] = useState([]);
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     getPosts()
//       .then((response) => {
//         setPosts(response.data.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div>
//       {posts.length > 0 &&
//         posts.map((post) => {
//           const {name, items,process, author, totalReview, rating } = post;
//           return (
//             <div key={Math.random()}>
//               <div className="max-w-md rounded overflow-hidden shadow-lg">
//                 <img className="w-full" style={{width:"100px"}} src="https://media.istockphoto.com/id/1402004971/photo/healthy-heart-food-high-in-flavonoids-and-polyphenols.jpg?s=1024x1024&w=is&k=20&c=tNHyUcoK9Veqhs5mfNenLTyQ6PTjm-WR4SL_WZEAgQ4=" alt="Recipe Image" />
//                 <div className="px-6 py-4">
//                   <div className="flex items-center mb-2">
//                     <div>
//                       <div className="font-bold text-xl">{name}</div>
//                       <p className="text-gray-700 text-base">{author.fullName}</p>
//                     </div>
//                   </div>
//                   <ul className="list-disc ml-5 mb-4">
//                     <li>{items[0]}</li>
//                     <li>{items[1]}</li>
//                     <li>{items[2]}</li>
//                   </ul>
//                   <p className="text-gray-700 text-base mt-4">Recipe Procedure:</p>
//                   <p className="text-gray-700 text-base">{process}</p>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//     </div>
//   );
// }
// const MaterialForm = () => {
//   return (
//       <div className="container">
//           <h3>Material Theme Form</h3>
//           <form className="col s12">
//               <div className="row">
//                   <div className="input-field col s12">
//                       <input id="name" type="text" className="validate" />
//                       <label htmlFor="name">Name</label>
//                   </div>
//               </div>
//               <div className="row">
//                   <div className="input-field col s12">
//                       <input id="items" type="text" className="validate" />
//                       <label htmlFor="items">Items</label>
//                   </div>
//               </div>
//               <div className="row">
//                   <div className="input-field col s12">
//                       <textarea id="process" className="materialize-textarea"></textarea>
//                       <label htmlFor="process">Process</label>
//                   </div>
//               </div>
//
//               <button className="btn waves-effect waves-light" type="submit" name="action">Submit
//                   <i className="material-icons right">send</i>
//               </button>
//           </form>
//       </div>
//   );
// }

