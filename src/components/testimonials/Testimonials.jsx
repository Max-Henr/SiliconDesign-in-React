import { useEffect, useState } from "react";
import "./Testimonials.css";

function Testimonials() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://win24-assignment.azurewebsites.net/api/testimonials")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const starRating = (starRating) => {
    const starArray = [];
    for (let i = 0; i < starRating; i++) {
      starArray.push(<i className="fa-solid fa-star" key={i}></i>);
    }
    if (starRating < 5) {
      for (let i = 5; starRating < i; i--) {
        starArray.push(<i className="fa-regular fa-star" key={i}></i>);
      }
    }
    return starArray;
  };
  return (
    <div className="card-flex">
      {posts.map((post) => (
        <div key={post.id} id="card-1" className="card">
          <div className="quote">
            <i className="fa-solid fa-quote-left"></i>
          </div>
          <div className="starRating">{starRating(post.starRating)}</div>
          <div className="card-main-content">
            <p>{post.comment}</p>
          </div>
          <div className="role">
            <img src={post.avatarUrl} alt="bitmoji avatar of person" />
            <span>
              <strong>{post.author}</strong>
              <p>{post.jobRole}</p>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Testimonials;
